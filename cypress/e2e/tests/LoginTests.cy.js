///<reference types="Cypress"/>

//Page imports
import loginPage from '../../support/pages/LoginPage.js';
import homePage from '../../support/pages/HomePage.js';


describe('loginValidations', ()=>{
    var email = Cypress.config('email')
    var password = Cypress.config('password')
    var user = Cypress.config('user')

    //Since this is only login tests we can iniciate the browser on login page
    beforeEach(()=>{
        cy.visit('/login')  
    })

    it('Validate that login page is open', ()=>{
        loginPage.verifySignInPage()
    })

    it('Successful login', ()=>{
        //Realize login with registered user and validate it on home page
        loginPage.loginFlow(email, password)
        homePage.verifyLogin(user);   
    })

    it('Login attempt with wrong password', ()=>{
        //Try to login with wrong password
        loginPage.loginFlow(email, 'password')
        loginPage.errorMessage();   
    })
})
