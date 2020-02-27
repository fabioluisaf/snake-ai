function matMult(m1, m2) {
  if (m1[0].length !== m2.length) {
    return;
  }

  let result = [];

  for (let i = 0; i < m1.length; i++) {
    result[i] = [];
  }

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < m2[i].length; j++) {
      result[i][j] = 0;

      for (let k = 0; k < m1[0].length; k++) {
        result[i][j] += m1[i][k] * m2[k][j];
      }
    }
  }

  return result;
}

// /*
//  * Examples
//  */

// let m1 = [[2, 4, 6], [8, 10, 12]];
// let m2 = [[1, 2], [3, 4], [5, 6]];

// matMult(m1, m2);
