# Math

## **Constantes numéricas**
Estas son algunas de las constantes numéricas integradas que existen en el objeto 

- **El número PI:** **`Math.PI`**
  - Ejemplo:
    ```javascript
    console.log(Math.PI); // Imprime 3.141592653589793
    ```

- **La constante de Euler:** **`Math.E`**
  - Ejemplo:
    ```javascript
    console.log(Math.E); // Imprime 2.718281828459045
    ```

- **El logaritmo natural de 2:** **`Math.LN2`**
  - Ejemplo:
    ```javascript
    console.log(Math.LN2); // Imprime 0.6931471805599453
    ```

## **Métodos de redondeo**

- **`Math.ceil()`**: redondea hacia arriba al entero más cercano 
  - Ejemplo:
    ```javascript
    console.log(Math.ceil(4.2)); // Imprime 5
    ```

- **`Math.floor()`**: redondea hacia abajo al entero más cercano 
  - Ejemplo:
    ```javascript
    console.log(Math.floor(4.8)); // Imprime 4
    ```

- **`Math.round()`**: redondea hacia arriba al entero más cercano si el decimal es 0,5 o superior; de lo contrario, redondea hacia abajo al entero más cercano 
  - Ejemplo:
    ```javascript
    console.log(Math.round(4.5)); // Imprime 5
    console.log(Math.round(4.4)); // Imprime 4
    ```

- **`Math.trunc()`**: recorta el decimal y deja solo el entero
  - Ejemplo:
    ```javascript
    console.log(Math.trunc(4.9)); // Imprime 4
    ```

## **Métodos aritméticos y de cálculo**

- **`Math.pow(2,3)`**: calcula el número 2 a la potencia de 3, el resultado es 8 
  - Ejemplo:
    ```javascript
    console.log(Math.pow(2, 3)); // Imprime 8
    ```

- **`Math.sqrt(16)`**: calcula la raíz cuadrada de 16, el resultado es 4 
  - Ejemplo:
    ```javascript
    console.log(Math.sqrt(16)); // Imprime 4
    ```

- **`Math.cbrt(8)`**: encuentra la raíz cúbica de 8, el resultado es 2 
  - Ejemplo:
    ```javascript
    console.log(Math.cbrt(8)); // Imprime 2
    ```

- **`Math.abs(-10)`**: devuelve el valor absoluto, el resultado es 10 
  - Ejemplo:
    ```javascript
    console.log(Math.abs(-10)); // Imprime 10
    ```

## **Métodos logarítmicos**

- **`Math.log()`**, **`Math.log2()`**, **`Math.log10()`**
  - Ejemplo:
    ```javascript
    console.log(Math.log(1)); // Imprime 0
    console.log(Math.log2(8)); // Imprime 3
    console.log(Math.log10(100)); // Imprime 2
    ```

## **Devuelve los valores mínimo y máximo de todas las entradas**

- **`Math.min(9,8,7)`** devuelve 7, **`Math.max(9,8,7)`** devuelve 9.
  - Ejemplo:
    ```javascript
    console.log(Math.min(9, 8, 7)); // Imprime 7
    console.log(Math.max(9, 8, 7)); // Imprime 9
    ```

## **Métodos trigonométricos**

- **`Math.sin()`**, **`Math.cos()`**, **`Math.tan()`**
  - Ejemplo:
    ```javascript
    console.log(Math.sin(Math.PI / 2)); // Imprime 1
    console.log(Math.cos(0)); // Imprime 1
    console.log(Math.tan(Math.PI / 4)); // Imprime 1
    ```

## **Método Random**

- **`Math.random()`**: devuelve un número pseudoaleatorio entre 0 (inclusive) y 1 (exclusivo).
  - Ejemplo:
    ```javascript
    console.log(Math.random()); // Podría imprimir un número como 0.123456789
    ```

## **Método Ceil**

- **`Math.ceil()`**: redondea hacia arriba al entero más cercano.
  - Ejemplo:
    ```javascript
    console.log(Math.ceil(4.2)); // Imprime 5
    ```


    <!-- [![Wallaby.js](https://img.shields.io/badge/wallaby.js-powered-blue.svg?style=for-the-badge&logo=github)](https://wallabyjs.com/oss/)
    [![Wallaby.js](https://img.shields.io/badge/wallaby.js-powered-blue.svg?style=flat&logo=github)](https://wallabyjs.com/oss/)
    ## Wallaby.js

    [![Wallaby.js](https://img.shields.io/badge/wallaby.js-powered-blue.svg?style=for-the-badge&logo=github)](https://wallabyjs.com/oss/)

    This repository contributors are welcome to use
    [Wallaby.js OSS License](https://wallabyjs.com/oss/) to get
    test results immediately as you type, and see the results in
    your editor right next to your code. -->