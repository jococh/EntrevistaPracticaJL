import StorePage from '../support/pages/StorePage';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false; // Evita un error en la aplicacion para que no rompa la prueba
});

describe('CP004 - Validar la funcionalidad de añadir un producto al carrito', () => {
  const paginaTienda = new StorePage();
  const producto = 'Galaxy Z Flip 5'; // Nombre del producto a buscar

  it('Debe añadir un producto al carrito', () => {
    cy.log('Buscar e ingresar al producto Galaxy Z Flip 5');
    // Paso 1: Visitar la tienda de Movistar
    paginaTienda.visitar();

    // Paso 2: Buscar el equipo Galaxy Z Flip 5
    paginaTienda.buscarProducto(producto);

    // Paso 3: Seleccionar el primer producto en los resultados
    paginaTienda.seleccionarProductoPorIndice(0);

    cy.log('Añadirlo al carrito');
    // Paso 4: Añadir el producto al carrito
    cy.get('#swatch_attribute_card').click(); 

    cy.log('Verificar que el producto esté en la lista del carrito');
    // Paso 5: Verificar que el carrito contiene el producto
    cy.url('https://tiendaonline.movistar.com.ar/checkout/cart/').should('include', 'cart'); // Verifica que la URL contenga 'cart' 
    cy.get('#shopping-cart-table > .cart').should('contain', producto); 
  });

  after(() => {
    cy.screenshot(`Final del Test - CP004`);
  });
});
    
    
    
