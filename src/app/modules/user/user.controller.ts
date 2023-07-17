import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './user.service';

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body;
    const result = await UserService.createUser(user);
    next();

    // res.status(200).json({
    //   success: 'true',
    //   message: 'User Created Successfully',
    //   data: result,
    // });
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User Created Successfully',
      data: result,
    });
  },
);
// const createUser: RequestHandler = async (req, res, next) => {
//   try {
//     const { user } = req.body;
//     const result = await UserService.createUser(user);
//     res.status(200).json({
//       success: 'true',
//       message: 'User Created Successfully',
//       data: result,
//     });
//   } catch (err) {
//     // res.status(400).json({
//     //   success: 'false',
//     //   message: 'Failed to create User',
//     //   error:err
//     // })
//     next(err);
//   }
// };

export const UserController = { createUser };
