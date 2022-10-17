///<reference types="cypress"/>
import authorizationPage from '../support/pages/AuthorizationPage';
import accountPage from '../support/pages/AccountPage';
import user from '../fixtures/user.json';
import {userWithFaker} from "../support/userWithFaker";

describe('Suite for Login functionality', () => {

  describe('Positive Login Tests', () => {
    it('Authorization', () => {
      authorizationPage.visit();
    
      authorizationPage.submitLoginForm(user.userName, user.password);
    
      accountPage.getUserNameFromHeading().should('contain', user.firstName).and('contain', "My Account");
    
      cy.getCookie('AC_SF_8CEFDA09D5').should('exist');
    });
  });
  
  describe('Negative Login Tests', () => {
  
    it('Authorization with invalid Login Name', () => {
      authorizationPage.visit();
    
      authorizationPage.submitLoginForm(`${user.userName}1`, user.password);
    
      authorizationPage.getErrorNotification().should('contain', 'Error: Incorrect login or password provided.');
    });
    
    it('Authorization with invalid Password', () => {
      authorizationPage.visit();
    
      authorizationPage.submitLoginForm(user.userName, `${user.password}1`);
    
      authorizationPage.getErrorNotification().should('contain', 'Error: Incorrect login or password provided.');
    });
    
    it('Authorization with invalid Login Name and Password', () => {
      authorizationPage.visit();
    
      authorizationPage.submitLoginForm(userWithFaker.loginName, userWithFaker.password);
    
      authorizationPage.getErrorNotification().should('contain', 'Error: Incorrect login or password provided.');
    });
    
    it('Authorization with empty Login Name', () => {
      authorizationPage.visit();
    
      authorizationPage.typeTextInPasswordField(user.password);
      authorizationPage.getLoginButton().click();
    
      authorizationPage.getErrorNotification().should('contain', 'Error: Incorrect login or password provided.');
    });
    
    it('Authorization with empty Password', () => {
      authorizationPage.visit();
    
      authorizationPage.typeTextInLoginField(user.userName);
      authorizationPage.getLoginButton().click();
    
      authorizationPage.getErrorNotification().should('contain', 'Error: Incorrect login or password provided.');
    });
    
    it('Authorization with empty Login Name and Password', () => {
      authorizationPage.visit();
    
      authorizationPage.getLoginButton().click();
    
      authorizationPage.getErrorNotification().should('contain', 'Error: Incorrect login or password provided.');
    });

    it('Authorization with space in Login Name field', () => {
      authorizationPage.visit();
      
      authorizationPage.submitLoginForm(` ${user.userName}`, user.password);
      
      authorizationPage.getErrorNotification().should('contain', 'Error: Incorrect login or password provided.');
    });
      
    it('Authorization with space in Password field', () => {
      authorizationPage.visit();
      
      authorizationPage.submitLoginForm(user.userName, `${user.password} `);
      
      authorizationPage.getErrorNotification().should('contain', 'Error: Incorrect login or password provided.');
    });
  });
});
