beforeEach(() => {
    cy.visit('cypress/fixtures/registration_form_2.html')
})

/*
Assignement 4: add content to the following tests
*/

describe('Section 1: Functional tests',() => {

       it('Step 1. User can use only same both first and validation passwords', () => {
        cy.log('Username will be filled')
        cy.get('[data-testid="user"]').type('MyName')
        cy.get('#email').type('myname@email.com')
        cy.get('[data-cy="name"]').type('My')
        cy.get('[data-testid="lastNameTestId"]').type('Name')
        cy.get('[data-testid="phoneNumberTestId"]').type('123456')
        cy.get("#password").type('Password123')
        cy.get('#confirm').type('Password122')
        cy.get('h2').contains('Password').click()
        cy.get('.submit_button').should('be.disabled')
        cy.get('#success_message').should('not.be.visible')
        cy.get('#password_error_message').should('be.visible').should('contain', 'Passwords do not match!')
        cy.get('#confirm').clear()
        cy.get('#confirm').type('Password123')
        cy.get('h2').contains('Password').click()
        cy.get('#password_error_message').should('not.be.visible')
        cy.get('.submit_button').should('be.enabled')
})
})
    it('Step 2. User can submit form with ALL fields added', ()=>{
        cy.log('Username will be filled')
        cy.get("#username").type ("Myname");
        cy.get("#email").type ("myname@mymail.com");
        cy.get('[data-cy="name"]').type('My');
        cy.get('#lastName').type('Name');
        cy.get('[data-testid="phoneNumberTestId"]').type('12345678')
        cy.get('input[type="radio"]').next().eq(0).should('have.text','HTML')
        cy.get('input[type="radio"]').next().eq(1).should('have.text','CSS')
        cy.get('input[type="radio"]').next().eq(2).should('have.text','JavaScript')
        cy.get('input[type="radio"]').next().eq(3).should('have.text','PHP')
        //cy.get('input[type="radio"]').eq(0).should('not.be.checked')
        cy.get('input[type="radio"]').eq(1).should('not.be.checked')
        cy.get('input[type="radio"]').eq(2).should('not.be.checked')
        cy.get('input[type="radio"]').eq(3).should('not.be.checked')
        cy.get('input[type="radio"]').eq(0).check().should('be.checked')
        //cy.get('input[type="radio"]').eq(1).check().should('be.checked')
        //cy.get('input[type="radio"]').eq(2).check().should('be.checked')
        //cy.get('input[type="radio"]').eq(3).check().should('be.checked')
        cy.get('[type="checkbox"]').eq(0).next().should('have.text','I have a bike')
        cy.get('[type="checkbox"]').eq(1).next().should('have.text','I have a car')
        cy.get('[type="checkbox"]').eq(2).next().should('have.text','I have a boat')
        cy.get('[type="checkbox"]').eq(0).should('not.be.checked')
        cy.get('[type="checkbox"]').eq(1).should('not.be.checked')
        //cy.get('[type="checkbox"]').eq(2).should('not.be.checked')
        //cy.get('[type="checkbox"]').eq(0).check().should('be.checked')
        //cy.get('[type="checkbox"]').eq(1).check().should('be.checked')
        cy.get('[type="checkbox"]').eq(2).check().should('be.checked')
        cy.get('#cars').find('option').eq(0).should('have.text','Volvo')
        cy.get('#cars').find('option').eq(1).should('have.text','Saab')
        cy.get('#cars').find('option').eq(2).should('have.text','Opel')
        cy.get('#cars').find('option').eq(3).should('have.text','Audi')
        cy.get('#cars').select('Saab')
        cy.get('#animal').find('option').eq(0).should('have.text','Dog')
        cy.get('#animal').find('option').eq(1).should('have.text','Cat')
        cy.get('#animal').find('option').eq(2).should('have.text','Snake')
        cy.get('#animal').find('option').eq(3).should('have.text','Hippo')
        cy.get('#animal').find('option').eq(4).should('have.text','Cow')
        cy.get('#animal').find('option').eq(5).should('have.text','Horse')
        cy.get('#animal').select('Horse')
        cy.get('#password').type('Password123')
        cy.get('#confirm').type('Password123')
        cy.get('h2').contains('Password').click()
        cy.get('.submit_button').should('be.enabled')
    })

    it('Step 3. User can submit form with valid data and only mandatory fields added', ()=>{
            cy.log('Username will be filled')
            cy.get("#username").type ("Myname");
            cy.get("#email").type ("myname@mymail.com");
            cy.get('[data-cy="name"]').type('My');
            cy.get('#lastName').type('Name');
            cy.get('[data-testid="phoneNumberTestId"]').type('12345678')
            cy.get('#password').type('Password123')
            cy.get('#confirm').type('Password123')
            cy.get('h2').contains('Password').click()
            cy.get('.submit_button').should('be.enabled')
})

it('Step 4. User cannot submit form without mandatory field Last name', ()=>{
    cy.log('Username will be filled')
    cy.get("#username").type ("Myname");
    cy.get("#email").type ("myname@mymail.com");
    cy.get('[data-cy="name"]').type('My');
    //cy.get('#lastName').type('Name');
    cy.get('[data-testid="phoneNumberTestId"]').type('12345678')
    cy.get('#password').type('Password123')
    cy.get('#confirm').type('Password123')
    cy.get('h2').contains('Password').click()
    cy.get('.submit_button').should('be.disabled')
    cy.get('#success_message').should('not.be.visible')
})

/*
Assignement 5: create more visual tests
*/

describe('Section 2: Steps 1. and 2. Visual tests', () => {
  it('Check that logo 1 and 2 are correct and have correct size', () => {
    cy.get('#logo').eq(0).should('be.visible').and('have.attr','src','cerebrum_hub_logo.png')
    cy.get('img').invoke('height').should('be.lessThan', 178).and('be.greaterThan', 100) 

    cy.get('img').eq(1).should('be.visible').and('have.attr','src','cypress_logo.png')
    cy.get('img').invoke('height').should('be.lessThan', 178).and('be.greaterThan', 100) 
  });
});

    it('Check navigation part Registration form number 1,2', () => {
        cy.get('nav').children().should('have.length', 2)
        cy.get('nav').siblings('h1').should('have.text', 'Registration form number 2')
        cy.get('nav').children().eq(0).should('be.visible')
            .and('have.attr', 'href', 'registration_form_1.html')
            .click()
        cy.url().should('contain', '/registration_form_1.html')
        cy.go('back')
        cy.log('Back again in registration form 2')

    })   

        it('Step 3. Check navigation part Registration form number 3', () => {
            cy.get('nav').children().should('have.length', 2)
            cy.get('nav').siblings('h1').should('have.text', 'Registration form number 2')
            cy.get('nav').children().eq(1).should('be.visible')
                .and('have.attr', 'href', 'registration_form_3.html')
                .click()
            cy.url().should('contain', '/registration_form_3.html')
            cy.go('back')
            cy.log('Back again in registration form 2')
        

    })

    it('Step 4. Check that the list of checkboxes is correct', () => {
        cy.get('[type="checkbox"]').should('have.length', 3)

        cy.get('[type="checkbox"]').eq(0).next().should('have.text','I have a bike')
        cy.get('[type="checkbox"]').eq(1).next().should('have.text','I have a car')
        cy.get('[type="checkbox"]').eq(2).next().should('have.text','I have a boat')

        cy.get('[type="checkbox"]').eq(0).should('not.be.checked')
        cy.get('[type="checkbox"]').eq(1).should('not.be.checked')
        cy.get('[type="checkbox"]').eq(2).should('not.be.checked')

        cy.get('[type="checkbox"]').eq(0).check().should('be.checked')
        cy.get('[type="checkbox"]').eq(1).check().should('be.checked')
        //cy.get('[type="checkbox"]').eq(2).check().should('be.checked')

    })

    it('Step 5. Check that the dropdown of favorite animals is correct.', () => {
            cy.get('#animal').select(1).screenshot('animal drop-down');
            cy.screenshot('Full page screenshot');
            cy.get('#animal').children().should('have.length', 6);
            cy.get('#animal').find('option').eq(0).should('have.text', 'Dog');
            cy.get('#animal').find('option').then((options) => {
              const actual = options.map((index, option) => Cypress.$(option).val()).get();
              expect(actual).to.deep.eq(['dog', 'cat', 'snake', 'hippo', 'cow', 'mouse']);
            });
          });
