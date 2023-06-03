FROM ubuntu:22.04

RUN echo 'alias ls="ls --col"' >> /etc/bash.bashrc
RUN apt-get update && apt-get install -y \
    git \
    nmap \
    sshpass \
    iputils-ping \
    net-tools \
    ccze \
    nano \
    unzip \
    gnupg \
    tar \
    sudo \
    wget \
    libaio1 \
    libpq-dev \
    libwebp-dev \
    libfreetype6 \
    libfreetype6-dev \
    g++ \
    cron \
    curl \
    libonig-dev \
    build-essential 
RUN mkdir -p /usr/share/man/man1
RUN apt-get update && \
    apt-get install -y \
    libzip-dev \
    libpng-dev

RUN curl -sS https://pgp.mongodb.com/server-6.0.asc | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/mongodb-6.0.gpg
RUN echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
RUN apt update && apt install -y mongodb-mongosh

WORKDIR /var/www/vhosts/curso-typescript
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && apt update && apt install -y nodejs

COPY ssl.crt /etc/apache2/ssl/ssl.crt
COPY ssl.key /etc/apache2/ssl/ssl.key

# create user
RUN echo markitos
RUN groupadd -g 1000 markitos
RUN useradd markitos -u 1000 -g 1000 -m -s /bin/bash && echo "markitos:markitos" | chpasswd && adduser markitos sudo && chown -R markitos:markitos /var/www
RUN echo "markitos    ALL=(ALL:ALL) ALL" >> /etc/sudoers

# timezone
RUN rm -f /etc/localtime ; ln -s /usr/share/zoneinfo/Europe/Madrid /etc/localtime

# Clean up
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN chown markitos:markitos ../curso-typescript
RUN echo 'export PATH=${PATH}:/var/www/vhosts/curso-typescript/node_modules/.bin' >> /etc/bash.bashrc

CMD ["/bin/bash", "-c", "npm install;npm run dev"]
