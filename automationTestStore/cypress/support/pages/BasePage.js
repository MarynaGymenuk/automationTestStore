export default class BasePage {

    getAuthorizationBtnFromHeader(){
        return cy.get('#customer_menu_top');
    }

    getSearchField(){
        return cy.get('#filter_keyword');
    }

    performSearch(searchQuery){
        cy.log(`**Perform search with search query ${searchQuery}**`)
        this.getSearchField().type(searchQuery)
        .closest('form')
        .submit();
    }
}