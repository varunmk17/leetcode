const spiralFn = (row, col, size, counter, direction, result) => {
    if(counter < 1) return result;
    
    result[row][col] = counter;
    
    switch (direction) {
        case 'up':
            if(row > 0 && result[row-1][col] == 0) {
                row--;
            } else {
                direction = 'left';
                col--;
            }

            counter--;
            break;
    
        case 'left': 
            if(col > 0 && result[row][col-1] == 0) {
                col--;
            } else {
                direction = 'down';
                row++;
            }
            
            counter--;
            break;
            
        case 'down': 
            if(row < n-1 && result[row+1][col] == 0) {
                row++;
            } else {
                direction = 'right';
                col++;
            }
            
            counter--;
            break;
            
        case 'right': 
             if(col < n-1 && result[row][col+1] == 0) {
                col++;
            } else {
                direction = 'up';
                row--;
            }
            
            counter--;
            break;
    }
    
    spiralFn(row, col, size, counter, direction, result)
}

const spiral = (n) => {
    let res = Array(n).fill().map(x => Array(n).fill(0));
    let row = n-1, col = n-1;
    let counter = n*n;
    
    spiralFn(row, col, n, counter, "up", res);
    
    return res;
}

const n = 5;
const res = spiral(n);
console.log(res)

/*
 7x7:
 .  .  .  .  .  .  .
 .  .  .  .  .  .  .
 .  .  5  6  7  .  .
 .  .  4  1  8  .  .
 .  .  3  2  9  .  .
 .  .  . <- 10  .  .
 .  .  .  .  .  .  49
*/