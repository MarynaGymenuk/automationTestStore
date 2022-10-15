import BasePage from "./BasePage";

class AuthorizationPage extends BasePage{
    visit(){
        cy.log('**Open login page**');
        cy.visit('/index.php?rt=account/login');
    }

    getLoginField(){
        return cy.get('#loginFrm_loginname');
    }

    getPasswordField(){
        return cy.get('#loginFrm_password');
    }

    getLoginButton(){
        return cy.get('button[title="Login"]');
    }

    typeTextInLoginField(userName){
        cy.log(`Type username ${userName} in login field`)
        this.getLoginField().type(userName);
    }

    typeTextInPasswordField(password){
        cy.log(`Type password ${password} in password field`)
        this.getPasswordField().type(password);
    }

    submitLoginForm(userName, password){
        cy.log(`Fill login form`);
        this.getLoginField().type(userName);
        this.getPasswordField().type(password);

        cy.log(`Click login button`);
        this.getLoginButton().click();
    }
}
export default new AuthorizationPage();