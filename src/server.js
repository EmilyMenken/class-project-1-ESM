import express from 'express';
const app = express();

import router from './routes/home.routes.js';

//make the app

//route to our files
app.get("/", (req, res)=> 
    
    {res.send("Hello, world!")}
);

app.use("/my", router);

//run the port

const PORT = 8000;

app.listen(PORT, () => console.log (`Server started on http://localhost:${PORT}`));