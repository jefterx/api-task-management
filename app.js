import express from 'express';
import mongoose from 'mongoose';
import taskRoutes from './routes/taskRoutes.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(taskRoutes);

mongoose.connect('mongodb://localhost:27017/taskmanager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
