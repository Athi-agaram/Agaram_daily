
function UserTable({ users }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th><th>Email</th><th>Role</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u, i) => (
          <tr key={i}>
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>{u.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable
