export class CommonPageData {
  //Se agarra el link de la página
  static get url() {
    return "https://demoblaze.com/cart.html";
  }

  static get testSuites(){
    return{
      registroYAutenticacion: 'Registro y Autenticación',
      catalogoYCompras: 'Catalogo y Compras',
      
    }
  }
}
