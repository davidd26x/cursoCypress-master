import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { Logger } from '../util/logger';
import { LoginMethods } from '../pages/login/login.methods';
import { LoginData } from '../pages/login/login.data';
import { HomeMethods } from "../pages/homepage/home.methods";

//Constante user 
const user = LoginData.validCredentials;

describe(CommonPageData.testSuites.catalogoYCompras, () => {
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
    })
})