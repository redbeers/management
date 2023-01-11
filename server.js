const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '박상비',
            'birthday': '930827',
            'gender': '남자',
            'job': '직장인'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '김준형',
            'birthday': '930827',
            'gender': '여자',
            'job': '직장인'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '김소연',
            'birthday': '930827',
            'gender': '남자',
            'job': '직장인'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on poort ${port}`));