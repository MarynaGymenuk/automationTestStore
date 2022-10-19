import {faker} from '@faker-js/faker';

export const userWithFaker = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    address1: faker.address.streetAddress(),
    city: faker.address.city(),
    zip: faker.address.zipCode(),
    loginName: faker.internet.userName(),
    password: faker.internet.password()
}
