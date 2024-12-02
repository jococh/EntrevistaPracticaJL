import StorePage from '../support/pages/StorePage';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false; // Evita un error en la aplicacion para que no rompa la prueba
});

//Tercer Caso de Prueba
describe('CP003 - Validar cuotas en compra de equipo - Credicoop Visa', () => {
  const paginaTienda = new StorePage();

  it('Debe visitar la tienda de Movistar', () => {
    
  // Paso 1: Visitar la tienda de Movistar
  cy.log('Visitar la tienda de Movistar');
  paginaTienda.visitar();

  // Paso 2: Seleccionar el tercer producto
  cy.log('Seleccionar el tercer equipo de la lista');
  paginaTienda.seleccionarProductoPorIndice(2); 

  // Paso 4: Validar que NO existe la opción de 60 cuotas para Credicoop con Visa
  cy.log('Validar cantidad de cuotas');
  paginaTienda.validarNoCuotas60();
  });

  after(() => {
    cy.screenshot(`Final del Test CP003`);
  });
});
