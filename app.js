const express = require("express");
const app = express();
const ProductRouter = require("./routes/Product");
const dotenv = require("dotenv");

dotenv.config();

app.use(express.json()); 
app.use(express.text()); 
app.use(express.urlencoded({ extended: true })); 

//check invalid json file
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ message: 'Invalid JSON file' });
  }
  next();
});

app.use("/products", ProductRouter);

app.all('*', (req, res) => {
  return res.status(404).send('Route not found');
});

app.listen(8000, () => {
  console.log(process.env.TEST_DB);
  console.log("Server is running on port 8000");
});