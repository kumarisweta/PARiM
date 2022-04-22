Cypress.Commands.add('navigateURL',()=>{
    cy.visit("http://localhost:3000/")
    
})

Cypress.Commands.add('validateToDoList', (TODO_ITEM) => {
    cy.get('ol').should('contain.text',TODO_ITEM)
})

Cypress.Commands.add('enterValue', (TODO_ITEM) => {
    cy.get('input').type(TODO_ITEM)
    cy.get('input').type('{Enter}')

})

Cypress.Commands.add('removeToDo',(TODO_ITEM)=>{

    if(TODO_ITEM=="Buy Milk")
    {
        cy.get(':nth-child(1) > .App-tick').click()
        
    }
    if(TODO_ITEM=="Buy Curd")
    {
        cy.get(':nth-child(2) > .App-tick').click()
    }
    if(TODO_ITEM=="Buy Pen")
    {
        cy.get(':nth-child(3) > .App-tick').click()
    }
    cy.get(TODO_ITEM).should('not.exist')
  
})