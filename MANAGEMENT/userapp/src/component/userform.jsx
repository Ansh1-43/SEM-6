import { useState } from "react";
function UserForm({ users, setUsers }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "User",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    setUsers([...users, { ...form, id: Date.now() }]);
    setForm({ name: "", email: "", phone: "", role: "User" });
  };

  return (
    <div className="card">
      <h3>User Registration</h3>

      <form onSubmit={submitHandler}>
        <input
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <input
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
        />

        <select
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <option>User</option>
          <option>Admin</option>
        </select>

        <button className="primary">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;