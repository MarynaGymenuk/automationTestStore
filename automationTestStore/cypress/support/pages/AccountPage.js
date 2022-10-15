import BasePage from "./BasePage";

class AccountPage extends BasePage{
    visit(){
        cy.log('**Open login page**');
        cy.visit('/index.php?rt=account/account');
    }

   getUserNameFromHeading(){
        return cy.get('h1.heading1');
   }
}
export default new AccountPage();