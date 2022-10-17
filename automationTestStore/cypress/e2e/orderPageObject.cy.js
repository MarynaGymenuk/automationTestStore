///<reference types="cypress"/>
import user from '../fixtures/user.json';
import orderPage from '../support/pages/OrderPage';
import authorizationPage from '../support/pages/AuthorizationPage';

it('Place order', () => {
    authorizationPage.visit();
    authorizationPage.submitLoginForm(user.userName, user.password);

    cy.visit('/index.php?rt=product/product&product_id=52');
    
    orderPage.makeOrder(4);
    orderPage.getOrderSuccessMessage().should('contain', 'Your Order Has Been Processed!');
    orderPage.getOrderText().should('contain', 'Thank you for shopping with us!')
    .and('contain', 'Your order ')
    .and('contain', 'has been created!');
});

it('Place order via search', () => {
    const productName = 'Benefit Bella Bamba'

    authorizationPage.visit();
    authorizationPage.submitLoginForm(user.userName, user.password);
  
    orderPage.performSearch(productName);
    orderPage.getProductName().should('contain', productName);
    
    orderPage.makeOrder(4);
    orderPage.getOrderSuccessMessage().should('contain', 'Your Order Has Been Processed!');
    orderPage.getOrderText().should('contain', 'Thank you for shopping with us!')
    .and('contain', 'Your order ')
    .and('contain', 'has been created!');
});
