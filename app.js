const express = require('express');
const fs = require('fs/promises');
const app = express();
const PORT = process.env.PORT || 3030;
app.use(express.static('public'));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render("index")
});

app.get('/292', async (req, res) => {
    let data = await fs.readFile('groups/292.json', 'utf8');
    res.json(JSON.parse(data)[0]);
});

app.get('/291', async (req, res) => {
    res.render("group");
});

app.get('/test', (req, res) => {
    res.render("test");
});
app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(`Server started on ${PORT}`);
})