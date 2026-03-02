# 🌍 Travel Persona Explorer

Travel Persona Explorer is a full-stack survey web application built with 
Node.js, Express.js, MongoDB, EJS, and amCharts.

The application collects travel preference data and visualizes it using:

- 📊 Pie Chart (Travel Style)
- 📈 Bar Chart (Travel Frequency)
- 🌎 Map Visualization (Dream Destination by Continent)

---

## 🛠 Technologies Used

Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

Frontend
- EJS Template Engine
- Bootstrap 5
- amCharts v5

## 📂 Project Structure

```
TRAVEL-SURVEY/
│
├── models/
│   └── Survey.js          # MongoDB schema
│
├── routes/
│   └── surveyRoutes.js    # Express route handlers
│
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── iso2ToContinent.js
│
├── views/
│   ├── partials/
│   │   └── navbar.ejs
│   ├── form.ejs
│   ├── bar.ejs
│   ├── pie.ejs
│   ├── map.ejs
│   └── success.ejs
│
├── app.js                 # Main server file
├── package.json
├── package-lock.json
└── TravelData.json
```


---

## 🚀 How to Run the Application

### 1️⃣ Install Node.js

Make sure Node.js (v14 or later) is installed.

Check version:
node -v

---

### 2️⃣ Install dependencies

Inside the project folder:
npm install

---

### 3️⃣ Start MongoDB

Ensure MongoDB is running locally.

The connection string used:
mongodb://127.0.0.1:27017/surveyDB


If MongoDB is not running, start it before running the app.

---

### 4️⃣ Run the server
node app.js
Or:
npx nodemon app.js

---

### 5️⃣ Open in Browser

Visit:
http://localhost:3000


---

## 🔄 Application Workflow

1. User submits survey form (form.ejs)
2. Express handles POST request (/submit)
3. Data is stored in MongoDB
4. Aggregation is performed using Mongoose
5. Results are rendered via EJS
6. amCharts displays visualizations dynamically

---

## 📱 Responsive Design

- Fully responsive using Bootstrap 5
- Charts support hover (desktop) and tap (mobile)
- Tested in Chrome and mobile device simulation

---

## 🧠 Use of Express.js

Express.js is used for:

- Creating the web server
- Handling routing (GET and POST)
- Processing form submissions
- Rendering EJS templates
- Serving static files

---

## ⚠ Requirements

- Node.js v14+
- MongoDB running locally
- Internet connection (for amCharts CDN)

---

## 👨‍💻 Author
CHEN Ka Shing