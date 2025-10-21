# GraphQL + Apollo Basics

This project demonstrates the **basics of GraphQL** and how to use **Apollo Client** and **Apollo Server** for building and testing APIs.

---

## 📘 Concepts Learned

### 🔹 GraphQL Operations

* **Query** → Used for fetching (GET) data.
* **Mutation** → Used for creating, updating, or deleting (POST, PUT, DELETE) data.
* **Subscription** → Used for live, real-time data updates.

---

### 🔹 Core Components

* **TypeDefs** → Where GraphQL types and schemas are defined.
* **Resolvers** → The actual functions that run when queries or mutations are executed.

---

### 🔹 Apollo Tools

#### 🧩 Apollo Server

* Used to build a GraphQL API.
* Connects TypeDefs and Resolvers to serve data.
* Can be tested in **Apollo Sandbox** (an online testing tool similar to Postman for GraphQL).

#### 🛰️ Apollo Client

* Used on the frontend to make GraphQL requests.
* Provides React hooks:

  * `useQuery` → Fetch data automatically.
  * `useLazyQuery` → Fetch data manually (on button click, etc.).
  * `useMutation` → Send create/update/delete requests.

---

## ⚙️ Testing

You can test your GraphQL API using **Apollo Sandbox** by sending queries, mutations, and subscriptions.

---

## 🧠 Summary

> Learned how to:
>
> * Write queries, mutations, and subscriptions in GraphQL
> * Define TypeDefs and Resolvers
> * Use Apollo Client hooks (`useQuery`, `useLazyQuery`, `useMutation`)
> * Set up and test Apollo Server using Apollo Sandbox
