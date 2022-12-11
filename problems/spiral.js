const spiralFn = (row, col, size, counter, direction, result) => {
    if(counter < 1) return result;
    result[row][col] = counter;
    
    let isNotVisted = undefined;
    switch (direction) {
        case 'up':
            isNotVisted = row > 0 && result[row-1][col] == 0;
            if(isNotVisted) {
                row--;
            } else {
                direction = 'left';
                col--;
            }

            break;
    
        case 'left': 
            isNotVisted = col > 0 && result[row][col-1] == 0;
            if(isNotVisted) {
                col--;
            } else {
                direction = 'down';
                row++;
            }
            
            break;
            
        case 'down': 
            isNotVisted = row < n-1 && result[row+1][col] == 0;
            if(isNotVisted) {
                row++;
            } else {
                direction = 'right';
                col++;
            }
            
            break;
            
        case 'right': 
            isNotVisted = col < n-1 && result[row][col+1] == 0;
            if(isNotVisted) {
                col++;
            } else {
                direction = 'up';
                row--;
            }
            
            break;
    }
    
    counter--;
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
