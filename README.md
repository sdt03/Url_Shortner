## Description
This is a simple URL Shortener application built using a Node.js backend with Express.js and a React.js frontend. The backend handles URL shortening and storage, while the frontend provides a user interface for submitting and retrieving shortened URLs. MongoDB is used as the database to store URL mappings.

---

## Prerequisites
Make sure you have the following installed:
- Node.js (>=16.x)
- npm or yarn
- MongoDB (running locally or a remote instance)

---

## How to Clone the Repository
1. Open a terminal on your system.
2. Clone the repository using the following command:

```bash
git clone https://github.com/sdt03/Url_Shortner.git
```
3. Navigate to the project folder:

```bash
cd Url_Shortner
```

---

## Install Dependencies
### Backend
1. Navigate to the backend folder:

```bash
cd backend
```
2. Install dependencies:

```bash
npm install
```

### Frontend
1. Navigate to the frontend folder:

```bash
cd frontend
```
2. Install dependencies:

```bash
npm install
```

---

## How to Run the Application
### 1. Configure Environment Variables

Create a `.env` file in the backend directory with the following content:

```env
PORT=5001
MONGO_URI=mongodb://localhost:27017/urlshortener
```

Replace `MONGO_URI` with your MongoDB connection string if using a remote instance.

---

### 2. Run the Backend Server
1. Open a terminal and navigate to the `backend` folder:

```bash
cd backend
```
2. Start the server:

```bash
npm run dev
```
The server will run on `http://localhost:5001`.

---

### 3. Run the Frontend
1. Open another terminal and navigate to the `frontend` folder:

```bash
cd frontend
```
2. Start the frontend application:

```bash
npm run dev
```
The frontend will run on `http://localhost:3000`.