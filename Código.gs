//Aplicación para probar la extensión de GAS con GitHub
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  //Or DocumentAppA or FormApp. -> Creamos el menu con submenu
  ui.createMenu('Actualizar datos').addItem('Actualizar datos ahora', 'menuItmen1').addToUi();
  
}

function menuItem1(){
  Browser.msgBox('Hola mundo');
}
