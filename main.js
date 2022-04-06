const express = require('express');
const app = express();
const webpageDir =  `${__dirname}/srv`;


app.use(express.urlencoded({ extended: true }));
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running at http://localhost:3000");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static(webpageDir))

app.get('/', (request, response) => {
    response.sendFile(`${webpageDir}/circuIT.html`);
});

