import {faker} from "@faker-js/faker";

export class FakerHelper{

    static createUser(){
        return {
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          email: faker.internet.email(),
          telephone:`+90${faker.string.numeric(10)}`,
          password: "Test123.",
        };
    }


}