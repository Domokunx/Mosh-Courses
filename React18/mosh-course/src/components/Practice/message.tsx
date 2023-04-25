import { useState } from "react"
import { produce } from 'immer'

function Message() {
    // Can use objects too (avoid nested objects), treat these as immutable
    const [fullName, setFullName] = useState({
        firstName: "Cliff",
        surName: "Koes",
        favouriteNumber: 1
    })

    // Updating Objects (set a new object)
    const handleClick = () => {
        const newPerson = {
            firstName: "Cliff",
            surName: "Koes",
            favouriteNumber: fullName.favouriteNumber + 1,
        }
        setFullName(newPerson);
        // Can also use spread operator
        setFullName({...fullName, favouriteNumber: fullName.favouriteNumber + 1})
    }

    // Updating Arrays (treat as immutable, create a new array to set)
    const [tags, setTags] = useState(['happy', 'cheerful']);

    const handleTag = () => {
        // Add
        setTags([...tags, 'exciting']);

        // Remove
        setTags(tags.filter(tag => tag !== 'exciting'));

        // Update
        setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag));
    }

    // Updating Array of Objects
    const [bugs, setBugs] = useState([
        { id: 1, title: 'Bug 1', fixed: false },
        { id: 2, title: 'Bug 2', fixed: false },
    ]);

    const handleBugs = () => {
        // New Array, with New B1 and Old B2 (react now knows only to update B1)
        setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true} : bug)) 
        
        // Using Immer (npm i immer)
        // Draft is the array of objs (bugs)
        // But you can treat it like a mutable array
        setBugs(produce(draft => {
            const bug = draft.find(bug => bug.id === 1);
            if (bug) bug.fixed = true;
        }))
    }
    
        // It will be difficult to update nested hooks (since references and stuff are involved)
    return <h1>Hello {fullName.firstName + fullName.surName} {fullName.favouriteNumber}!
            <button onClick={handleClick}> Increment</button>
            </h1>
}

export default Message