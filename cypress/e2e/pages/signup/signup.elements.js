export class SignupElements {
  static get textBoxes() {
    return {
      get username() {
        cy.get("input#sign-username");
      },
      get password() {
        cy.get("input#sign-password");
      },
    };
  }

  static get buttons() {
    return {
      get close() {
        cy.contains("button", "Close").eq(1);
      },
      get open() {
        cy.contains("button", "Sign up");
      },
    };
  }
}
