import { useState , useEffect } from "react";
import Card from "./Card";

 function ProjectList(){
    const[projects,setProjects]=useState([]); 
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState(null);

    
     useEffect(function(){
        fetch('/data/projects.json') 
         .then(function(response){
            return response.json();
         })
         .then(function(data){
            setProjects(data.projects);
            setLoading(false);
         })
         .catch(function(err){
            setError('Eroare la incarcarea datelor');
            setLoading(false);
         });
     },[]);
     if (loading){
        return <p>Se incarca...</p>
     }
     if(error){
        return <p>Nu se gaseste acel fisier!!!Pune mana si rezolva problema</p>
     }
     return(
        <div>
            <h3>Proiecte</h3>
            {
                projects.map(function(project) {
                    // return (<p>Proiecte: {project.title}</p>)
                return <Card
                title={project.title}
                description={project.tech}
                />
            })
            }
        </div>
     );
    
 }


export default ProjectList;