const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
mongoose.connect('mongodb://localhost:27017/dashboard')
  .then(function(){
    console.log('Conectat la MongoDB!');
  })
  .catch(function(err){
    console.log('Eroare conectare MongoDB:',err);   
  });
const PORT = 3000;

app.use(cors());

app.get('/', function(req, res) {
    res.json({ message: 'Serverul functioneaza!' });
});
const Project = require('./models/Project'); 

app.use(express.json());

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
// app.get('/api/projects/:id', function(req, res) {
//     const id = parseInt(req.params.id);
//     const project = projects.find(p => p.id === id);

//     if (!project) {
//         return res.status(404).json({ error: 'Not found' });
//     }

//     res.json(project);
// });

// app.get('/api/stats', function(req, res) {
//     const total = projects.length;
//     const finalizate = projects.filter(p => p.done === true).length;
//     const inLucru = projects.filter(p => p.done === false).length;

//     res.json({
//         total: total,
//         finalizate: finalizate,
//         inLucru: inLucru
//     });
// });

app.post('/api/projects',function(req, res){
   const newProject={
    id:projects.length + 1,
    title:req.body.title,
    tech:req.body.tech,
    done:req.body.done || false,
   };
   projects.push(newProject);
   res.status(201).json(newProject);
});

app.delete('/api/projects/:id',function(req, res){
    const id = parseInt(req.params.id);
    const index = projects.findIndex(p=>p.id === id)
    if(index===-1)
        res.status(404).json({error:'Not Found'});
    else {
        projects.splice(index,1);
        res.json({message:'Deleted'});
    }
});

app.put('/api/projects/:id',function(req, res){
     const project = projects.find(p => p.id === id);
     const id = parseInt(req.params.id);
   if(!project){
    return res.status(404).json({error:"Not found"});
   }
   if(req.body.title!=undefined){
    project.title=req.body.title;
   }
   if(req.body.tech!=undefined){
    project.tech=req.body.tech;
   }
   if(req.body.done!=undefined){
    project.done=req.body.done;
   }
   res.json(projects);
});
app.listen(PORT, function() {
    console.log('Server pornit pe http://localhost:' + PORT);
});