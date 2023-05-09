// wer are exporting a key: val pair of index : function 
const Person = require('../models/person.model')

module.exports.index = (request, response) =>{
    response.json({
        // This is where we're setting the API's response to the requesting client

        message: "Hello world"
    });
}
module.exports.createPerson = (request,response)=> {
    // Mongoose's "create" method is run using our Person model to add a new  person to our dh's person collection(table)
    // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client 
    Person.create(request.body)
    // This will use whatever the body if the client's request sends over
    .then(person => response.json(person))
    .catch(err => response.json(err));


}
