import { useState, useEffect } from "react";
import Card from "./Card";

function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');

    useEffect(function () {
        fetch('/data/projects.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                setProjects(data.projects);
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
            <h3>Proiecte</h3>

            {/* INPUT SEARCH */}
            <input
                type="text"
                placeholder="Cauta proiect..."
                value={search}
                onChange={function (e) {
                    setSearch(e.target.value);
                }}
            />

            {/* LISTA FILTRATA */}
            {projects
                .filter(function (p) {
                    return p.title.toLowerCase().includes(search.toLowerCase());
                })
                .map(function (project) {
                    return (
                        <Card
                            key={project.id}
                            title={project.title}
                            description={project.tech}
                        />
                    );
                })}
        </div>
    );
}

export default ProjectList;