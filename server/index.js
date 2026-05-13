const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/dashboard')
  .then(function(){
    console.log('Conectat la MongoDB!');
  })
  .catch(function(err){
    console.log('Eroare conectare MongoDB:',err);   
  });

const PORT = 3000;
const Project = require('./models/Project'); 


app.get('/', function(req, res) {
    res.json({ message: 'Serverul functioneaza!' });
});

app.get('/api/projects',async function(req,res){
    try{
        const projects = await  Project.find();
        res.json(projects);
    }catch(err){
        res.status(500).json({error: 'Eroare' + err});
    }
});

app.post('/api/projects',async function(req,res){
   try{
    const newProject = new Project({
       title:req.body.title,
       tech:req.body.tech,
       done:req.body.done || false,  
       });
       const saved = await newProject.save();
       res.status(201).json(saved);
   }catch(err){
    res.status(400).json({error:err.message});
   }
});

app.get('/api/projects/:id', async function(req,res){
   try{
    const project = await Project.findById(req.params.id);
     if(!project){
        return res.status(404).json({error:'Nu se gaseste proiectul'});
    }
    res.json(project);
   }catch(err){
     res.status(500).json({error:'Eroare' + error.message});
   }
});

app.delete('/api/projects/:id',async function(req,res){
   try{
    const project = await Project.findByIdAndDelete(req.params.id);
    if(!project){
        return res.status(404).json({error:'Nu se gaseste acest proiect!!'});
    }
    res.json({message:'Deleted!!!'});
   }catch(err){
    res.status(500).json({error:'Eroare' + error.message});
   }
});

app.put('/api/projects/:id', async function(error, req, res, next) {
	try {
		const updated = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );   // returneaza documentul DUPA actualizare 
		if (!updated) return res.status(404).json({ error: 'Not found' });
		res.json(updated); 
	} catch (err) { 
		res.status(400).json({ error: err.message }); 
	} 
 }); 

app.listen(PORT, function() {
    console.log('Server pornit pe http://localhost:' + PORT);
});
