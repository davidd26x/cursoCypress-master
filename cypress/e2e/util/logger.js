export class Logger{
    //Método para el número de Paso
    static stepNumber(number){
        const texto = `Step # ${number}`;
        cy.log(texto)
        cy.allure().step(texto)
    } 

    //Método para el número de Paso
    static step(description){
        const texto = `Step: ${description}`;
        cy.log(texto)
        cy.allure().step(texto)
    }

    //Metodo verificacion
    static verification(description){
        const texto = `Verification: ${description}`;
        cy.log(texto)
        cy.allure().step(texto)
    }

    //Metodo para el subpaso 
    static subStep(description){
        const texto = `Substep: ${description}`;
        cy.log(texto)
        cy.allure().step(texto)
    }

    //Metodo para la subverificacion
    static subVerification(description){
        const texto = `SubVerification: ${description}`;
        cy.log(texto)
        cy.allure().step(texto)
    }
<<<<<<< HEAD

    //Nuevo método para logout
    static postCondition(description){
        const texto = `PostCondition: ${description}`;
        cy.log(texto)
        cy.allure().step(texto)
    }
=======
>>>>>>> 7992e27311f3fc70195a54f919bc6b501ba434a5
}