import "./App.css";
import { useLazyQuery } from "@apollo/client/react";
import { getUsers } from "./graphql/queries/query";

type User = { name: string };
type GetUsersResponse = { users: User[] };

function App() {
  const [getUsersTrigger, { called, loading, data }] =
    useLazyQuery<GetUsersResponse>(getUsers);

  if (called && loading) return <p>Loading ...</p>;

  if (!called) {
    return <button onClick={() => getUsersTrigger()}>Load Users</button>;
  }

  return (
    <div>
      {data?.users?.map((user, idx) => (
        <h1 key={idx}>Hello {user.name}!</h1>
      ))}
    </div>
  );
}

export default App;
