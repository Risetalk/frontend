
# RiseTalk - Decentralized Learning and Commerce Platform

**RiseTalk** is a groundbreaking decentralized platform that empowers users by combining online education with blockchain technology. Learners can purchase, own, and even resell courses as NFTs, ensuring true ownership of their educational assets. Built on ICP and Stacks, RiseTalk offers a secure, scalable, and seamless experience for all users.

## Features

- **Decentralized Learning**: Purchase and own courses as NFTs.
- **Resell Courses**: Once you've completed a course, you can resell it on the marketplace.
- **Blockchain-secured Assets**: All educational achievements are stored securely on the blockchain.
- **Seamless Transactions**: Experience fast and secure transactions on a decentralized platform.

## Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) v14 or higher
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) (if applicable for containers)
- [Internet Computer SDK (dfx)](https://internetcomputer.org/docs/current/developer-docs/setup/) (for ICP-related development)

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/risetalk.git
cd risetalk
```

### 2. Install dependencies

If you're using npm:

```bash
npm install
```

Or if you're using yarn:

```bash
yarn install
```

### 3. Run the development server

For a standard Node.js project:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

Build For ICP environment:
```
yarn build
next export
```

For an ICP environment:

```bash
dfx start
dfx deploy
```

### 4. Open your browser

Once the server is running, you can open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Building for Production

To build the project for production, run:

```bash
npm run build
```

Or with yarn:

```bash
yarn build
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
