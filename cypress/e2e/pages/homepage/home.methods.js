import { HomeElements } from "./home.elements";

//Metodos al hacer click en los elementos de la pagina de inicio
export class HomeMethods{
    static clickOnPhones(){
        HomeElements.categories.phone.click()
    }

    static clickOnLaptops(){
        HomeElements.categories.laptops.click()
    }
    static clickOnMonitors(){
        HomeElements.categories.monitors.click()
    }

    //Metodo para hacer click en un producto
    static clickOnProductLink(productName){
        HomeElements.product(productName).click()
    }

    //Método que verifique que un producto se esté mostrando. Vid-76.
    static verifyProductIsDisplayed(productName){
        HomeElements.product(productName).should('be.visible')
    }
}