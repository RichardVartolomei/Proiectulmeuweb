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

      {/* Contor */}
      <h2>Contor</h2>
      <p>Ai apasat de {count} ori</p>

      {/* Butoane */}
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>

      {/* Card-uri */}
      <h2>Proiecte</h2>
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