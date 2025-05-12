//Importación de CommonPageData porque se creó un get para el registro y autenticación
import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { Logger } from "../util/logger";
import { SignupMethods } from "../pages/signup/signup.methods"

describe(CommonPageData.testSuites.registroYAutenticacion, () => {
  it("Registro de usuario válido", () => {
    //Numero de paso
    Logger.stepNumber(1);
    Logger.step("Navegar a la página de inicio");
    CommonPageMethods.navigateToDemoBlaze();

    Logger.stepNumber(2);
    Logger.step("Hacer clic en “Sign Up” en la barra de navegación");
    CommonPageMethods.clickOnSignUpOption();

    Logger.stepNumber(3);
    Logger.step("Completar todos los campos obligatorios con información válida");
    SignupMethods.insertarUsername('dfkjasnkdjdsad')
    SignupMethods.insertarPassword('dfkjasnkdjdsad')

    Logger.stepNumber(4);
    Logger.step("Hacer clic en “Sign Up” para registrar el usuario.");
    SignupMethods.clickSignupButton();

    //Paso de SignUp con Verificacion
    Logger.verification("Verificar que se muestre el mensaje (Sign up successful)")
    SignupMethods.verifySignupSuccessfulMessageIsDisplayed()
  });
});
