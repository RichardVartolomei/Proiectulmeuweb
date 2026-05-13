import { useState, useEffect } from "react";
import Card from "./Card";

function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [search, setSearch] = useState('');
    const [title, setTitle] = useState('');
    const [tech, setTech] = useState('');

    // 🔹 GET all projects
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
            .catch(function () {
                setError('Eroare la incarcarea datelor');
                setLoading(false);
            });
    }, []);

    async function handleSubmit() {
        try {
            const response = await fetch('http://localhost:3000/api/projects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: title,
                    tech: tech
                }),
            });

            if (!response.ok) {
                throw new Error("Eroare la creare");
            }

            const newProject = await response.json();

            setProjects([...projects, newProject]);
            setTitle('');
            setTech('');

        } catch (err) {
            console.error('Eroare:', err);
        }
    }
 
  async function handleToggle(id, currentDone) {
  try {
    console.log(id);
    console.log(currentDone);
    const response = await fetch(
      'http://localhost:3000/api/projects/' + id,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          done: !currentDone
        }),
      }
    );

    const updatedProject = await response.json();
    console.log(updatedProject);
    setProjects(
      projects.map(p => prevProjects =>
        p._id === id ? updatedProject : p
      )
    );

  } catch (err) {
    console.error(err);
  }
}

    async function handleDelete(id) {
        try {
            const response = await fetch( 'http://localhost:3000/api/projects/' + id,
                {
                    method: 'DELETE'
                }
            );

            if (!response.ok) {
                throw new Error("Eroare la ștergere");
            }

            // scoatem din state proiectul șters
            setProjects(function (prevProjects) {
                return prevProjects.filter(function (p) {
                    return p._id !== id;
                });
            });

        } catch (err) {
            console.error('Eroare la stergere:', err);
        }
    }

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
                    return p.title
                        .toLowerCase()
                        .includes(search.toLowerCase());
                })
                .map(function (project) {
                    return (
                        <div
                            key={project._id}
                            style={{ marginBottom: "15px" }}
                        >
                            <Card
                                title={project.title}
                                description={project.tech}
                            />

                            <button onClick={() => handleDelete(project._id)}
                                style={{ marginTop: "5px" }}
                            >
                                Șterge
                            </button>
                            <button onClick={() => handleToggle(project._id, project.done)}
                          >
                              {project.done ? 'Marchează în lucru' : 'Marchează finalizat'}
                               
                                </button>
                        </div>
                    );
                })}

            <div style={{ marginTop: "30px" }}>
                <h4>Statistici</h4>
                <p>Total proiecte: {projects.length}</p>
                <p>
                    Finalizate:{' '}
                    {projects.filter(p => p.done).length}
                </p>
                <p>
                    In lucru:{' '}
                    {projects.filter(p => !p.done).length}
                </p>
            </div>

            <div style={{ marginTop: "20px" }}>
                <h4>Adauga proiect</h4>

                <input
                    type="text"
                    placeholder="Titlu proiect"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Tehnologii"
                    value={tech}
                    onChange={(e) => setTech(e.target.value)}
                />
                
                <button onClick={handleSubmit}>
                    Adauga
                </button>
                 
            </div>
        </div>
    );
}

export default ProjectList;