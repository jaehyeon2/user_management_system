const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const port=process.env.PORT||5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends:true}));

app.get('/api/customers', (req, res)=>{
    res.send([
        {
            "id": 1,
            "image": "https://placeimg.com/64/64/1",
            "name": "강재현",
            "birthday": "000208",
            "gender": "남자",
            "job": "대학생"
        },
        {
            "id": 2,
            "image": "https://placeimg.com/64/64/2",
            "name": "강재현2",
            "birthday": "990208",
            "gender": "남자",
            "job": "강재현"
        },
        {
            "id": 3,
            "image": "https://placeimg.com/64/64/3",
            "name": "강재현3",
            "birthday": "000108",
            "gender": "남자",
            "job": "대학생"
        }
    ]);
})

app.listen(port, ()=>
    console.log(`${port} port is waiting`)
);