const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route

app.get('/', (req, res) => {
    res.json({"message": "Welcome smilingwords"});
});

app.get('/smw/owner', (req, res) => {
    res.json({"message": "Mr. Gerhard Fischer"});
});

app.get('/smw/location', (req, res) => {
    res.json({"message": "Smilingwords company is located on Vodna street 26, Kosice, Slovakia"});
});

app.get('/smw/hours', (req, res) => {
    res.json({"message": "Opening hours for Smilings words company are between 8 am and 16 pm"});
});

app.get('/smw/employees', (req, res) => {
    res.json({"message": "Owner is Mr. Gerhard Fisher, Developers are Mr. Andrej Bilec, Dusan Scensny, Lenka Scensny, Stefan Simko. HR and Office Manager is Zuzana Bilcak"});
});

app.get('/smw/dogs', (req, res) => {
    res.json({"message": "Mr. Gerhard Fisher owns three dogs. Two are Italian Greyhounds, male and female. Male is called Sergej and female is called Zaha. Third dog is female chihuahua called Aida "});
});





// listen for requests
app.listen(PORT, () => {
    console.log("Server is listening on port 3000");
});
