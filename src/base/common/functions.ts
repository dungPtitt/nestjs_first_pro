export const setError = (message, code = 500) => {
    return {data: null, code, error: {message}}
};

export const success = (message="", data?: any) => {
  return {data: {result: true, message: message, ...data}, error: null}
};