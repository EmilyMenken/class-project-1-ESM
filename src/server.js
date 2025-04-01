import express from 'express';
const app = express();

//make the app

//route to our files
app.get("/home.html", (req,res)=> 
    
    res.send("Hello, world!")

);


//run the port

const PORT = 8000;

app.listen(PORT, () => console.log (`Server started on http://localhost:${PORT}`));