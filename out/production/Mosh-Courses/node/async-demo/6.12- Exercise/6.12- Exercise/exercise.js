async function notifyCustomer(){
  try{
    const customer = await getCustomer(1);
    console.log('Customer:', customer)
    if (customer.isGold){
      const movies = await getTopMovies();
      console.log('Top Movies:', movies);
      const email = await sendEmail(customer.email, movies);
      console.log('Email sent...')
    }
  }
  catch(err){
    console.log('Error:', err.message)
  }
}
notifyCustomer();

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ 
        id: id, 
        name: 'Mosh Hamedani', 
        isGold: true, 
        email: 'email' 
      });

      reject(new Error('Unable to retrieve user.'))
    }, 4000);  
  })
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['movie1', 'movie2']);

      reject(new Error('Unable to get top movies.'))
    }, 4000);
  })
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();

      reject(new Error('Unable to send email.'))
    }, 4000);
  })
}