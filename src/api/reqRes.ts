import axios from "axios";

export const reqResApi = axios.create({
    baseURL: "https://reqres.in/api",
    headers:{
        "x-api-key": "reqres_123776359ce145189fbed802a6237ec6"
    },
});