import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODAyMTI3ZmY5MTg5MDEwNzExMGRkOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4Njg3NzkwMywiZXhwIjoxNjg3MTM3MTAzfQ.DF67QXGvwIvAsrYV2VsUaBWs4LYAiBwN8DLJTSvEqwo";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Bearer ${TOKEN}`}


});