import checkoutPage from "../support/pageObject/checkoutPage"

describe('checkout', () => {
    beforeEach(() => {
      cy.visit('') //fill to override baseurl in cypress.config.js
    })

    it('success checkout', () => {
      cy.login()
      //cy.chooseproduct()

      cy.get('.showcart').click()
      cy.get('#top-cart-btn-checkout').click()
      cy.wait(5000)
      cy.get(checkoutPage.address).type('senopati')
      cy.get(checkoutPage.city).type('jakarta')
      cy.get(checkoutPage.country).select("US") //handling multiple dropdown
      cy.get(checkoutPage.province).select(47) //handling multiple dropdown
      cy.get(checkoutPage.zipcode).type('65132')
      cy.get(checkoutPage.phone).type('56487681384')
      cy.get(checkoutPage.shipmtd).click()
      cy.get(checkoutPage.nextbtn).click()
      cy.wait(10000)

      cy.get(checkoutPage.subtotalchk).then(($subtotal) => {
        const subtotal = $subtotal.text().trim()
        cy.get(checkoutPage.totalchk).then(($total) => {
          // Extract and assert the text from the second element
          const total = $total.text().trim()

        expect(subtotal).to.equal(total)
      })
      
      cy.get(checkoutPage.plcorder).click()
      const thxorder = cy.get(checkoutPage.thxorder).text().trim()
      expect(thxorder, 'Thank you for your purchase!')
    })
  
    
  })
})  