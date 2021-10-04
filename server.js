const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res)=>{
    res.json({
        message: 'Hello World!'
    });
});

//404 error for endpoints that dont exist
//KEEP AT BOTTOM
app.use((req, res)=>{
    res.status(404).end();
});

app.listen(PORT, ()=>{
    console.log(`Server live on port ${PORT}!`);
});