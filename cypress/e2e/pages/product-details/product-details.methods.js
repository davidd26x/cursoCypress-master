// Importa la clase que contiene los selectores de los elementos de la página de detalles del producto
import { CommonPageMethods } from "../common-page/common-page.methods";
import { ProductDetailsElements } from "./product-details.elements";

// Clase que agrupa métodos o acciones que se pueden realizar en la página de detalles del producto
export class ProductDetailsMethods{

    // Método estático que hace clic en el botón "Add to cart"
    static clickOnAddToCartButton() {
        ProductDetailsElements.buttons.addToCartButton.click();
    }

    //Método para verificar que la página de detalles de producto se muestre
    static verifyProductDetailsPageIsDisplayed(){
        ProductDetailsElements.buttons.addToCartButton.should('be.visible')
    }

    //Método para verificar que el producto se agrega al carrito
    static verifyProductAddedMessage(){
        CommonPageMethods.verifyAlert('Product added')
    }
}