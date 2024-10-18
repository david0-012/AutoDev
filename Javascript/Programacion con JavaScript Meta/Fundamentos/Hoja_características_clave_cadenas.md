# Cadenas

## **Propiedades y métodos de cadenas**
Estas son algunas de las propiedades y métodos integrados que existen en el objeto `String`

- **La longitud de la cadena:** **`.length`**
  - Ejemplo:
    ```javascript
    var greet = "Hello, ";
    console.log(greet.length); // Imprime 7
    ```

- **Carácter en una posición específica:** **`.charAt()`**
  - Ejemplo:
    ```javascript
    var greet = "Hello, ";
    console.log(greet.charAt(1)); // Imprime 'e'
    ```

- **Concatenar cadenas:** **`concat()`**
  - Ejemplo:
    ```javascript
    var greet = "Hello, ";
    var place = "World";
    console.log(greet.concat(place)); // Imprime 'Hello, World'
    ```

- **Índice de la primera aparición de un carácter:** **`indexOf()`**
  - Ejemplo:
    ```javascript
    var greet = "Hello, ";
    console.log(greet.indexOf('l')); // Imprime 2
    ```

- **Índice de la última aparición de un carácter:** **`lastIndexOf()`**
  - Ejemplo:
    ```javascript
    var greet = "Hello, ";
    console.log(greet.lastIndexOf('l')); // Imprime 3
    ```

- **Dividir una cadena en un array:** **`split()`**
  - Ejemplo:
    ```javascript
    var greet = "Hello, World";
    console.log(greet.split(' ')); // Imprime ['Hello,', 'World']
    ```

- **Convertir a minúsculas:** **`toLowerCase()`**
  - Ejemplo:
    ```javascript
    var greet = "Hello, World";
    console.log(greet.toLowerCase()); // Imprime 'hello, world'
    ```

- **Convertir a mayúsculas:** **`toUpperCase()`**
  - Ejemplo:
    ```javascript
    var greet = "Hello, World";
    console.log(greet.toUpperCase()); // Imprime 'HELLO, WORLD'
    ```