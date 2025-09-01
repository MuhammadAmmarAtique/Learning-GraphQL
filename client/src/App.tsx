import "./App.css";
import { useMutation } from "@apollo/client/react";
import { ADD_USER } from "./graphql/mutations/mutation";

type User = { _id: string; name: string; email: string };
type AddUserResponse = { addUser: User };

function App() {
  const [addUser, { data, loading, error }] =
    useMutation<AddUserResponse>(ADD_USER);

  const handleAddUser = async () => {
    try {
      await addUser({
        variables: {
          name: "John Does",
          email: "john@examplse.com",
        },
      });
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  if (loading) return <p>Adding user...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={handleAddUser}>Add User</button>

      {data?.addUser && (
        <h1>
          User Added: {data.addUser.name} ({data.addUser.email})
        </h1>
      )}
    </div>
  );
}

export default App;
