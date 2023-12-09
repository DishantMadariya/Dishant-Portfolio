const express = require('express');
const port =8002;
const app = express();
const path = require('path');
// const cd = require('./config/mongoose');
const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://dishantpatel:Duggu1630@portfolio.qs9kwwd.mongodb.net/contact';
mongoose.connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    }).then(() => console.log('Database connected.')).catch(err => console.log(err));
const {log} = require('console');
const Detail = require('./models/Detail');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname,'assests')));
app.get('/',function(req,res){
    return res.render('home');
})
app.get('/about',function (req,res){
    return res.render('about');
});
app.get('/skill',function (req,res){
    return res.render('skill');
});
app.get('/portfolio',function (req,res){
    return res.render('portfolio');
});
app.get('/contact',function (req,res){
    return res.render('contact');
});
app.listen(port, function(err){
    if(err){
        console.log("Something went wrong");
        return false;
    }
    console.log("Server is Connected Succesfull :",port);
});
app.post('/insertData', async function(req,res){
    await Detail.create(req.body);
    return res.redirect('/contact');
});
app.get('/viewMessage', async function(req,res){
    let data = await Detail.find({});
    return res.render('view',{
        messaging : data
    });
});