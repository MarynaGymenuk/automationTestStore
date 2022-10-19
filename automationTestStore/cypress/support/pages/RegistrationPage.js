import BasePage from "./BasePage";

class RegistrationPage extends BasePage {

    getRegisterButton(){
        return cy.get('#accountFrm button'); 
    }

    getFirstNameField(){
        return cy.get('#AccountFrm_firstname');
    }

    setFirstName(firstName){
        this.getFirstNameField().type(firstName);
    }

    getLastNameField(){
        return cy.get('#AccountFrm_lastname');
    }

    setLastName(lastName){
        this.getLastNameField().type(lastName);
    }

    getEmailField(){
        return cy.get('#AccountFrm_email');
    }

    setEmail(email){
        this.getEmailField().type(email);
    }

    getAddress1Field(){
        return cy.get('#AccountFrm_address_1');
    }

    setAddress1(address1){
        this.getAddress1Field().type(address1);
    }

    getCityField(){
        return cy.get('#AccountFrm_city');
    }

    setCity(city){
        this.getCityField().type(city);
    }

    getRegionField(){
        return cy.get('#AccountFrm_zone_id');
    }

    setRegion(region){
        this.getRegionField().select(region);
    }

    getZipCodeField(){
        return cy.get('#AccountFrm_postcode');
    }

    setZipCode(zip){
        this.getZipCodeField().type(zip);
    }

    getCountryField(){
        return cy.get('#AccountFrm_country_id');
    }

    setCountry(country){
        this.getCountryField().select(country);
    }

    getLoginNameField(){
        return cy.get('#AccountFrm_loginname');
    }

    setLoginName(loginName){
        this.getLoginNameField().type(loginName);
    }

    getPasswordField(){
        return cy.get('#AccountFrm_password');
    }

    setPassword(password){
        this.getPasswordField().type(password);
    }

    getConfirmPasswordField(){
        return cy.get('#AccountFrm_confirm');
    }

    setConfirmPassword(password){
        this.getConfirmPasswordField().type(password);
    }

    setSubscribe(isSubscribed){
        if (isSubscribed) {
            cy.get('#AccountFrm_newsletter1').click();
        }
        else {
            cy.get('#AccountFrm_newsletter0').click();
        }
    }

    getPrivacyPolicyCheckbox(){
        return cy.get('#AccountFrm_agree');
    }

    checkPrivacyPolicyCheckbox(){
        this.getPrivacyPolicyCheckbox().check();
    }

    clickSubmitButton(){
        cy.get('button[title="Continue"]').click();
    }

    registerNewUser(user, region, country, isSubscribed){
        this.setFirstName(user.firstName);
        this.setLastName(user.lastName);
        this.setEmail(user.email);
        this.setAddress1(user.address1);
        this.setCity(user.city);
        this.setRegion(region);
        this.setZipCode(user.zip);
        this.setCountry(country);
        this.setLoginName(user.loginName);
        this.setPassword(user.password);
        this.setConfirmPassword(user.password);
        this.setSubscribe(isSubscribed);
        this.checkPrivacyPolicyCheckbox();
        this.clickSubmitButton();
    }

    getRegistrationSuccessMessage(){
        return cy.get('h1.heading1');
    }
}

export default new RegistrationPage();
