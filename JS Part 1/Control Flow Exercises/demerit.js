// function that returns:
// 'Ok' if parameter is 74 or below
// every 5 above 70 results in 1 demerit point
// 'License suspended' if 12 demerit points

function checkSpeed(speed){
    if (speed < 75) return 'Ok'

    const points = Math.floor((speed - 70) / 5)
    if (points >= 12) return 'License Suspended'
    else return points
}

console.log(checkSpeed(130))