const mongoose= require('mongoose');
 
const connectDatabase= ()=> {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
     }).then(() => {
         console.log("Connected to DB.");
     });
}
 
module.exports= connectDatabase;