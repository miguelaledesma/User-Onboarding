//writing my tests here

describe("User Onboarding ", ()=>{  

   
    beforeEach(() =>{
        cy.visit('http://localhost:3000/')

    })

    const textInput = () => cy.get("input[type=text]")
    const emailInput = () => cy.get("input[type=text]")
    const passwordInput = () => cy.get("input[type=password]")
    const tosInput = () => cy.get("input[type=checkbox]")

    it('sanity checks', () => {
        //assertion goes here
        expect(5).to.equal(5)
    })
    it('checks if input is showing', () => {
        textInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        tosInput().should('exist')
    })

})
