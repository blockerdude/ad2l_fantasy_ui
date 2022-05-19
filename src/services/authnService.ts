import axios, { AxiosResponse } from "axios";
import { User } from "../model/user";

export interface conference {
    description: string
    name: string
}

// export interface confResponse {
//     confs: conference[]
// }

export function getOIDCRedirectURL(): Promise<AxiosResponse<string>> {
    return axios.get<string>("api/startOIDC")
}

export function getUser(): Promise<AxiosResponse<User>> {
    return axios.get<User>("/api/authn")
}

export function logoutUser(): Promise<AxiosResponse<void>> {
    return axios.get<void>("/api/logout")
}

