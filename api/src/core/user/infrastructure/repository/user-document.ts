import { getModelForClass, prop } from '@typegoose/typegoose';
import User from '../../domain/model/user';

class UserMongoSchema {
    @prop({
        required: true,
        unique: true,
        trim: true,
        minlength: 36,
        maxlength: 36,
    })
    id: string;

    @prop({
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 25,
    })
    name: string;

    @prop({
        required: true,
        unique: true,
        trim: true,
    })
    email: string;

    @prop({
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 200,
    })
    password: string;

    constructor(model: User) {
        this.id = model.id.value;
        this.name = model.name.value;
        this.email = model.email.value;
        this.password = model.password.value;
    }
}

const UserDocument = getModelForClass(UserMongoSchema);

export default UserDocument;
