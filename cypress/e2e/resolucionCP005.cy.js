import StorePage from '../support/pages/StorePage';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false; // Evita un error en la aplicacion para que no rompa la prueba
});

describe('CP005 - Validar la sección de celulares usados', () => {
  const paginaTienda = new StorePage();

  it('Debe mostrar la sección de celulares usados y listar productos', () => {
    // Paso 1: Visitar la tienda
    paginaTienda.visitar();

    // Paso 2: Verificar que la sección de "Celulares Usados" sea visible
    cy.get('.category-slider > .slick-list > .slick-track > [data-slick-index="1"] > :nth-child(1) > .item')
      .should('be.visible')
      .click();

    // Paso 3: Validar que se haya ingresado a la sección de celulares usados
    cy.url().should('include', 'usados'); 

    // Paso 4: Verificar que se liste al menos un producto
    cy.get('.product-item') 
      .should('have.length.greaterThan', 0);
  });
});
