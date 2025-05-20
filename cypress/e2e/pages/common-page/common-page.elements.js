export class CommonPageElements{
    //Menú de arriba
    static get topMenu(){
        return {
            get home(){
                return cy.contains('a', 'Home')
            },
            get contact(){
                return cy.contains('a', 'Contact')
            },
            get aboutUs(){
                return cy.contains('a', 'About us')
            },
            get cart(){
                return cy.contains('a', 'Cart')
            },
            get logIn(){
                return cy.contains('a', 'Log in')
            },
            get signUp(){
                return cy.contains('a', 'Sign up')
<<<<<<< HEAD
            },
            get logOut(){
                return cy.get('#logout2')
=======
>>>>>>> 7992e27311f3fc70195a54f919bc6b501ba434a5
            }
        }
    }

    static get signedUser(){
        return cy.get('a#nameofuser')
    }
}