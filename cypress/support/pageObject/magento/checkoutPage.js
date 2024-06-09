class checkoutPage{
    cartbtn = '.showcart'
    pcheckoutbtn = '#top-cart-btn-checkout'
    address = "input[name='street[0]']"
    city = "input[name='city']"
    province = '[name="region_id"]'
    country = '[name="country_id"]'
    prohio = '[data-title="Ohio"]'
    zipcode = "input[name='postcode']"
    phone = "input[name='telephone']"
    shipmtd = "#label_carrier_bestway_tablerate"
    nextbtn = ".button"
    subtotalchk = '[data-th="Cart Subtotal"]'
    totalchk = '[data-th="Order Total"]'
    plcorder = '.payment-method-content > :nth-child(4) > div.primary > .action'
    thxorder = '.base'

    clickcart() {
        cy.get(this.cartbtn).click();
    }
    clickchkout() {
        cy.get(this.pcheckoutbtn).click();
        cy.get().should('have.text', 'Welcome to Example');
    }
    clickshipmtd() {
        cy.get(this.shipmtd).click()
    }
    clicknextbtn() {
        cy.get(this.nextbtn).click()
    }

}



export default new checkoutPage()