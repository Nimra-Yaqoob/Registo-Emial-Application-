import { ErrorCodes } from './ErrorCodes';

export const ApiEndpoints = {
  RefreshToken: 'AccessToken',
  //Login
  Login: 'Login',
    //2FA Authentication
    Authentication2Fa: 'QrAuthentication',
};

export const FrontEndPoints = {
  login: '/login',
  logout: '/logout',
  UserMessage: 'UserMessage/',
  UserMessageSend: 'UserMessage/sendMessage',
  UserMessageDelete: 'UserMessage/deleteMessage',
  UserMessageReply: 'UserMessageReply',
  UserMessagePined: 'UserMessage/pinedMessage/',
  ReadMessageStatus: 'UserMessage/readMessageStatus/',
  UnreadMessageCount: 'UserMessage/UnreadMessageCount',
};

export const GetLoginMfaError = (errorCode: number = 200): string => {
  switch (errorCode) {
    case ErrorCodes.badRequest400:
      return 'Invalid Request, try again';
    case ErrorCodes.unAuthorized401:
      return 'Invalid Authentication. Authentication Failed.';
    case ErrorCodes.Forbidden403:
      return "Access Denied. Can't complete request.";
    case ErrorCodes.NotFount404:
      return "Sorry, the page or resource you're looking for could not be found.";
    case ErrorCodes.serverError500:
    case ErrorCodes.serverException502:
      return 'Something bad happened, please try again';
    default:
      return 'An error occurred. Please try again later.';
  }
};

export const EqNotification = ({
  message: 'Error',
  description: 'Something went wrong',
  type: 'error', // Use 'success', 'info', 'warning', or 'error'
});
