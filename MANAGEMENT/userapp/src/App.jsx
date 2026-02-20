import { useState } from "react";
import UserForm from './component/userform';
import AdminPage from './component/adminpage'
import './component/all.css'
function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState("user");

  return (
    <>
      <nav className="nav">
        <h2>User Management</h2>
        <div>
          <button onClick={() => setPage("user")}>User Page</button>
          <button onClick={() => setPage("admin")}>Admin Page</button>
        </div>
      </nav>

      <div className="page">
        {page === "user" ? (
          <UserForm users={users} setUsers={setUsers} />
        ) : (
          <AdminPage users={users} setUsers={setUsers} />
        )}
      </div>
    </>
  );
}

export default App;