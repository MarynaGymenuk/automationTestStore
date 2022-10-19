///<reference types="cypress"/>
import registrationPage from '../support/pages/RegistrationPage';
import {userWithFaker} from "../support/userWithFaker";
import {faker} from '@faker-js/faker';

const user = {
  firstName: 'First Name',
  lastName: 'Last Name',
  email: faker.internet.email(),
  address1: '123 London',
  city: 'London',
  zip: '12345',
  loginName: faker.internet.userName(),
  password: '123@#!fdfddf'
}

it('Registration', () => {
  cy.visit('/');

  registrationPage.getAuthorizationBtnFromHeader().click();
  registrationPage.getRegisterButton().click();

  registrationPage.registerNewUser(user, 1, 'United Kingdom', false);

  registrationPage.getRegistrationSuccessMessage().should('contain', ' Your Account Has Been Created!');
});

it('Registration with faker.js', () => {
  cy.visit('/');

  cy.log("**Open registration page**");
  registrationPage.getAuthorizationBtnFromHeader().click();
  registrationPage.getRegisterButton().click();

  cy.log("**Fill the registration form**");
  registrationPage.registerNewUser(userWithFaker, 1, 'United Kingdom', true);
  
  cy.log("**Verify thank you message**");
  registrationPage.getRegistrationSuccessMessage().should('contain', ' Your Account Has Been Created!');
});