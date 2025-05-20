import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { Logger } from '../util/logger';
import { LoginMethods } from '../pages/login/login.methods';
import { LoginData } from '../pages/login/login.data';
import { HomeMethods } from "../pages/homepage/home.methods";
import { ProductDetailsMethods } from "../pages/product-details/product-details.methods";
import { CartMethods } from "../pages/cart/cart.methods";
import { PlaceOrderMethods } from "../pages/order-page/place-order.methods";
import { PlaceOrderData } from "../pages/order-page/place-order.data";
import { ThankYouForYourPurchaseMethods } from "../pages/thank-you-for-your-purchase/thank-you-for-your-purchase.methods";

//Constante user 
const user = LoginData.validCredentials;

//Constante producto para agregarlo al carrito
const product = 'ASUS Full HD'

describe(CommonPageData.testSuites.catalogoYCompras, () => {
    //Caso de Prueba Navegar por categorías
    it('Navegación por categorías', () => {

        //Paso 1
        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como usuario registrado'); 
        Logger.subStep('Navegar a la página de Demoblaze.com');  //Subpaso 1
        CommonPageMethods.navigateToDemoBlaze();
        Logger.subStep('Click on Log in link')  //Subpaso 1.1
        CommonPageMethods.clickOnLogInOption();
        LoginMethods.loginGlobal(user.username, user.password)
        
        //Paso 2
        Logger.stepNumber(2)
        Logger.step('Navegar a la página de inicio') 
        CommonPageMethods.clickOnHomeOption();

        //Paso 3
        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoría de productos en el menú de navegación')
        HomeMethods.clickOnMonitors()

        //Verificacion
        Logger.verification('Verificar que se muestra la lista de productos correspondiente a la categoría seleccionada')
        HomeMethods.verifyProductIsDisplayed('Apple monitor 24')
        HomeMethods.verifyProductIsDisplayed('ASUS Full HD')

        Logger.postCondition('Log out')
        CommonPageMethods.logout();
    })


    //Caso de prueba Agregar producto al carrito
    it('Agregar producto al carrito', () => {

        //Paso 1
        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como usuario registrado'); 
        Logger.subStep('Navegar a la página de Demoblaze.com');  //Subpaso 1
        CommonPageMethods.navigateToDemoBlaze();
        Logger.subStep('Click on Log in link')  //Subpaso 1.1
        CommonPageMethods.clickOnLogInOption();
        LoginMethods.loginGlobal(user.username, user.password)
        
        //Paso 2
        Logger.stepNumber(2)
        Logger.step('Navegar a la página de inicio') 
        CommonPageMethods.clickOnHomeOption();

        //Paso 3
        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoría de productos en el menú de navegación')
        HomeMethods.clickOnMonitors()

        //Paso 4
        Logger.stepNumber(4)
        Logger.step('Hacer clic en un producto específico')
        HomeMethods.clickOnProductLink(product)

        //Paso 5
        Logger.stepNumber(5)
        Logger.verification('Verificar que se muestra la página de detalles del producto')
        ProductDetailsMethods.verifyProductDetailsPageIsDisplayed();

        //Paso 6
        Logger.stepNumber(6)
        Logger.step('Hacer clic en el botón Add to cart')
        ProductDetailsMethods.clickOnAddToCartButton();

        //Paso 7
        Logger.stepNumber(7)
        Logger.verification('Verificar que se muestra un mensaje de confirmación y el producto se agrega correctamente')
        ProductDetailsMethods.verifyProductAddedMessage();
        CommonPageMethods.clickOnCartOption();
        CartMethods.verifyProductAdded(product);

        //Post condicion para deslogearse
        Logger.postCondition('logout')
        CommonPageMethods.logout();

    })

    //Caso de prueba realizar una compra en cypressMaster-main
    it('Realizar una compra', () => {

        //Paso 1
        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como usuario registrado'); 
        Logger.subStep('Navegar a la página de Demoblaze.com');  //Subpaso 1
        CommonPageMethods.navigateToDemoBlaze();
        Logger.subStep('Click on Log in link')  //Subpaso 1.1
        CommonPageMethods.clickOnLogInOption();
        LoginMethods.loginGlobal(user.username, user.password)
        
        //Paso 2
        Logger.stepNumber(2)
        Logger.step('Navegar a la página de inicio') 
        CommonPageMethods.clickOnHomeOption();

        //Paso 3
        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoría de productos en el menú de navegación')
        HomeMethods.clickOnMonitors()

        //Paso 4
        Logger.stepNumber(4)
        Logger.step('Hacer clic en un producto específico')
        HomeMethods.clickOnProductLink(product)

        //Paso 5
        Logger.stepNumber(5)
        Logger.verification('Verificar que se muestra la página de detalles del producto')
        ProductDetailsMethods.verifyProductDetailsPageIsDisplayed();

        //Paso 6
        Logger.stepNumber(6)
        Logger.step('Hacer clic en el botón Add to cart')
        ProductDetailsMethods.clickOnAddToCartButton();

        //Paso 7
        Logger.stepNumber(7)
        Logger.verification('Verificar que se muestre mensaje de verificación')
        ProductDetailsMethods.verifyProductAddedMessage();
        CommonPageMethods.clickOnCartOption();
        CartMethods.verifyProductAdded(product);

        //Paso 8
        Logger.stepNumber(8)
        Logger.step('Hacer clic en la opción (Cart) de la barra de navegación')
        CommonPageMethods.clickOnCartOption();

        //Paso 9
        Logger.stepNumber(9)
        Logger.step('Verificar que se muestre la página de carrito de compras')
        CartMethods.verifyCartPageIsDisplayed();

        //Paso 10
        Logger.stepNumber(10)
        Logger.step('Hacer clic en el botón de Place Order')
        CartMethods.clickOnPlaceOrderButton();

        //Paso 11
        Logger.stepNumber(11)
        Logger.step('Completar los campos obligatorios en la página de información de envío')
        PlaceOrderMethods.insertOrderInformation(PlaceOrderData.testData)

        //Paso 12
        Logger.stepNumber(12)
        Logger.step('Hacer clic en el botón de Purchase')
        PlaceOrderMethods.clickOnPurchaseButton();

        //Paso 13
        Logger.stepNumber(13)
        Logger.step('Verificar que se muestre mensaje de confirmación y se redirige al usuario a la página de inicio');
        ThankYouForYourPurchaseMethods.verifyGreenCheckMarkIsDisplayed();

        //Pausa
        cy.wait(3000)
        ThankYouForYourPurchaseMethods.clickOkButton();
        HomeMethods.verifyHomePageIsDisplayed();

    })
})