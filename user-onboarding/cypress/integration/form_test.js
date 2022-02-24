//writing my tests here

describe("User Onboarding ", ()=>{  

   
    beforeEach(() =>{
        cy.visit('http://localhost:3000/')

    })
    
    it('sanity checks', () => {
        //assertion goes here
        expect(5).to.equal(5)
    })


})
