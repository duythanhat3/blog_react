export const GLOBAL_CONTANT = {
    SUCCESS_CODE: typeof process.env.REACT_APP_SERVER_SUCCESS_CODE !== "undefined" ? parseInt(process.env.REACT_APP_SERVER_SUCCESS_CODE) : 200,
}