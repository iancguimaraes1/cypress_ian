//**********Mapping**********
const el = {
    fieldArticleTitle: ':nth-child(1) > .form-control',
    fieldArticleDescription: ':nth-child(2) > .form-control',
    fieldArticleContent: ':nth-child(3) > .form-control',
    fieldArticleTags: ':nth-child(4) > .form-control',
    btnPublishArticle: '.btn',
    txtPublishedArticleTitle: 'h1',
    btnDeleteArticle: 'form > .btn',
    txtNotFound: 'div.s-QcQDAQA3vV4F > .s-QcQDAQA3vV4F'
  }

//**********Actions**********
class NewPostPage {

  
  /*//Out of use right now
  verifyArticleExistence(title){
    cy.visit(`/article/${title}`)
    cy.get(el.txtNotFound).then(($txt) => {
      if ($txt.exists()) {
        console.log("Article doesn't exist, we can proceed")
      } else {
        newPostPage.deletePublishedArticle()
      }
    })
  }*/

  fillTitle(title){
    cy.get(el.fieldArticleTitle).type(title)
  }

  fillDescription(description){
    cy.get(el.fieldArticleDescription).type(description)
  }

  fillContent(content){
    cy.get(el.fieldArticleContent).type(content)
  }
  
  fillTags(tags){
    cy.get(el.fieldArticleTags).type(tags)
  }

  clickPublishArticle(){
    cy.get(el.btnPublishArticle).click()
    console.log('Publish article button clicked')
  }

  verifyNewPostPage(){
    cy.get(el.btnPublishArticle).invoke('text').should('equal', 'Publish Article')
  }

  verifyPublishedArticle(title){
    cy.get(el.txtPublishedArticleTitle).invoke('text').should('equal', title)
  }

  deletePublishedArticle(){
    cy.get(el.btnDeleteArticle).click()
    console.log('Delete article button clicked')
  }




}

export default new NewPostPage();