// MongoDB Connection Script
const mongoose = require('mongoose');

// MongoDB URI
const mongoURI = 'mongodb+srv://admin:ncuqLhxIj74rTPj9@itisdev-davidssalon.v4bhg6r.mongodb.net/DavidsSalon';

// DB CONNECTION
function connectToDB() {
    mongoose.connect(mongoURI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }).then(() => {
        console.log('Connected to MongoDB');
        console.log('Database:', mongoose.connection.db.databaseName);
        console.log('Host:', mongoose.connection.host);
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit if = failed to connect
    });
}

function disconnect() {
    console.log('Disconnecting from MongoDB...');
    mongoose.disconnect();
}

function signalHandler() {
    disconnect();
    process.exit();
}

// Handle process termination
process.on('SIGINT', signalHandler);
process.on('SIGTERM', signalHandler);

module.exports = {
    connect: connectToDB,
    disconnect: disconnect
};