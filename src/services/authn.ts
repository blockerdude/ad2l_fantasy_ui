import axios, { AxiosResponse } from "axios";

export interface conference {
    description: string
    name: string
}

// export interface confResponse {
//     confs: conference[]
// }

export function startLogin(): Promise<AxiosResponse<conference[]>> {
    const test = axios.get<conference[]>("/hello")
    return test
}

