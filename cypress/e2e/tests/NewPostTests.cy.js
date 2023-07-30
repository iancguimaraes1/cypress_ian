//Page imports
import loginPage from '../../support/pages/LoginPage.js';
import homePage from '../../support/pages/HomePage.js';
import newPostPage from '../../support/pages/NewPostPage.js';
import article from '../../support/fixtures/article.json';


describe('newPostValidations', ()=>{
    var email = Cypress.config('email')
    var password = Cypress.config('password')
    var user = Cypress.config('user')
    var title = article.title
    var description = article.description
    var content = article.content
    var tags = article.tags

    //Realize login first thing
    beforeEach(()=>{
        cy.visit('/login')  
        loginPage.loginFlow(email, password)
        
    })

    it('Validate that new post page is open', ()=>{
        homePage.goToNewPost()
        newPostPage.verifyNewPostPage()
    })

    it('Realize a new post and validate it', ()=>{
        //The post will be deleted after validation
        homePage.goToNewPost()
        newPostPage.fillTitle(title) 
        newPostPage.fillDescription(description) 
        newPostPage.fillContent(content) 
        newPostPage.fillTags(tags) 
        newPostPage.clickPublishArticle()
        newPostPage.verifyPublishedArticle(title)
        newPostPage.deletePublishedArticle()
    })
})
