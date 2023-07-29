//**********Mapping**********
const el = {
    txtTitle: 'h1.text-xs-center',
    linkHaveAccount: 'p.text-xs-center > a',
    fieldUser: '#:nth-child(1) > .form-control',
    fieldEmail: ':nth-child(2) > .form-control',
    fieldPassword: ':nth-child(2) > .form-control',
    btnSign: '.btn', 
    txtErrorMsg: '.error-messages > li',
    txtSomethingWrong: 'div.s-QcQDAQA3vV4F > .s-QcQDAQA3vV4F'
  }

//**********Actions**********
class RegisterPage {

  verifySignUpPage(){
    cy.get(el.txtTitle).invoke('text').should('include', 'Sign up');
  }

  registerUser(){
    cy.get(el.fieldUser).type('ian guimaraes');
    cy.get(el.fieldEmail).type('ian@gmail.com');
    cy.get(el.fieldPassword).type('Teste1234');
    cy.get(el.btnSign).click()
  }

  loginFlow(email,password){
    cy.get(el.fieldEmail).type(email);
    cy.get(el.fieldPassword).type(password);
    cy.get(el.btnSign).click()
  }
  
  preencherNovoUsuarioErrado(){
    cy.get(el.tfNome).type('Teste');
    cy.get(el.tfUltimoNome).type('Teste');
    cy.get(el.tfEmail).type('a');
    cy.get(el.tfEndereco).type('Teste');
    cy.get(el.tfUniversidade).type('Teste');
    cy.get(el.tfProfissao).type('Teste');
    cy.get(el.tfGenero).type('Teste');
    cy.get(el.tfIdade).type('18');
  }

  submeterUsuario(){
      cy.get(el.btCriar).click({force:true});
  }

  validarSubmeter(){
    cy.get(el.txtResultadoCriar).invoke('text').should('include', 'Usuário Criado com sucesso');
  }
  retornoErros(){
    cy.get(el.txtResultadoErros).invoke('text').should('include', '1 error proibiu que este usuário fosse salvo:');
  }
}

export default new RegisterPage();