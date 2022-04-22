/// <reference types = "cypress" />

import './Uilities/util.js'

describe ("PARiM Assignment",()=>{

 
    before("Navigate to to-do site",()=>
    {
        cy.navigateURL()
     
    })

    let TODO_ITEM_ONE = Cypress.config('TODO_ITEM_ONE')
    let TODO_ITEM_TWO = Cypress.config('TODO_ITEM_TWO')
    let TODO_ITEM_THREE= Cypress.config('TODO_ITEM_THREE')

    it("Add to-do item",() => 
    {
        //Enter to do list 
       cy.enterValue(TODO_ITEM_ONE)
       cy.enterValue(TODO_ITEM_TWO)
       cy.enterValue(TODO_ITEM_THREE)

    })

    it("Validate to-do list item",() => 
    {
        // Pass the to-do item whichever you want to validate in the list
        cy.validateToDoList(TODO_ITEM_ONE)
    })

    it("Remove To-do item",()=>
    {
        // Pass the to-do item whichever you want to remove from the list
       cy.removeToDo(TODO_ITEM_THREE)
    })

})