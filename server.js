const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mockUserData=[
  {name:'Mark'},
  {name:'Jill'}
]

app.get('/users',function(req,res){
  res.json({
    sucess: true,
    message: 'sucessfully got users, nice!',
    users: mockUserData
  })
})
//colons are used as variables that be viewed in the params
app.get('/users/:id',function(req,res){
  console.log(req.params.id)
  res.json({
    sucess: true,
    message: 'got one user',
    user: req.params.id
  })
})

app.post('/login',function(req,res){
  const username=req.body.username;
  const password=req.body.password;

  const mockUsername="billyTheKid";
  const mockPassword="superSecret";

  if(username===mockUsername && password===mockPassword){
    res.json({
      sucess: true,
      message: 'password and username match!',
      token: 'encrypted token goes here'
    })
  } else {
    res.json({
      sucess: false,
      message: 'passoword and username do not match'
    })
  }
})


app.listen(8000,function(){console.log("server is running")})
