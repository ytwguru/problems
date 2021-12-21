const spiral = (n) => {
  const matrix = Array.from(new Array(n), () => new Array(n)); //predefine array length [n][n]
  const limit = n * n;
  let iterator = 0;
  let x = 0;
  let y = 0;
  let i = 0;
  const yIncr = [1, 0, -1, 0];
  const xIncr = [0, 1, 0, -1];

  while( iterator++ < limit){
    matrix[x][y] = iterator;
    x += xIncr[i];
    y += yIncr[i];
    if(changeIncrement(x,y,n,matrix)){
      x -= xIncr[i];
      y -= yIncr[i];
      i = (i+1)%4;
      x += xIncr[i];
      y += yIncr[i];
    }

  }

  return matrix;

};

const changeIncrement = (x, y, n, matrix) => (matrix[x] && matrix[x][y]) || x >= n || y >= n || x < 0 || y < 0;


console.dir(spiral(5), {depth: 15});