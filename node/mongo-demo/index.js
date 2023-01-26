const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

mongoose.connect('mongodb://localhost/playground') // Connect to MongoDB, in real apps, the connection server will be from config
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err.message))


// Creating a Schema, defines the shape of docs in collections in MongoDB
// Add validators so that database is not filled with nonsense
// String validators: enum, match, minLength, maxLength
// Number validators: min, max  
// Custom validators: set object {type: , 
//                                validate: {
//                                           validator: function(v) { return v.length > 0}, message: }}
// Async validators: make the function async lol or return a promise
const courseSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true , // required validator
        minlength: [3, 'Min course name is 3 letters'],
        maxlength: 255,
        match: /.*course.*/i // title must contain this regular expression
    },
    author: String,
    category: {
        type: String,
        enum: ['frontend', 'backend', 'web'],
        lowercase: true
    },
    tags: {
        type: Array,
        validate: { // Array cannot use required validator as empty strings are considered valid
            validator: async function (v){
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(v && v.length > 0)
                    }, 2000)
                })
            },
            message: 'Course must have 1 tag'
        },
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: { 
        type: Number, 
        required: function() { 
            return this.isPublished; // validator can be function 
        } 
    }
});

// Compile Schema into a model
const Course = mongoose.model('Course', courseSchema) // 1st arg is the singular name of collection, 2nd arg is schema


// Create Object with the model class
const course = new Course({
    name: 'Cliff\'s course',
    author: 'Mosh',
    tags: [''], // NoSQL DB documents can be a complex object
    isPublished: false, // date is not defined as model sets it by default
    category: 'WEB'
});

// Save it to the database (async)
async function createCourse(){
    try{
        const result = await course.save();
        console.log(result)
    }
    catch(ex){
        console.log(ex.message)
    }
}

// Update Course (Query First)
// Good for when you receive input and need to check if the update is VALID
async function updateCourseQueryFirst(id){
    // findById()
    const course = await Course.findById(id);
    if (!course) return;
    // Modify its properties
    course.set({
        isPublished: true,
        author: 'Another Author'
    })
    // save()
    const result = await course.save()
    console.log(result)
}

// Update Course (Update First)
// good for updating directly in the database or when u need to update multiple documents
async function updateCourseUpdateFirst(id){
    // Filter Docs and modify
    const result = await Course.findByIdAndUpdate(id, {
        $set: {
            price: 50,
        }
    }, { new: true })
    console.log(result)
}

// Delete documents
async function removeCourse(id){
    // Find Course
    const result = await Course.deleteOne({ _id: id}); // Finds the first one the satisfies arg
    console.log(result)
}

// Query documents in Database (async)
async function getCourses(){
    // Comparison Operators
    // eq (equal)
    // ne (not equal)
    // gt (greater than)
    // gte (greater than or equal to)
    // lt (less than)
    // lte (less than or equal to)
    // in (included in the array/list)
    // nin (not in)

    // Logical Operators
    // or
    // and

    // Regular Expressions (can research more on js regular expressions)
    // /^String/ starts with String
    // /String$/ ends with String
    // /pattern/i makes the search case insensitive
    // /.*String.*/ contains String (regardless of what is before or after)

    // Counting Documents
    // .count() cannot be used concurrently with .select

    // Pagination
    // .skip(pageNumber - 1) * pageSize
    // .limit(pageSize)

    const pageNumber = 1; // you do not hardcode the constants in real apps
    const pageSize = 10; // you get them from Query Strings like below
    // /api/courses?pageNumber=2&pageSize=10

    try{
        const courses = await Course
        // Apply filters
        .find({_id:"63c0024e30978c366603b93f"})
        .or ([ { author: 'Mosh' }, { isPublished: true } ]) // Include inside an Arr
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
        .sort({ name: 1 }) // Sort ascending
        .select({ name: 1, tags: 1, price: 1 }) // Show these properties
        console.log(courses[0].price)
    }
    catch(err){
        console.log(err)
    }
}
getCourses()
