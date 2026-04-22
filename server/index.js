const express = require('express');
const app = express();
const PORT = 3000;

app.get('/',function(req,res){
    res.json({message:'Serverul functioneaza!' });
});

app.listen(PORT,function(){
 console.log('Server pornit pe https://localhost ' + PORT);
});