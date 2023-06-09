import EnvironmentLoader from '../../../../../src/config/EnvironmentLoader';
import MongooseConnection from '../../../../../src/config/MongooseConnection';
import User from '../../../../../src/core/user/domain/model/user';
import UserRepository from '../../../../../src/core/user/domain/repository/user-repository';
import UserRespositoryMongoose from '../../../../../src/core/user/infrastructure/repository/user-repository-mongo';
import UserMother from '../../../../mother/user.mother';

describe('mongo user repository', () => {
    it('should save an user', async () => {
        const environment: EnvironmentLoader = new EnvironmentLoader();
        await MongooseConnection.connectDB(environment.getDsn());
        const user: User = UserMother.User();
        const sut: UserRepository = new UserRespositoryMongoose();

        sut.create(user);
        const actual: User = await sut.getByEmail(user.email);

        expect(actual.password).toBeDefined();
        expect(actual.name.value).toStrictEqual(user.name.value);
        expect(actual.email.value).toStrictEqual(user.email.value);
        expect(actual.id.value).toStrictEqual(user.id.value);

        await sut.delete(user.id);
        await MongooseConnection.disconnectDB();
    });
});
