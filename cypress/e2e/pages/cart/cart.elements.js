export class CartElements {
  static get buttons() {
    return {
      get PlaceOrderButton() {
        return cy.get('button[data-toggle="modal"]');
      },
    };
  }

  static get links() {
    return {
      // Este método busca un elemento <td> que contenga el nombre del producto y luego encuentra el elemento <a> más cercano dentro de la misma fila (<tr>).
      // Esto es útil para eliminar un producto específico de la lista de productos en el carrito.

      delete(productName) {
        return cy.contains("td", productName).closest("tr").find("a");
      },
    };
  }
}
