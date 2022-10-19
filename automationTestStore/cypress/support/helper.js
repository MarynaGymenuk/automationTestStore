export function searchExistingProduct(productName){
    cy.get('#filter_keyword')
    .type(productName)
    .closest('form')
    .submit();

    cy.get('h1.productname').should('contain', productName);
}

export function searchProduct(productName) { 
    cy.get('#filter_keyword')
        .type('i')
        .closest('form')
        .submit();

    cy.get(`ul.pagination a`).then(pages => {
        return pages.length
    }).then(pageCount => {
        for (let i = 0; i < pageCount; i++) {
            cy.location().then(location => {
                if (location.search.includes('product/product')) {
                    cy.get('body').then(body => {
                        if (body.find(`a.prdocutname[title="${productName}"]`).length > 0) { //cy.get(`a.prdocutname[title="${productName}"]`).should('exist')
                            cy.get(`a.prdocutname[title="${productName}"]`).click();
                        } else {
                            cy.get(`ul.pagination a`).contains('>').click();
                        }
                    })
                }
            })
        }
    })
}

export function searchProductWithRecursion(productName) {

    cy.get('body').then(body => {
        if (body.find(`a.prdocutname[title="${productName}"]`).length > 0) {
            cy.get(`a.prdocutname[title="${productName}"]`).click();
        } else {
            cy.get(`ul.pagination a`).contains('>').click();
            searchProductWithRecursion(productName)
        }
    })
}
