export const graphQLSchema = `#graphql
   
  type User {
  _id:ID!,
  name:String!,
  email:String!,
  password:String,
  courses:[Course] # one-to-many relationship
      }

  type Course {
  _id: ID!,
  title: String!,
  description: String!,
  instructor: User!, # many-to-one relationship
  price: String
      }

  type Query {
  hello: String,
  hello2: String,
  users:[User],
  user(id: ID!):User,
  courses:[Course]
  }

   type Mutation {
   addUser( name:String!,email:String!,password:String):User
  }
  `;
