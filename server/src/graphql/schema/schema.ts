export const graphQLSchema = `#graphql
   
  type User {
  _id:ID!,
  name:String!,
  email:String!,
  password:String,
      }

  type Course {
 _id: ID!,
  title: String!,
  description: String!,
  instructor: User!,
  price: String
      }

  type Query {
    hello: String,
    hello2: String,
    users:[User],
    user(id: ID!):User,
    courses:[Course]

  }`;
