import { LoginElements } from "./login.elements";

//Se usa el invoke en vez del type para evitar el delay de escritura y que se completen los campos correctamente
export class LoginMethods{
    static insertarUsername(username){
        LoginElements.textboxes.username.invoke('val', username)
    }

    static insertarPassword(password){
        LoginElements.textboxes.password.invoke('val', password)
    }

    static clickLoginButton(){
        LoginElements.buttons.login.click()
    }

    //Metodo para usar login completo
    static loginGlobal(username, password){
        Logger.subStep('Insertar username')
        this.insertarUsername(username)

        Logger.subStep('Insertar password')
        this.insertarPassword(password)

        Logger.subStep('Click en boton Login')
        this.clickLoginButton()
    }
}