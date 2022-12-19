/**Iteration #8: Contador de repeticiones**

Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  
Puedes usar este array para probar tu función:*/

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];


  function repeatCounter(arrayCounterDuplicates) {

    const result = {};

    for (let i = 0; i < arrayCounterDuplicates.length; i++) {
      
        if (arrayCounterDuplicates [i] in result){
          result[arrayCounterDuplicates[i]]++

        } else {
          result[arrayCounterDuplicates[i]] = 1;
        }  
      }
      return result;
  }

 console.log(repeatCounter(counterWords));


