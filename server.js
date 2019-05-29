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
            'name': 'ventti',
            'birthday': '920302',
            'gender': '남자',
            'job': 'student'
          },
          {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': 'dong',
            'birthday': '940225',
            'gender': '여자',
            'job': 'programer'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': 'hyun',
            'birthday': '940425',
            'gender': '여자',
            'job': '디자이너'
          }
    ]);
})

app.listen(port, () => console.log(`Listening on port ${port}`));