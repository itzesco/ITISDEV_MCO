David's Salon Appointment Booking Web App
=========================================

This is a Node.js-based web application for booking appointments at David's Salon. It uses MongoDB Atlas for storing appointment data and is intended to run locally in a development environment.

-----------------------------------------
REQUIREMENTS
-----------------------------------------
- Node.js: https://nodejs.org/en/download
- MongoDB Atlas (browser)
- MongoDB Compass (desktop app)
- Code editor (e.g., Visual Studio Code)

-----------------------------------------
INSTALLATION & SETUP
-----------------------------------------

1. Clone the Repository
-----------------------
git clone https://github.com/your-username/davids-salon-app.git
cd davids-salon-app

2. Install Dependencies
-----------------------
Make sure Node.js is installed, then in the VS Code terminal:

npm install

3. Create .env File
-------------------
In the root folder, create a file named ".env" and add your MongoDB connection URI:

MONGODB_URI=mongodb+srv://admin:ncuqLhxIj74rTPj9@itisdev-davidssalon.v4bhg6r.mongodb.net/

You can get this URI from MongoDB Atlas (see instructions below).

-----------------------------------------
MONGODB SETUP
-----------------------------------------

A. MongoDB Atlas (Browser)
--------------------------
1. Go to https://www.mongodb.com/cloud/atlas
2. Create an account or log in.
3. Accept your team’s project invite (if applicable).
4. In the left sidebar, go to "Network Access".
5. Click "Add Current IP Address" to allow access from your device.

IMPORTANT: This step is required for connecting to the database.

B. MongoDB Compass (Desktop App)
--------------------------------
1. Open MongoDB Compass.
2. Click the “+” icon in the connections tab.
3. Copy and paste the connection string (URI) from your .env file.
4. Press "Connect" to view the database and its collections.

-----------------------------------------
RUNNING THE SERVER
-----------------------------------------

From the terminal in your project folder, run:

node index.js

Once running, open your browser and go to:

http://localhost:3000

This will display the David's Salon homepage.

-----------------------------------------
NOTES & TIPS
-----------------------------------------
- If "npm install" fails, ensure you have the latest stable version of Node.js installed.
- The .env file must not be committed to version control — keep your credentials safe.
- If your server fails to connect to MongoDB, double-check that:
  - Your IP is added in "Network Access" in MongoDB Atlas.
  - Your connection URI is correct.
  - The database user has the appropriate privileges.

Optional:
---------
If package.json is not present, you can generate a basic one:

npm init -y

Then proceed with:
npm install
node index.js

-----------------------------------------
PROJECT STRUCTURE (Simplified)
-----------------------------------------
davids-salon-app/
├── assets/
├── views/
├── routes/
├── .env
├── index.js
├── package.json
└── README.txt

-----------------------------------------
SUPPORT
-----------------------------------------
For any questions or issues, reach out to the developer or open an issue in this repository.
