import express from 'express'
const app = express();


//REQUESTS
app.get('/', (req,res)=>{
    return res.send("hello crud")
});

//listen for requests
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});