
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix === undefined || matrix.length === 0) {
    return [];
  }
  var res = [];

  for (let i = 0; i < matrix.length; i++) {
    var mat = [];
    if ((i + 2) % 2 !== 0) {
      mat = matrix[i].reverse();
    } else {
      mat = matrix[i];
    }

    for (let j = 0; j < mat.length; j++) {
      res.push(mat[j]);
    }



  }
  return res;



}
