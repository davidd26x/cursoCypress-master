// Importa la clase que contiene los selectores de los elementos de la página de detalles del producto
import { ProductDetailsElements } from "./product-details.elements";

// Clase que agrupa métodos o acciones que se pueden realizar en la página de detalles del producto
export class ProductDetailsMethods{

    // Método estático que hace clic en el botón "Add to cart"
    static clickOnAddToCartButton() {
        ProductDetailsElements.buttons.addToCartButton.click();
    }
}