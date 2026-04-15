import { useState, useEffect } from "react";

function UsersList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch(() => {
                setError("Eroare la incarcarea utilizatorilor");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Se incarca utilizatorii...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h3>Utilizatori (API)</h3>
             <input
                type="text"
                placeholder="Cauta utilizator..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {users
                .filter((user) =>
                    user.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((user) => (
                    <div key={user.id}>
                        <p><strong>{user.name}</strong></p>
                        <p>Email: {user.email}</p>
                        <p>Oras: {user.address?.city}</p>

                        <hr />
                    </div>
                ))}
        </div>
    );
}

export default UsersList;