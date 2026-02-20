function AdminPage({ users, setUsers }) {
  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const toggleRole = (id) => {
    setUsers(
      users.map((u) =>
        u.id === id ? { ...u, role: u.role === "User" ? "Admin" : "User" } : u
      )
    );
  };

  return (
    <div className="card wide">
      <h3>Admin Dashboard</h3>

      {users.length === 0 ? (
        <p className="empty">No users available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.phone}</td>
                <td>{u.role}</td>
                <td>
                  <button onClick={() => toggleRole(u.id)}>Update</button>
                  <button className="danger" onClick={() => deleteUser(u.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminPage;