hereconst express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// Routes
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Stellar Credit Online Backend Running 🚀');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
