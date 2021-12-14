const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb+srv://zoblod:20031998@cluster0.e2spu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  serverSelectionTimeoutMS: 5000
}).catch(err => console.log(err));

const resolutionSchema = new mongoose.Schema({
    name: String,
    text: String
});

// Create a model for items in the museum.
const Resolution = mongoose.model('Resolution', resolutionSchema);

// Create a new item in the museum: takes a title and a path to an image.
app.post('/api/resolutions', async (req, res) => {
    const resolution = new Resolution({
      name: req.body.name,
      text: req.body.text
    });
    try {
      await resolution.save();
      res.send(resolution);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
  
  // Get a list of all of the items in the museum.
  app.get('/api/resolutions', async (req, res) => {
    try {
      let resolutions = await Resolution.find();
      res.send(resolutions);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
  
  app.delete('/api/resolutions/:id', async (req, res) => {
    try {
      await Resolution.deleteOne({
        _id: req.params.id
      });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

  app.put('/api/resolutions/:id', async (req, res) => {
    try {
      const resolution = await Resolution.findOne({
        _id: req.params.id
      });
      resolution.name = req.body.name;
      resolution.text = req.body.text;
      await resolution.save();
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

  app.listen(3000, () => console.log('Server listening on port 3000!'));