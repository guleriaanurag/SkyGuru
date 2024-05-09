# SkyGuru

**View live demo [here](https://sky-guru.vercel.app)**

**Guide to Start The Project**

**Prerequisites:**
- Node.js installed on your device. If not, download and install it from [here](https://nodejs.org/en).

## How To Configure The Backend

1. Obtain an API key from [OpenWeatherMap](https://openweathermap.org/api).
2. Create a `.env` file in the `backend` folder with the following content:

```env
API_KEY={YOUR API KEY}
PORT={Any port you want your server to listen on} # For example, PORT=5000
```

**Open Your Terminal**

```bash
cd backend
npm install
npm start
```

## How To Configure The Frontend

Create a .env file and a variable `VITE_BACKEND_URL={YOUR BACKEND URL}` for example `VITE_BACKEND_URL="http://localhost:5000/"`

**Open Your Terminal**

```bash
cd frontend
npm install
npm run dev
```

## 📄 Todos
- [X] Add Loading/Error States
- [ ] Unit Testing
- [X] Dark/Light Mode
- [ ] Convert the project to TypeScript

Thank you ☺