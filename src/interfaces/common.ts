import { IGenericErrorMessage } from './error';

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessage: IGenericErrorMessage[];
  //   errorMessage: {
  //     path: string
  //     message: string
  //   }[]
};
