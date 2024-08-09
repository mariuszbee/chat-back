# Chat Backend

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![WebSocket](https://img.shields.io/badge/WebSocket-010101?style=for-the-badge&logo=websocket&logoColor=white)

## Description

This is a backend application for a chat system. The application supports real-time messaging, user authentication, and data persistence. It leverages WebSocket for real-time communication and GraphQL for flexible and efficient data querying.

## Technologies:

It is built using the following technologies:

- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **Express**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **MongoDB**: A document-oriented NoSQL database used for high volume data storage.
- **GraphQL**: A query language for your API, and a server-side runtime for executing queries by using a type system you define for your data.
- **WebSocket**: A protocol providing full-duplex communication channels over a single TCP connection.

## Installation and running the application

**To install the dependencies, run the following command:**

```bash
npm installnpm
```
**To start the application:**

In development mode, run the following command:
```bash
run start:dev
```
To build the application, run the following command:
```bash
npm run build
```

To start the application in production mode, run the following command:

```bash
npm run start:prod
```
## Requirements

In the main project directory, a `.env` file is required with the following variables:

- `MONGODB_URI`: Database host address
- `MONGODB_NAME`: Database port
- `JWT_SECRET`: Secret for generating JWT tokens
- `PORT`: Port on which the application will listen
- `JWT_EXPIRATION`: Expiration time for JWT tokens## Accessing GraphQL Playground

### Accessing GraphQL Playground
In development mode, you can access the GraphQL Playground at the following endpoint: `http://localhost:PORT/graphql`

### Future Features

The following features are planned for future releases:

- **User Profiles**: Allow users to create and manage their profiles, including profile pictures.
- **Message Reactions**: Enable users to react to messages with emojis.
- **File Sharing**: Allow users to share files and images within the chat.
- **Private Chats**: Implement private chat rooms for one-on-one conversations.




