// Learn more about mongoose generated ObjectIDs

const { default: mongoose } = require("mongoose");

// First 4 bytes: Time stamp
const id = new mongoose.Types.ObjectId();
console.log(id.getTimestamp())

// Next 3 Bytes: Machine Identifider


// Next 2 Bytes: Process Identifier


// Next 2 Bytes: Random Counter

// Authentification (useful)
console.log(mongoose.Types.ObjectId.isValid(id))