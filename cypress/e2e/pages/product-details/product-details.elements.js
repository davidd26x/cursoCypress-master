export class ProductDetailsElements {
  static get buttons() {
    return {
      get addToCartButton() {
        return cy.contains("a", "Add to cart");
      },
    };
  }
}
