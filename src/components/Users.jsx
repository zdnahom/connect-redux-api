import { useSelector } from "react-redux";

const Users = () => {
  const { users, isLoading, error } = useSelector((store) => store.users);

  if(isLoading){
    return <div><h1>Loading...</h1></div>
  }
  if(error){
    return <div><h1>Something is wrong</h1></div>
  }
  return (
    <section>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <b>full name:</b> {user.firstName + " " + user.lastName}
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Users;
