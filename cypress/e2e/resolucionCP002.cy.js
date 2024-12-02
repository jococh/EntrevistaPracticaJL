import StorePage from '../support/pages/StorePage';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false; // Evita un error en la aplicacion para que no rompa la prueba
});

//Segundo Caso de Prueba
describe('CP002 - Aplicar filtro de equipos - Memoria Interna 128GB - Precio Entre 200K y 300K', () => {
  const paginaTienda = new StorePage();

  it('Debe visitar la tienda de Movistar, aplicar filtros y validar cantidad de equipos', () => {
    cy.log('Visitar la tienda de Movistar');
    // Paso 1: Visitar la tienda de Movistar
    paginaTienda.visitar();  
  
    cy.log('Aplicar los filtros');
    // Paso 2: Aplicar los filtros
    paginaTienda.aplicarFiltros();

    cy.log('Validar la cantidad de equipos devueltos');
    // Paso 3: Validar la cantidad de equipos devueltos
    paginaTienda.validarCantidadEquipos();
    });

    after(() => {
      cy.screenshot(`Final del Test CP002`);
    });

  });  
      