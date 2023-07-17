import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AcademicSemesterService } from './academicSemester.service';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData,
    );
    next();

    // res.status(200).json({
    //   success: 'true',
    //   message: 'Academic Semester is Created Successfully',
    //   data: result,
    // });
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester is Created Successfully',
      data: result,
    });
  },
);
// const createSemester: RequestHandler = async (req, res, next) => {
//   try {
//     const { ...academicSemesterData } = req.body;
//     const result = await AcademicSemesterService.createSemester(
//       academicSemesterData,
//     );
//     res.status(200).json({
//       success: 'true',
//       message: 'Academic Semester is Created Successfully',
//       data: result,
//     });
//   } catch (err) {
//     next(err);
//   }
// };

export const AcademicSemesterController = { createSemester };
