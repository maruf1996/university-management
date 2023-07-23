import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { Routes } from './app/routes';
const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
// app.use('/api/v1/users/', UserRoutes);
// app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);
app.use('/api/v1', Routes);

// Testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   //   res.send('Working Successfully')
//   // throw new Error('Error Khaichi')
//   //   throw new ApiError(400, 'Error Khaichi')
//   // next('Ore baba error')
//   //   Promise.reject(new Error('Unhandle Promise Rejection'))
//   console.log(x)
// })

// global error handler
app.use(globalErrorHandler);

// handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'Api Not Found',
      },
    ],
  });
  next();
});

export default app;
