# Proyecto de Prueba - Entrevista Getronics

Este proyecto fue desarrollado como parte de una entrevista práctica para la empresa Getronics. Se implementaron varios casos de prueba para evaluar la herramienta de automatización utilizada.

## Descripción

El objetivo de este proyecto es realizar pruebas en la tienda online de Movistar. Se realizaron los siguientes casos de prueba:

1. **CP001 - Validar cuotas en compra de equipo - A14**  
    Descripción: El objetivo del caso de prueba es visitar la tienda de Movistar 
    (https://tiendaonline.movistar.com.ar), luego realizar la búsqueda del equipo A14 e ingresar al
    mismo y verificar que se pueda pagar en 3 cuotas sin interes
    Resultado esperado:
    - Que se pueda ingresar a la página indicada
    - Que el equipo seleccionado sea el A14
    - Que se indique en el equipo que puede ser pagado en 3 cuotas sin interes

2. **CP002 - Aplicar filtro de equipos - Memoria Interna 128GB - Precio Entre 200K y 300K**  
    Descripción: El objetivo del caso de prueba es visitar la tienda de Movistar
    (https://tiendaonline.movistar.com.ar), luego utilizando los filtros de la página, filtrar por
    Memoria Interna 128GB y precio entre “$200.000 - $300.000” e indicar cuantos equipos
    devuelve la búsqueda
    Resultado esperado:
    - Que se pueda ingresar a la página indicada
    - Que se pueda aplicar los filtros
    - Que se obtengan equipos luego del filtrado validando la cantidad mostrada

3. **CP003 - Validar cuotas en compra de equipo - 60 Cuotas - Credicoop - Tarjeta Visa**  
    Descripción: El objetivo del caso de prueba es visitar la tienda de Movistar
    (https://tiendaonline.movistar.com.ar), luego ingresar al tercer equipo de la lista inicial que se
    obtenga y verificar que NO exista el método de pago de 60 cuotas para el banco Credicoop con
    Tarjeta VISA.
    Resultado esperado:
    - Que se pueda ingresar a la página indicada
    - Que el equipo seleccionado sea el tercero de la lista
    - Que no exista un medio de pago con 60 cuotas para el banco Credicoop con tarjeta VISA

4. **CP004 - Validar que un producto se añade al carrito**  
   Descripción: El objetivo del caso de prueba es visitar la tienda de Movistar 
   (https://tiendaonline.movistar.com.ar), buscar un producto específico, añadirlo al carrito y 
   verificar que el producto esté en el carrito.  
   Resultado esperado:
   - Que se pueda ingresar a la página indicada.
   - Que se pueda buscar y seleccionar un producto.
   - Que el producto seleccionado se añada correctamente al carrito.
   - Que se pueda verificar que el producto está presente en el carrito.

5. **CP005 - Validar que la sección de celulares usados esté visible y funcional**  
   Descripción: Verificar que la sección de celulares usados esté disponible en la tienda, se pueda ingresar correctamente y que al menos un producto usado esté listado en la página.  
   Resultado esperado:
   - Que la opción para acceder a "Celulares Usados" sea visible.
   - Que se pueda ingresar a la sección de celulares usados.
   - Que al menos un producto usado sea listado.



## Tecnologías Utilizadas

- **Cypress**: Herramienta para la automatización de pruebas.
- **JavaScript**: Lenguaje de programación utilizado para escribir las pruebas.

## Requisitos

- Node.js y npm deben estar instalados en la máquina.
- Cypress debe ser instalado en el proyecto.

