import checkoutPage from "../../support/pageObject/magento/checkoutPage"

describe('checkout', () => {
  beforeEach(() => {
    cy.visit('') //fill to override baseurl in cypress.config.js
  })

  it('success checkout', () => {
    cy.login()
    cy.chooseproduct()

    cy.wait(5000)
    checkoutPage.clickCart()
    cy.wait(5000)
    checkoutPage.clickChkout()
    cy.url().should('include', '/checkout/#shipping')
    cy.wait(5000)

    // Code to fill shipping information
    checkoutPage.addShippingInfo()
      
    checkoutPage.clickShipmtd()
    checkoutPage.clickNextbtn()
    cy.wait(10000)

    // validate subtotal to total should be the same if single option
    // cy.get(checkoutPage.subtotalchk).then(($subtotal) => {
    //   const subtotal = $subtotal.text().trim()
    //   cy.get(checkoutPage.totalchk).then(($total) => {
    //     // Extract and assert the text from the second element
    //     const total = $total.text().trim()

    //   expect(subtotal).to.equal(total)
    //   })
    
    // })
    checkoutPage.clickPlaceOrder();
    
  })

})