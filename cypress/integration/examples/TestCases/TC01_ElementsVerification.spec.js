describe('Main functionality',() =>{
    beforeEach(()=> {
        cy.visit('http://stanislavv.ca/React/PizzaMaker1/#')
    });

    it('Sections verification',function(){
        cy.get ('h2').contains('Pizza Builder');
        cy.get('.lead').contains('Here you can build your pizza using the builder with the ingredients provided.');
        cy.get('.col-md-8 > h4').contains('Your pizza:');
        cy.get('.ingredientSpace');
        cy.get('.col-md-4');
       
    });

    it(' Add items to cart',function(){
        cy.get(':nth-child(1) > .center > .input-group > :nth-child(3) > .btn')
            .click();
    
        cy.get(':nth-child(1) > .center > .input-group > .form-control').should('have.value','1');

        cy.get(':nth-child(2) > .center > .input-group > :nth-child(3) > .btn')
            .click();
        cy.get(':nth-child(3) > .center > .input-group > :nth-child(3) > .btn')
            .click();
        cy.get(':nth-child(4) > .center > .input-group > :nth-child(3) > .btn')
            .click();
        cy.get(':nth-child(5) > .center > .input-group > :nth-child(3) > .btn')
            .click();
        cy.get(':nth-child(6) > .center > .input-group > :nth-child(3) > .btn')
            .click();
        cy.get(':nth-child(7) > .center > .input-group > :nth-child(3) > .btn')
            .click();

        cy.get('.badge').contains('20.25');
        cy.get('strong').contains('20.25');

    }); 

    it(' Remove items from cart',function(){
        cy.get(':nth-child(1) > .center > .input-group > :nth-child(3) > .btn')
            .click();
        cy.get(':nth-child(1) > .center > .input-group > :nth-child(1) > .btn')
                .click();

        cy.get(':nth-child(1) > .center > .input-group > .form-control').should('have.value','0');

        cy.get(':nth-child(2) > .center > .input-group > :nth-child(3) > .btn')
            .click();
        cy.get(':nth-child(2) > .center > .input-group > :nth-child(1) > .btn')
                .click();

        cy.get(':nth-child(3) > .center > .input-group > :nth-child(3) > .btn')
                .click();    
        cy.get(':nth-child(3) > .center > .input-group > :nth-child(1) > .btn')
                .click();
        
        cy.get(':nth-child(4) > .center > .input-group > :nth-child(3) > .btn')
                .click();
        cy.get(':nth-child(4) > .center > .input-group > :nth-child(1) > .btn')
                .click();

        cy.get(':nth-child(5) > .center > .input-group > :nth-child(3) > .btn')
                .click();
        cy.get(':nth-child(5) > .center > .input-group > :nth-child(1) > .btn')
                .click();

        cy.get(':nth-child(6) > .center > .input-group > :nth-child(3) > .btn')
                .click();    
        cy.get(':nth-child(6) > .center > .input-group > :nth-child(1) > .btn')
                .click();

        cy.get(':nth-child(7) > .center > .input-group > :nth-child(3) > .btn')
            .click();
        cy.get(':nth-child(7) > .center > .input-group > :nth-child(1) > .btn')
                .click();
    
        cy.get('.badge').contains('3.00');
        cy.get('strong').contains('3.00');

    });         
    

     it('Reset pizza',function(){
        cy.get(':nth-child(1) > .center > .input-group > :nth-child(3) > .btn')
            .click();

        cy.get('.badge').contains('8.00');
        cy.get('strong').contains('8.00');

        cy.get('.align-items-center > .btn')
            .click();

        cy.get('.badge').contains('3.00');
        cy.get('strong').contains('3.00');

    });
    
    it('Checkout',function(){
        cy.get(':nth-child(1) > .center > .input-group > :nth-child(3) > .btn')
            .click();
        cy.get(':nth-child(9) > .btn')
            .click();  

        cy.get('.whiteRectangle')
            .contains('8.00'); 
        cy.contains('Cold cuts');
        cy.contains('Continue to checkout?');

        cy.get('.checkoutButtons > .btn-primary')
            .click();

        cy.get('.btn-dark')
            .click();
        cy.get('.whiteRectangle').should('not.exist')
        
     });

    
});