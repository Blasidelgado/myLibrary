//Square function
function squared(num) {
    return num * num;
  }
//Cube function  
  function cubed(num) {
    return num * num * num;
  }
 // Factorial function 
  function factorial(num) {
    if (num < 0) return undefined;
    if (num == 0) return 1;
    let x = num - 1;
    while (x > 1) {
      num *= x;
      x--;
    }
    return num;
  }
// Square root function
function squaredRoot(num) {
    if (num < 0) {return undefined};
    return `${Math.sqrt(num)} and ${-Math.sqrt(num)}`;
    }
//Cube root funcion    
function cubedRoot(num) {
    if (num < 0) { 
        return `${-(Math.pow((-num) , 1/3))}`
    };
    return Math.pow(num , 1/3);
}
//Circunference
function circunference(num) {
    if (num < 0) {
    return undefined;
    }
    return 2 * num * Math.PI;
}
  //Age checker 
  let age = prompt('How old are you?', 18);

  function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('Do you have permission from your parents?');
    }
  }
  function siteAcceser(age) {
    if (checkAge(age)) {
      alert( 'Access granted' );
    } else {
      alert( 'Access denied' );
    }
  }