
describe('my test suits' ,()=>{

    //direct access

        it('FixturesDemoTest',()=>{
       
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')            // json Orangehrm folder banauney ani data tanney teha bata 

        //get the data form fixtures

        cy.fixture('orangehrm.json').then ((data)=>{



            cy.get("input[placeholder='Username']").type(data.username);
            cy.get("input[placeholder='Password']").type(data.password);
            cy.get("button[type='submit']").click();
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
            .should('have.text', data.expected);


        })

         
         
     })

      // Access through Hook - for multiples it blocks
        let userdata;
        before(()=> {



            cy.fixture('orangehrm.json').then ((data)=>{

                userdata=data;
            })
        })

      it('fixturesDemoTest',()=>{


        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')            // json Orangehrm folder banauney ani data tanney teha bata 

        //get the data form fixtures

        cy.fixture('orangehrm.json').then ((data)=>{



            cy.get("input[placeholder='Username']").type(data.username);
            cy.get("input[placeholder='Password']").type(data.password);
            cy.get("button[type='submit']").click();
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
            .should('have.text', data.expected);
        })




      })








})