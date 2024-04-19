import {Post} from "@/domain";

import {deleteData, getData, postData, putData} from "./api-services";

export const getPosts = async (): Promise<Post[]> => {
    return getData<Post[]>('posts')
}

export const getPost = async (id: string): Promise<Post | null> => {
    try {
        return await getData<Post>(`posts/${id}`);
    } catch (e) {
        return null
    }
}

export const createPost = async (title: string, body: string): Promise<void> => {
    await postData('posts', {title, body})
}

export const updatePost = async (id: number, title: string, body: string): Promise<void> => {
    await putData(`posts/${id}`, {title, body})
}

export const deletePost = async (id: number): Promise<void> => {
    await deleteData(`posts/${id}`)
}