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
}