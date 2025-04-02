//importation des modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/Auth.Routes');
const productRoutes = require('./routes/Products.routes')
//initialisation du serveur
const app = express();
require('dotenv').config();
app.use(cors());
app.use(express.json());
const PORT = 5000;
//les routes
app.use('/api/auth', authRoutes);
app.use('/api/products',productRoutes)


//connexion à la base de données
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((err) => console.log('Connexion à MongoDB échouée !',err));

//démarrage du serveur  
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});

process.on('SIGINT', () => {
    console.log("Shutting down the server");
    mongoose.connection.close(() => {
        console.log("MongoDB connection closed");
        process.exit(0); 
    });
});
