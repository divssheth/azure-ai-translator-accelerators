export const API_KEY = "70ff0feceded4b05aecc7af7c8f988ae";//process.env.REACT_APP_API_KEY;
export const BASE_URL = "https://translator-apim-4365.azure-api.net";//process.env.REACT_APP_BASE_URL;

export const GET_LOGS_API = (date) => `${BASE_URL}/get_logs_by_date?date=${date}`;
export const GET_ALL_LOGS = `${BASE_URL}/get_all_logs`;
export const UPLOAD_API = `${BASE_URL}/upload_file`;
export const GET_PROMPTS_API = `${BASE_URL}/get_all_prompts`;