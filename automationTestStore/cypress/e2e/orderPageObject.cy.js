///<reference types="cypress"/>
import user from '../fixtures/user.json';
import {searchExistingProduct} from '../support/helper';
import BasePage from '../support/pages/BasePage';

it('Place order', () => {
    const basePage = new BasePage();

    cy.setCookie("AC_SF_8CEFDA09D5", user.AC_SF_8CEFDA09D5);
    cy.visit('/index.php?rt=product/product&product_id=52');
    
    basePage.makeOrder(4);
    basePage.getOrderSuccessMessage().should('contain', 'Your Order Has Been Processed!');
    basePage.getOrderText().should('contain', 'Thank you for shopping with us!')
    .and('contain', 'Your order ')
    .and('contain', 'has been created!');
});

it('Place order via search', () => {
    const basePage = new BasePage();
    
    cy.setCookie("AC_SF_8CEFDA09D5", user.AC_SF_8CEFDA09D5);
    cy.visit('/');
    
    searchExistingProduct('Benefit Bella Bamba');
    
    basePage.makeOrder(4);
    basePage.getOrderSuccessMessage().should('contain', 'Your Order Has Been Processed!');
    basePage.getOrderText().should('contain', 'Thank you for shopping with us!')
    .and('contain', 'Your order ')
    .and('contain', 'has been created!');
});
