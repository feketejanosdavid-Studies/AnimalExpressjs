const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req,res,)=>{res.json({"message":"OK"})});

app.listen(port, () => {
    console.log(`A szerver fut az alábbi porton: ${port}`);
  });