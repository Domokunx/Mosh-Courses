// Error handling
// 1st : Defensive Handling (Check the values passed as input)
const person = {
    firstName: 'Cliff',
    lastName: 'Koes',
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        // DH
        if (typeof value !=='string') 
            throw new Error('value is not a string.')

        const parts = value.split(' ')
        // DH
        if (parts.length !== 2)
            throw new Error('Enter a first and last name')

        this.firstName = parts[0]
        this.lastName = parts[1]
    }
};

try{
    person.fullName = ''
}
catch(err){
    return console.error(err.message)
}
console.log(person.fullName)

