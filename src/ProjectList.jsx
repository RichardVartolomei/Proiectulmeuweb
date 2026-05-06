import { useState, useEffect } from "react";
import Card from "./Card";

function ProjectList() {
    const [projects, setProjects] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    const [title, setTitle] = useState('');
    const [tech, setTech] = useState('');

    useEffect(function () {
        fetch('http://localhost:3000/api/projects') 
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Eroare server');
                }
                return response.json();
            })
            .then(function (data) {
                setProjects(data);
                setLoading(false);
            })
            .catch(function (err) {
                setError('Eroare la incarcarea datelor');
                setLoading(false);
            });
    }, []);
        
    if (loading) {
        return <p>Se incarca...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h3>Proiecte (din API)</h3>

            <input 
                type="text" 
                placeholder="Cauta proiect..." 
                value={search}
                onChange={function (e) {
                    setSearch(e.target.value);
                }}
            />

            {projects
                .filter(function (p) {
                    return p.title.toLowerCase().includes(search.toLowerCase());
                })
                .map(function (project) {
                    return (
                        <Card
                            key={project._id}   
                            title={project.title}
                            description={project.tech}
                        />
                    );
                })}

            <div style={{ marginTop: "30px" }}>
                <h4>Statistici</h4>
                <p>Total proiecte: {projects.length}</p>
                <p>Finalizate: {projects.filter(p => p.done).length}</p>
                <p>In lucru: {projects.filter(p => !p.done).length}</p>
            </div>
        </div>
    );
}

export default ProjectList;