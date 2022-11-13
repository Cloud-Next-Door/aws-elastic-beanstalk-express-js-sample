const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Only when I smile when the world sees the beauty in my heart!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
