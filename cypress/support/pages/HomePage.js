//**********Mapping**********
const el = {
    txtLoginConfirmation: ':nth-child(4) > .nav-link',
    btnLoginPage: '.container > .nav > :nth-child(2) > .nav-link',
    btnNewPost: '.container > .nav > :nth-child(2) > .nav-link'
  }

//**********Actions**********
class HomePage {

  goToLogin(){
    cy.get(el.btnLoginPage).click()
  }

  goToNewPost(){
    cy.get(el.btnNewPost, { timeout: 5000 }).should('contains.text', 'Post').click()
  }

  verifyLogin(user){
    cy.get(el.txtLoginConfirmation).invoke('text').should('equal', user);
  }

  verifySignInPage(){
    cy.get(el.txtTitle).invoke('text').should('include', 'Sign in');
  } 


}

export default new HomePage();