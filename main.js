const express = require('express');
const app = express();
const webpageDir =  `${__dirname}/srv`;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', './srv')
app.use(express.urlencoded({ extended: true }));
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running at http://localhost:3000");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static(webpageDir))

app.get('/game', (req, res) =>{
    let index = req.query.level - 1;
    res.render(`${webpageDir}/game`, {ind:index});
})

app.get('/', (request, response) => {
    response.sendFile(`${webpageDir}/index.html`);
});

