import { CommonPageMethods } from "../common-page/common-page.methods";
import { SignupElements } from "./signup.elements";

export class SignupMethods {
  static insertarUsername(username) {
    SignupElements.textBoxes.username.invoke('val', username);
  }

  static insertarPassword(password) {
    SignupElements.textBoxes.password.invoke('val', password);
  }

  static clickSignupButton() {
    SignupElements.buttons.open.click();
  }

  //Metodo que hace todo el proceso de signup
  static signup(username, password) {
    SignupMethods.insertarUsername(username);
    SignupMethods.insertarPassword(password);
    SignupMethods.clickSignupButton();
  }


  //Nuevo metodo para mostrar el mensaje exitoso de inicio de sesión
  static verifySignupSuccessfulMessageIsDisplayed(){
    CommonPageMethods.verifyAlert("Sign up successful.")
  }

  //Nuevo método para mostrar el mensaje de error de inicio de sesión fallido
  static verifyThatThisUserAlreadyExistMessageDisplayed(){
    CommonPageMethods.verifyAlert("This user already exists.")
  }
}
