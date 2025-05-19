import { CommonPageData } from '../pages/common-page/common-page.data';
import { CommonPageMethods } from '../pages/common-page/common-page.methods';
import { Logger } from '../util/logger';
import { LoginMethods } from '../pages/login/login.methods'
import { LoginData } from '../pages/login/login.data';

describe(CommonPageData.testSuites.registroYAutenticacion, () => {
    //Inicio de sesión inválido
    it('Inicio de sesión válido', () => {
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Log in" en la barra de navegación')
        CommonPageMethods.clickOnLogInOption();

        Logger.stepNumber(3)
        Logger.step('Ingresar nombre de usuario y contraseña válidos')
        LoginMethods.insertarUsername(LoginData.validCredentials.username)
        LoginMethods.insertarPassword(LoginData.validCredentials.password)

        Logger.stepNumber(4)
        Logger.step('Hacer clic en Log in para iniciar sesión')
        LoginMethods.clickLoginButton();
        //Verificacion de paso 4
        Logger.verification('Verificar que se redirige al usuario a la página de inicio')
        CommonPageMethods.verifySignedUser(LoginData.validCredentials.username);

        //Nuevos cambios (Vid. 82 Haciendo logout)
        Logger.postCondition('Log out')
        CommonPageMethods.logout();
    })

    it('Inicio de sesión inválido', () => {
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Log in" en la barra de navegación')
        CommonPageMethods.clickOnLogInOption();

        Logger.stepNumber(3)
        Logger.step('Ingresar nombre de usuario y contraseña inválidos')
        LoginMethods.insertarUsername(LoginData.validCredentials.username)
        LoginMethods.insertarPassword('contrasenainvalida')

        Logger.stepNumber(4)
        Logger.step('Hacer clic en Log in para iniciar sesión')
        LoginMethods.clickLoginButton();
        //Verificacion de paso 4
        Logger.verification('Verificar que se muestre mensaje de error indicando que el inicio de sesión ha fallado')
        LoginMethods.verifyWrongPasswordMessage();
        
    })
 }) 