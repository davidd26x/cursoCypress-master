export class PlaceOrderElements {
  static get textboxes() {
    return {
      //Inputs que se encuentran en la ventana de Place Order
      get name() {
        return cy.get("input#name");
      },
      get country() {
        return cy.get("input#country");
      },
      get city() {
        return cy.get("input#city");
      },
      get creditCard() {
        return cy.get("input#card");
      },
      get month() {
        return cy.get("input#month");
      },
      get year() {
        return cy.get("input#year");
      },
    };
  }

  static get buttons(){
    return {
        //Botones en ventana de Place Order
        get purchase(){
<<<<<<< HEAD
            return cy.contains('button', 'Purchase')
=======
            cy.contains('button', 'Purchase')
>>>>>>> 7992e27311f3fc70195a54f919bc6b501ba434a5
        },
        get close(){
            return cy.get('div[id="orderModal"] button').eq(1)
        }
    }
  }
}
