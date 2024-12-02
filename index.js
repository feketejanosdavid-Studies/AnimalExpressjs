const express = require('express');
const app = express();
const port = 3000;
const animalsRouter = require("./routes/animals");

app.use(express.json());

app.get("/", (req,res,)=>{res.json({"message":"OK"})});

app.use("/animals", animalsRouter);

app.use((err, req, res, next) => {
    console.log(err.message, err.stack);
    res.status(err.statusCode || 500).json({error: err.message});
    return;
})

app.listen(port, () => {
    console.log(`A szerver fut az alábbi porton: ${port}`);
  });