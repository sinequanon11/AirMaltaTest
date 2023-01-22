describe('Air Malta Test', () => {

    it('Air Malta Test', () => {

        cy.visit("https://airmalta.com/");
        cy.title().should('include', 'Air Malta : Air Malta');     // Assertion 1

        cy.get('.col-lg-2 > .btn').click();                    
         
        cy.get(':nth-child(1) > .select-input > .form-control').click();
        cy.get('.input-drop-container > :nth-child(2)').click();
        
        cy.get('.route-selection-origin > .input-holder > .form-control').click();
        cy.get('.mobile-container-content > .form-control').type('Vienna');
        cy.get('.airport-option').click();
       
        cy.get('.route-selection-destination > .input-holder > .form-control > .ellipsis').type('Malta');
        cy.get('.airport-name').click();
        
        cy.get('.startDate > .form-control').click();
        cy.get('[aria-label="Wed Jan 25 2023"] > .date-picker-day-cell > .calendar-day').click();
         
        cy.get('.buttons > .d-none').click();
         
        cy.url().should('include', '/flights/oneway');          // Assertion 2
        cy.contains('Flexible dates').click(); 
        
        cy.url().should('include', '/calendar/oneway');          // Assertion 3
        cy.get("[class='sc-dkaWxM bZQAjI']").first().click()
            .screenshot();                                       // Screenshot
    })
})
