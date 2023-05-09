// const express = require('express');
// const app = express();
// // const port = 8000;
// // require('./routes/person.routes')(app);
// // ! this is equivalent  to the above code
// app.use(express.json(),express.urlencoded({extended: true}))

// const personRoutes = require("./routes/person.routes");

//     personRoutes(app)
// // const PersonRoutes = require("./routes/person.routes");

// app.listen(8000,()=> {
//     console.log("Listening at port http://localhost")
        
//     }
// )
// // app.listen(port, ()=> console.log(`Listening on port:  http://localhost:${port}`))

const express = require("express")
const app = express();
const cors = require('cors')
const port = 8000;
app.use(cors())
// allows JSON objects to be posted
app.use(express.json());
// allows JSON objects with strings and arrays
app.use(express.urlencoded({extended: true}));
require('./config/mongoose.config')
// to connect to db
// require('./config/mongoose.config');
// allowing to access to all our routes
// ! this allow as to use post request and pass to it 
/* This code is setting up the Express application to use JSON and URL encoded data, and then requiring
and using the routes defined in `person.routes.js` file. The `allMyShowRoute` function is being
called with the `app` object as an argument to allow access to the defined routes. */
// app.use(express.json(),express.urlencoded({extended: true}))
// require('./routes/person.routes');
// // app allow to access to our routes
// allMyShowRoute(app);
require("./routes/person.routes")(app);


app.listen(port,()=> console.log(`Example app listening at http://localhost:${port}`))
