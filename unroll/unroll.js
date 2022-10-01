function unroll(squareArray) {
    // Grab the first row
    const firstRow = squareArray.shift()
    // Grab the first Column
    const firstCol = squareArray.map(squareEle => squareEle.pop())
    
    // Grab the bottom row
    const bottomRow =  squareArray.pop().reverse()
    
    // Grab the left Columu
    const leftCol = squareArray.map(squareEle => squareEle.shift()).reverse()

    // Concatenate firstRow, firstCol , bottomRow, leftCol to single Array.
     const newArr = [].concat(firstRow,firstCol,bottomRow,leftCol)

     return newArr

}

module.exports = unroll;
