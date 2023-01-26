const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

// Connect to database
mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error:', err))

// Create Schema
const courseSchema = mongoose.Schema({
    name: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    author: String,
    price: Number,
    isPublished: Boolean
})

// Model Schema
const Course = mongoose.model('Course', courseSchema)

// Get Document 
async function getCourses(){
    try{
        const courses = await Course
        .find({  isPublished: true, tags: { $in: ['backend', 'frontend'] }}) 
        .sort({ price: -1 }) // Sort by descending price
        .select({ name: 1, author: 1, price: 1 })
        console.log(courses)
    }
    catch(err){
        console.error(err)
    }
}
getCourses();