const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

// Connect to database
mongoose.connect('mongodb://localhost/mongo-exercises')
    .then('Connected to MongoDB')
    .catch('Failed to connect to MongoDB')

// Create Schema
const courseSchema = new mongoose.Schema({
    name: String,
    isPublished: Boolean,
    date: { type: Date, default: Date.now},
    author: String,
    price: Number,
    tags: [ String ]
})

// Model Schema
const Course = mongoose.model('Course', courseSchema)

// Get all published backend courses
async function getCourses(){
    try{
        const courses = await Course
        // Apply filters
        .find({
            isPublished: true,
            tags: 'backend'
        })
        .sort({ name: 1 }) // sort them by name
        .select({ name: 1, author: 1 }) // pick only their name and author
        console.log(courses)
    }
    catch(err){
        console.error(err)
    }
}
getCourses();