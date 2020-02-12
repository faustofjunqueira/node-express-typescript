// export * from './HttpError';
// export * from './ValidationError';
// export * from './AutenticationError';
// export * from './AuthorizationError';
// export * from './NotFoundError';
// export * from './BusinessError';
// export * from './InternalServerError';
// export * from './NotImplementedError';

import {HttpError} from './HttpError'

throw new HttpError(200, 'oi mundo cao', {});