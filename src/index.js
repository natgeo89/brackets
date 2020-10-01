module.exports = function check(str, bracketsConfig) {
  const arrFromString = str.split('');

  if (arrFromString.length % 2 !== 0) return false;
    
  for (let bracket of arrFromString){
    if (!bracketsConfig.flat().includes(bracket)) return false;
  }
  
  const resultArr = [];
  
  arrFromString.forEach(item => {
    resultArr.push(item);
    if (resultArr[resultArr.length-2] === openBracket(item) && resultArr.length-2 >= 0){
      resultArr.pop();
      resultArr.pop();
    }   
  });
  
  return (resultArr.length === 0)? true: false;  
}

function openBracket(char){

  switch (char){
    case (')'): return '(';
    case (']'): return '[';
    case ('}'): return '{';
    case ('|'): return '|';
    case ('2'): return '1';
    case ('4'): return '3';
    case ('6'): return '5';
    case ('7'): return '7';
    case ('8'): return '8';
  }
}
