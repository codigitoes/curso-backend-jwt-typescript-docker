import EnvironmentLoader from '../../../../../src/config/EnvironmentLoader';
import MongooseConnection from '../../../../../src/config/MongooseConnection';
import UserNotFoundException from '../../../../../src/core/user/domain/exception/user-not-found-exception';
import User from '../../../../../src/core/user/domain/model/user';
import UserRepository from '../../../../../src/core/user/domain/repository/user-repository';
import Id from '../../../../../src/core/user/domain/valueobject/id';
import UserRespositoryMongoose from '../../../../../src/core/user/infrastructure/repository/user-repository-mongo';
import UserMother from '../../../../mother/user.mother';

const environment: EnvironmentLoader = new EnvironmentLoader();
const sut: UserRepository = new UserRespositoryMongoose();

beforeAll(async () => {
    await MongooseConnection.connectDB(environment.getDsn());
});

afterAll(async () => {
    await MongooseConnection.disconnectDB();
});

describe('mongo user repository', () => {
    it('should save an user and getByEmail', async () => {
        const user: User = UserMother.User();

        sut.create(user);
        const actual: User = await sut.getByEmail(user.email);

        expect(actual.password).toBeDefined();
        expect(actual.name.value).toStrictEqual(user.name.value);
        expect(actual.email.value).toStrictEqual(user.email.value);
        expect(actual.id.value).toStrictEqual(user.id.value);

        await sut.delete(user.id);
    });

    it('should delete an existing user', async () => {
        const user: User = UserMother.User();
        sut.create(user);

        await sut.delete(user.id);

        try {
            await sut.getByEmail(user.email);
        } catch (error) {
            expect(error).toBeInstanceOf(UserNotFoundException);
        }
    });

    it('should throw an user not found exception on delete non existing user', async () => {
        try {
            await sut.delete(Id.random());
        } catch (error) {
            expect(error).toBeInstanceOf(UserNotFoundException);
        }
    });

    it('should throw an user not found exception on get by email non existing user', async () => {
        try {
            await sut.getByEmail(UserMother.Email());
        } catch (error) {
            expect(error).toBeInstanceOf(UserNotFoundException);
        }
    });
});
