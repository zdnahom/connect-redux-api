import { useSelector } from "react-redux";

const Users = () => {
  const { users, isLoading, error } = useSelector((store) => store.users);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1>Something is wrong</h1>
      </div>
    );
  }
  return (
    <section>
      <h1>Today's Lucky human is : </h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <b>Full name:</b>{" "}
            {`${user.name?.title}.${user.name?.first} ${user.name?.last}`}
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Users;
