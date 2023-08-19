const express = require('express');
const db = require('./db/connection.js');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();


// Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api', apiRoutes);

// Default for requests not found CATCHALL
app.use((req, res) => {
    res.status(404).end();
})

db.connect(err => {
    if (err) throw err;
    console.log('Database Connected');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});



