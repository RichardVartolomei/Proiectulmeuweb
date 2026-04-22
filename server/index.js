const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', function(req, res) {
    res.json({ message: 'Serverul functioneaza!' });
});

const projects = [
  { id: 1, title: "Pagina personala", tech: "HTML, CSS", done: true },
  { id: 2, title: "Calculator Buget", tech: "JS", done: true },
  { id: 3, title: "Dashboard React", tech: "React", done: false },
  { id: 4, title: "API Meteo", tech: "React,API", done: false },
];

// toate proiectele
app.get('/api/projects', function(req, res) {
    res.json(projects);
});

app.get('/api/projects/:id', function(req, res) {
    const id = parseInt(req.params.id);
    const project = projects.find(p => p.id === id);

    if (!project) {
        return res.status(404).json({ error: 'Not found' });
    }

    res.json(project);
});

app.get('/api/stats', function(req, res) {
    const total = projects.length;
    const finalizate = projects.filter(p => p.done === true).length;
    const inLucru = projects.filter(p => p.done === false).length;

    res.json({
        total: total,
        finalizate: finalizate,
        inLucru: inLucru
    });
});

app.listen(PORT, function() {
    console.log('Server pornit pe http://localhost:' + PORT);
});