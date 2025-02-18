
import 'cypress-iframe'
describe('handling-frames',()=>{

it('approach-1',()=>{

    cy.visit('https://the-internet.herokuapp.com/iframe')   //not working of website disbale editing
   const iframe=cy.get('#mce_0_ifr')
    .its('0.contentDocument.body')    //entering into document
     .should('be.visible')
     .then(cy.wrap);
//clear frame and type value here Welcome
    iframe.clear().type("Welcome {ctrl+a}"); //to bold text  and inspect bold element 
    cy.get("boldfieldselete").click();    
    


})

  

    
it.only('by using Customs command',()=>{

    cy.visit('https://the-internet.herokuapp.com/iframe') //to bold text  and inspect bold element   //not working of website disbale editing
  //to get iframe command using custom command cy.getiframe('id of iframe pass garney yo vita')

cy.getiframe('#mce_0_ifr').clear().type("Welcome {ctrl+a}");  //yesley kaam garcha code aaudena and apply these method 

       //clear frame and type value here Welcome

cy.get("boldfieldselete").click();    
    


})

it.only('approch-3 using cypress-iframe plugins',()=>{              //install iframe in terminal and   1) npm install -D cypress-iframe
    //                                                                                            write before describe block      2) import 'cpress-iframe'  
    cy.visit('https://the-internet.herokuapp.com/iframe')
    cy.frameLoaded('mce_0_ifr');    //load the frame form this command form npm plugins 
    cy.iframe('mce_0_ifr').clear().type('Welcome{ctrl+a}');       //interacting
    cy.get('boldselect').click();



 
})
})