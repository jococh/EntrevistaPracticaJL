import StorePage from '../support/pages/StorePage';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false; // Evita un error en la aplicacion para que no rompa la prueba
});

//Primer Caso de Prueba
describe('CP001 - Validar cuotas en compra de equipo - A14', () => {
  const paginaTienda = new StorePage();
  const producto = 'A14'; // Nombre del producto a buscar
  
  it('Debe buscar el equipo A14 e ingresar al producto', () => {
    cy.log('Buscar e ingresar al producto A14');
    //1: Visitar la tienda de Movistar
    paginaTienda.visitar();

    //2: Buscar el equipo A14
    paginaTienda.buscarProducto(producto);

    //3: Seleccionar el primer producto en los resultados
    paginaTienda.seleccionarProductoPorIndice(0);
  
    cy.log('Validar las cuotas');
    //4: Validar las cuotas
    paginaTienda.validarCuotas();
  });

  after(() => {
    cy.screenshot(`Final del Test CP001`);
  });
})
    
