///<reference types="cypress"/>
import authorizationPage from '../support/pages/AuthorizationPage';
import accountPage from '../support/pages/AccountPage';
import user from '../fixtures/user.json';

it('Authorization', () => {
  authorizationPage.visit();

  authorizationPage.submitLoginForm(user.userName, user.password);

  accountPage.getUserNameFromHeading().should('contain', user.firstName).and('contain', "My Account");

  cy.getCookie('AC_SF_8CEFDA09D5').should('exist');

})

it('Test inheritance', () => {
  authorizationPage.visit();

  authorizationPage.performSearch('i');
})