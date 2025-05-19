import { ThankYouForYourPurchaseElements } from "./thank-you-for-your-purchase.elements";

export class ThankYouForYourPurchaseMethods {
  static clickOkButton() {
    ThankYouForYourPurchaseElements.buttons.okButton.click();
  }

  //Metodo de verificacion de icono verde
  static verifyGreenCheckMarkIsDisplayed() {
    ThankYouForYourPurchaseElements.icons.greenCheckMark.should("exist");
  }
}
