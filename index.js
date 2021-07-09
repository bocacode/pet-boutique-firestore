// Connect to Firestore
const admin = require("firebase-admin")
const creds = require("./credentials.json")

admin.initializeApp({
  credential: admin.credential.cert(creds)
})

// now here we are connected to ALL of the services in our firebase project
const db = admin.firestore()

// Create a customer
const newCustomer = {
  firstName: 'Noah',
  lastName: 'Albert',
  tel: '561-413-7707',
  email: 'no.albert113@gmail.com',
  dob: '2003-11-03',
  pets: [{
    name: 'Ryder',
    type: 'dog',
    size: 'Medium',
    age: 2
  }, {
    name: 'Dragon',
    type: 'salamander',
    size: 'Small',
    age: 5
  }]
}
db.collection('customers').add(newCustomer)
  .then(doc => console.log('Created customer', doc.id))
  .catch(err => console.error('Error Adding Customer: ', err))

// Get all customers
db.collection('customers').get()
  .then(customerCollection => {
    // console.log results
    const allCustomers = customerCollection.docs.map(doc => doc.data())
    console.log(allCustomers)
  })
  .catch(err => console.error('Error Getting Customers: ', err))

