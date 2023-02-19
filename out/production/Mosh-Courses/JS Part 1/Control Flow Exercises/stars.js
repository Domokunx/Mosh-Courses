// function that takes number as parameter and displays rows of stars corresponding to parameter

function showStars(rows){
    for (let i = 1; i <= rows; i++) {
        let starArr = [];
        for (let j = 0; j < i; j++) {
            starArr.push('*');
        }
        console.log(starArr.join(''))
    }
    return
}
showStars(5)