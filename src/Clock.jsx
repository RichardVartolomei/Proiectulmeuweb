import { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup când componenta dispare
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h3>Ceas live</h3>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;