//Importación de CommonPageData porque se creó un get para el registro y autenticación
import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { Logger } from "../util/logger";
import { SignupMethods } from "../pages/signup/signup.methods"
import { LoginData } from "../pages/login/login.data";

//Constante para generar random
const user = CommonPageMethods.generateRandomString(10);
const password = CommonPageMethods.generateRandomString(7);

//Nuevas variables para usuarios inválidos
const existingUser = LoginData.validCredentials.username;

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
    SignupMethods.insertarUsername(user)
    SignupMethods.insertarPassword(password)

    Logger.stepNumber(4);
    Logger.step("Hacer clic en “Sign Up” para registrar el usuario.");
    SignupMethods.clickSignupButton();

    //Paso de SignUp con Verificacion
    Logger.verification("Verificar que se muestre el mensaje (Sign up successful)")
    SignupMethods.verifySignupSuccessfulMessageIsDisplayed()
  });


  //Registro de usuario inválido
  it("Registro de usuario inválido", () => {
    //Numero de paso
    Logger.stepNumber(1);
    Logger.step("Navegar a la página de inicio");
    CommonPageMethods.navigateToDemoBlaze();

    Logger.stepNumber(2);
    Logger.step("Hacer clic en “Sign Up” en la barra de navegación");
    CommonPageMethods.clickOnSignUpOption();

    Logger.stepNumber(3);
    Logger.step("Completar algunos campos con información inválida");
    SignupMethods.insertarUsername(existingUser)
    SignupMethods.insertarPassword(password)

    Logger.stepNumber(4);
    Logger.step("Hacer clic en “Sign Up” para registrar el usuario.");
    SignupMethods.clickSignupButton();

    //Paso de SignUp con Verificacion
    Logger.verification("Verificar que se muestre un mensaje de error indicando los campos inválidos.")
    SignupMethods.verifyThatThisUserAlreadyExistMessageDisplayed();

  });


});
