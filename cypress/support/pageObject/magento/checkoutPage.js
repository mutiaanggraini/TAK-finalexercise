class checkoutPage{
    cartbtn = '.showcart'
    pcheckoutbtn = '#top-cart-btn-checkout'
    cartdetail = ':nth-child(7) > .secondary > .action > span'
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

    clickCart() {
        cy.get(this.cartbtn).click();
    }
    clickProceedOrder() {
        cy.get(this.cartdetail).click();
    }
    clickChkout() {
        cy.get(this.pcheckoutbtn).click();
        //cy.get().should();
    }
    clickShipmtd() {
        cy.get(this.shipmtd).click();
    }
    clickNextbtn() {
        cy.get(this.nextbtn).click();
    }
    clickPlaceOrder() {
        cy.get(this.plcorder).click()
    }

    addShippingInfo() {
        cy.fixture('checkout').then((data) => {
            cy.get(this.address).type(data.address);
            cy.get(this.city).type(data.city);
            cy.get(this.country).select(data.country); //handling multiple dropdown
            cy.get(this.province).select(47); //handling multiple dropdown
            cy.get(this.zipcode).type(data.zipcode);
            cy.get(this.phone).type(data.phone);
            cy.wait(5000);
        })    
    }


}

export default new checkoutPage()