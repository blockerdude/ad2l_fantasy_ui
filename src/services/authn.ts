import axios, { AxiosResponse } from "axios";

export interface conference {
    description: string
    name: string
}

// export interface confResponse {
//     confs: conference[]
// }

export function getOIDCRedirectURL(): Promise<AxiosResponse<string>> {
    const test = axios.get<string>("api/startOIDC")
    return test
}

export function baseCall(): Promise<AxiosResponse<conference[]>> {
    const test = axios.get<conference[]>("/hello")
    return test
}

