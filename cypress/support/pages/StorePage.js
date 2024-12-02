class StorePage {
    visitar() {
        cy.visit('https://tiendaonline.movistar.com.ar');
        cy.url().should('include', 'movistar.com.ar'); // Validar que la URL sea correcta
    }
    
    buscarProducto(nombreProducto) {
        cy.get('#search_action').type(`${nombreProducto}{enter}`); // Usar el buscador para buscar el producto
    }
    
    seleccionarProductoPorIndice(indice) {
        cy.get('.product-item').eq(indice).click(); // Seleccionar producto por indice
    }
    
    validarCuotas() {
        cy.get('body')
          .contains('Hasta')
          .invoke('text')
          .then((texto) => expect(parseInt(texto.match(/\d+/)[0])).to.be.gte(3)); // Validar que las cuotas sin interes sean al menos 3
    }

    aplicarFiltros() {
        cy.get('.block-subtitle').click(); 
        cy.get('.memory > .filter-title').click();
        cy.get('[data-value="802"] > a').click(); // Filtrar por Memoria Interna 128GB
        cy.get('.block-subtitle').click(); 
        cy.get('.price > .filter-title').click();
        cy.get('[data-value="0_300000"] > a').click(); // Filtrar por rango de precio
    }
        

    validarCantidadEquipos() {
        cy.get('.total-products > p').should('have.length.greaterThan', 0); //Valida que la cantidad total de equipos sea mayor a 0
    }

    validarNoCuotas60() {
        cy.get('#open-installments-modal').click()
          .get('#bankSelector').click()
          .get('#ui-id-21').click() // Selecciona banco Credicoop
          .get('#cardSelector').click()
          .get('[data-card="Visa"]').click() // Selecciona tarjeta Visa
          .get('#calculate_btn > .btn-primary').click()
          .get('#installments-modal > .content').invoke('text').should('not.include', '60 cuotas'); // Valida que no incluya 60
    }
    
        
}

export default StorePage;
