export class HomeElements {
    // Esta clase contiene los elementos de la pagina de inicio

    //Categorias de productos 
  static get categories() {
    return {
      get phone() {
        return cy.contains("a", "Phones");
      },
      get laptops() {
        return cy.contains("a", "Laptops");
      },
      get monitors() {
        return cy.contains("a", "Monitors");
      },
    };
  }

  
  static product(productName){
    return cy.contains('a', productName)
  }
}
