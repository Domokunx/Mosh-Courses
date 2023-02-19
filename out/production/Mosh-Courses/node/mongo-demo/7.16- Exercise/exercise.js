const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

// Connect to DB
mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err))

// Make Schema
const courseSchema = mongoose.Schema({
    name: String,
    tags: [ String ],
    author: String,
    date: { type: Date, default: Date.now },
    price: Number,
    isPublished: Boolean
})

// Model Schema
const Course = mongoose.model('Course', courseSchema)

// Get Document
async function getCourses(){
    try{
        const courses = await Course
        .find({ isPublished: true }) // Published courses
        .or ([{ price: { $gte: 15 } }, { name: /.*by./i }]) // Either $15 or more, OR has the word 'by' in the title
        console.log(courses)
    }
    catch(err){
        console.error(err)
    }
}
getCourses();
