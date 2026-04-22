const express = require('express');
const app = express();
const PORT = 3000;

app.get('/',function(req,res){
    res.json({message:'Serverul functioneaza!' });
});

const projects=[
  { id : 1, title:"Pagina personala", tech:"HTML, CSS", done:true},
  { id : 2, title:"Calculator Buget", tech:"JS", done:true},
  { id : 3, title:"Dashboard React", tech:"React", done:false},
  { id : 4, title:"API Meteo", tech:"React,API", done:false},

];
app.get('/api/projects', function(req, res){
   res.json(projects);  
});

app.listen(PORT,function(){
 console.log('Server pornit pe https://localhost ' + PORT);
});