import { useState } from 'react';
import Card from './Card';

function App() {
  const [count, setCount] = useState(0);

  const projects = [
    { title: "Proiect 1", description: "Pagina personala" },
    { title: "Proiect 2", description: "Calculator buget" },
    { title: "Proiect 3", description: "Dashboard React" },
  ];

  return (
    <div>
      <h1>Dashboard</h1>

      {/* EX 5 - Contor */}
      <h2>Contor</h2>
      <p>Ai apasat de {count} ori</p>
      <button onClick={() => setCount(count + 1)}>Click</button>

      {/* EX 4 - Card-uri */}
      {projects.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default App;