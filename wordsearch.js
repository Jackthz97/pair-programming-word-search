const transpose = function(matrix) {

  let arr = [];
  const matrixList = [];
  
  for (let i = 0; i < matrix[0].length; i++) {
    for (let list of matrix) {
      arr.push(list[i]);
    }
    matrixList.push(arr);
    arr = [];
  }
  return matrixList.map(ls => ls.join(''));
};

// const diagnonal = function(matrix) {
//     let arr = [];
    
//   for (let i = 0; i < matrix[0].length; i++) {
//     for (let list of matrix) {

//     }
//   }
// };

const reversed = (letter) => {
  const arr = [];
  for (let string of letter) {
    arr.push(string.split("").reverse().join(""));
  }
  return arr;
};

// const diagonal = function() {
//     for (let i = 0; i < ) {
//         for () {

//         }
//     }
// };

// ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
// ['S', 'E', 'I', 'N', 'D', 'E', 'L', 'D'],
// ['Y', 'F', 'C', 'F', 'Q', 'S', 'A', 'L'],
// ['H', 'M', 'J', 'T', 'E', 'A', 'R', 'G'],
// ['W', 'H', 'A', 'S', 'Y', 'S', 'R', 'L'],
// ['B', 'F', 'C', 'E', 'N', 'U', 'Y', 'B'],
// ['U', 'B', 'K', 'W', 'A', 'P', 'A', 'I'],
// ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
// ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],

const wordSearch = (letters, word) => {

  let verticalJoin = transpose(letters);

  const horizontalJoin = letters.map(ls => ls.join(''));
  // console.log(horizontalJoin);
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  const horizontalReverse = reversed(horizontalJoin);
  for (let l of horizontalReverse) {
    if (l.includes(word)) {
      return true;
    }
  }

  for (let i of verticalJoin) {
    if (i.includes(word)) {
      return true;
    }
  }

  const verticalReverse = reversed(verticalJoin);
  for (let i of verticalReverse) {
    if (i.includes(word)) {
      return true;
    }
  }
  return false;
};


module.exports = wordSearch;