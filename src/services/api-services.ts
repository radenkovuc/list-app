"use server"

import axios from "axios";

export const getData = async <T>(url: string): Promise<T> => {
    const result = await axios.get<T>(process.env.API_URL + url);
    return result.data
}

export const postData = async (url: string, data: object): Promise<void> => {
    await axios.post(process.env.API_URL + url, data);
}

export const putData = async (url: string, data: object): Promise<void> => {
    await axios.put(process.env.API_URL + url, data);
}

export const deleteData = async (url: string): Promise<void> => {
    await axios.delete(process.env.API_URL + url);
}