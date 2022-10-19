///<reference types="cypress"/>
import user from '../fixtures/user.json';
import {searchExistingProduct} from '../support/helper';
import authorizationPage from '../support/pages/AuthorizationPage';

it('Place order', () => {
  authorizationPage.visit();
  authorizationPage.submitLoginForm(user.userName, user.password);

  cy.visit('/index.php?rt=product/product&product_id=52');

  cy.get('#product_quantity').clear().type('4');
  cy.get('.productpagecart').click();
  cy.get('#cart_checkout1').click();
  cy.get('#checkout_btn').click();
  cy.get('h1.heading1').should('contain', 'Your Order Has Been Processed!');

  cy.get('.contentpanel')
  .should('contain', 'Thank you for shopping with us!')
  .and('contain', 'Your order ')
  .and('contain', 'has been created!');

})

it('Place order via search', () => {
  authorizationPage.visit();
  authorizationPage.submitLoginForm(user.userName, user.password);
 
  searchExistingProduct('Benefit Bella Bamba');

  cy.get('#product_quantity').clear().type('4');
  cy.get('.productpagecart').click();
  cy.get('#cart_checkout1').click();
  cy.get('#checkout_btn').click();
  cy.get('h1.heading1').should('contain', 'Your Order Has Been Processed!');

  cy.get('.contentpanel')
  .should('contain', 'Thank you for shopping with us!')
  .and('contain', 'Your order ')
  .and('contain', 'has been created!');

})