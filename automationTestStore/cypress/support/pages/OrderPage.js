import BasePage from "./BasePage";

class OrderPage extends BasePage{

    getProductName(){
        return cy.get('h1.productname');
    }

    getProductQuantity(){
        return cy.get('#product_quantity');
    }

    setProductQuantity(value){
        this.getProductQuantity().clear().type(value);
    }

    getAddToCartButton(){
        return cy.get('.productpagecart');
    }

    getCheckoutButton(){
        return cy.get('#cart_checkout1');
    }

    getConfirmOrderButton(){
        return cy.get('#checkout_btn');
    }

    makeOrder(productQuantity){
        this.setProductQuantity(productQuantity);
        this.getAddToCartButton().click();
        this.getCheckoutButton().click();
        this.getConfirmOrderButton().click();
    }

    getOrderSuccessMessage(){
        return cy.get('h1.heading1');
    }

    getOrderText(){
        return cy.get('.contentpanel');
    }
}

export default new OrderPage();
