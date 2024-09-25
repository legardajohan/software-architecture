# Arquitectura Cliente-Servidor

## Funcionamiento del servidor

1. Instala el módulo `ws` ejecutando en consola `npm install ws`.
2. Se utiliza el módulo ws para crear un servidor **WebSocket**.
3. El servidor escucha las conexiones **WebSocket** y maneja los mensajes entrantes.
4. Se envía una respuesta de vuelta al cliente web cuando se recibe un mensaje.

## Funcionamiento del cliente

Para el cliente se ha creado un archivo `index.html` y `client.js` quienes se conectarán al servidor a través de **WebSockets** que es una tecnología basada en **TCP** adecuada para entornos web. 

1. El cliente establece una conexión WebSocket con el servidor.
2. Cuando se hace clic en el botón "Enviar Mensaje al Servidor", se envía un mensaje al servidor.
3. El cliente espera una respuesta y la muestra en la página HTML.
4. También se manejan los eventos de apertura y cierre de la conexión.

## Ejecución del ejemplo

1. Asegúrate de que el servidor de Node.js esté en funcionamiento ejecutando el siguiente comando: `node server.js`.
2. Abre el archivo `index.html` en un navegador.
3. Haz clic en el botón *"Enviar Mensaje al Servidor"*, y deberías ver el mensaje enviado al servidor en la consola, y la respuesta del servidor aparecerá en la página web.

## ¿Cómo ayuda esta arquitectura?

Este ejemplo ilustra cómo un cliente web puede comunicarse con un servidor a través de WebSockets, manteniendo una conexión persistente que permite enviar y recibir datos de manera eficiente en tiempo real.

## Ventajas de la arquitectura Cliente-Servidor aplicada:

1. **Descentralización del cliente:** El cliente no necesita conocer la lógica del servidor, solo se comunica con él mediante solicitudes.
2. **Escalabilidad:** Se pueden tener múltiples clientes conectados al mismo servidor.
3. **Tiempo real:** Con WebSockets, el cliente y el servidor pueden intercambiar datos en tiempo real sin la necesidad de realizar múltiples solicitudes HTTP.

Este es un excelente enfoque cuando necesitas comunicación en tiempo real entre un servidor y un cliente web, como en chats en línea o aplicaciones de juegos multijugador.

## Referencias bibliográficas

+ Arciniegas Herrera, J. L., Collazos Ordóñez, C. A., Fernández de Valdenebro, M. V., Hormiga Juspian, M. A., Tulande Arroyo, A. (2010). Patrones arquitectónicos sobre usabilidad en el dominio de las aplicaciones web. Ingeniería e Investigación, 30 (1), 52-55. https://revistas.unal.edu.co/index.php/ingeinv/article/view/15207/16001

+ Marshal, J. (2012). HTTP Made Really Easy: A Practical Guide to Writing Clients and Servers. https://www.jmarshall.com/easy/http/

+ Pantaleo, G. y Rinaudo, l. (2015). Ingeniería de Software. Buenos Aires: Alfaomega. https://www-alfaomegacloud-com.ibero.basesdedatosezproxy.com/auth/ip?intended_url=https://www-alfaomegacloud-com.ibero.basesdedatosezproxy.com/library/publication/ingenieria-de-software

+ Pressman, R. (2010). Ingeniería de software: un enfoque práctico. México: MacGraw-Hill. https://www-ebooks7-24-com.ibero.basesdedatosezproxy.com/?il=16414

+ Marshal, J. (2012). HTTP Made Really Easy: A Practical Guide to Writing Clients and Servers. https://www.jmarshall.com/easy/http/

