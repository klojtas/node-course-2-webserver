const express=require("express");
const hbs=require("hbs");

var app=express();
hbs.registerPartials(__dirname+'/public/partials')
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));
hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear()
});

app.get('/',(req,res)=>{
  res.render('home.hbs',{
    pageTitle:'Welcome dynamic title',
    welcomeMessage: 'It is welcome message'

  });
});
app.get('/about',(req,res)=>{
res.render('about.hbs',{
  pageTitle:'About dynamic title'
});
});
app.get('/bad',(req,res)=>{
res.send({errorMessage:'some error'});
});
app.listen(3000);
