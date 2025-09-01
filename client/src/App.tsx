import "./App.css";
import { useQuery } from "@apollo/client/react";
import { gql } from "@apollo/client";
import { getUsers } from "./graphql/queries/query";

function App() {
  const { loading, data, error } = useQuery(
    gql`
      ${getUsers}
    `
  );
  console.log("data coming after query", data);

  if (error) return <h1>Err while Api call for getting data.</h1>;

  return loading ? <p>Loading...</p> : <p>Test123</p>;
}

export default App;
