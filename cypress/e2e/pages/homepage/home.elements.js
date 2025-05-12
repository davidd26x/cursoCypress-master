export class HomeElements {
    // Esta clase contiene los elementos de la pagina de inicio

    //Categorias de productos 
  static get categories() {
    return {
      get phone() {
        cy.contains("a", "Phones");
      },
      get laptops() {
        cy.contains("a", "Laptops");
      },
      get monitors() {
        cy.contains("a", "Monitors");
      },
    };
  }

  
  static product(productName){
    return cy.contains('a', productName)
  }
}
