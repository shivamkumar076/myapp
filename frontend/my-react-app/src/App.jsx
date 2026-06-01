import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
const backendUrl = import.meta.env.VITE_BACKEND_URL || '/api';
  useEffect(() => {
    fetch(`${backendUrl}/users`)
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, [backendUrl]);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user, i) => <li key={i}>{user.name}</li>)}
      </ul>
    </div>
  );
}

export default App;