import Card from './Card';

function App() {
  // Array de proiecte
  const projects = [
    { title: "Proiect 1", description: "Pagina personala" },
    { title: "Proiect 2", description: "Calculator buget" },
    { title: "Proiect 3", description: "Dashboard React" },
    { title: "Proiect 4", description: "Aplicatie ToDo" },
    { title: "Proiect 5", description: "Site de prezentare" },
  ];

  return (
    <div>
      <h1>Dashboard</h1>

      {/* Generare Card-uri dinamic */}
      {projects.map((item, index) => {
        return (
          <Card
            key={index} // React trebuie sa aiba key pentru fiecare element generat din map
            title={item.title}
            description={item.description}
          />
        );
      })}
    </div>
  );
}

export default App;