// function that calculate the avg mark and returns the grade of the student
const marks = [80, 80, 50]

// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(marks))

function calculateGrade(marks){
    let totalMarks = 0;
    for (let mark in marks){
        totalMarks += mark;
    }
    let avgMarks = 90
    
    const grades = 'FDCBA'
    const index = (avgMarks < 60 ? 0 : Math.floor((avgMarks - 60) / 10) + 1)
    return grades[index];
}
