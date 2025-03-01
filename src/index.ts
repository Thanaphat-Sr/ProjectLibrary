
import express, { Request, Response } from "express";
import bookRoutes from './routes/bookRoutes'
import authorRoutes from './routes/authorRoutes';
import memberRoutes from './routes/memberRoutes';
import borrowingRoutes from './routes/borrowingRoutes';

const app = express();
app.use(express.json());
app.use('/books', bookRoutes)
app.use('/authors', authorRoutes)
app.use('/members', memberRoutes)
app.use('/borrowings', borrowingRoutes)
const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
