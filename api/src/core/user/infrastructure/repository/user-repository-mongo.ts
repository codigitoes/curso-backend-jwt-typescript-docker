import UserNotFoundException from '../../domain/exception/user-not-found-exception';
import User from '../../domain/model/user';
import UserRepository from '../../domain/repository/user-repository';
import Email from '../../domain/valueobject/email';
import Id from '../../domain/valueobject/id';
import Name from '../../domain/valueobject/name';
import Password from '../../domain/valueobject/password';
import UserDocument from './user-document';

class UserRespositoryMongoose implements UserRepository {
    constructor() {}

    async create(model: User): Promise<void> {
        const user = new UserDocument({
            id: model.id.value,
            name: model.name.value,
            email: model.email.value,
            password: model.password.value,
        });

        await user.save();
    }

    async getByEmail(email: Email): Promise<User> {
        const user = await UserDocument.findOne({ email: email.value }).exec();
        if (user === null) {
            throw new UserNotFoundException(email.value);
        }

        return new User(
            new Id(user.id),
            new Name(user.name),
            new Email(user.email),
            new Password(user.password)
        );
    }

    async delete(id: Id): Promise<void> {
        const user = await UserDocument.findOne({ id: id.value }).exec();
        if (user === null) {
            throw new UserNotFoundException(id.value);
        }

        await user.deleteOne();
    }
}

export default UserRespositoryMongoose;
