// middleware/serializableCheckMiddleware.js
const serializableCheckMiddleware = {
    serializableCheck: {
      ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
    },
  };
  
  export default serializableCheckMiddleware;
  