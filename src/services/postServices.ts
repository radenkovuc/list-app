import {Post} from "@/domain/post";

import {deleteData, getData, postData, putData} from "./apiServices";

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

export const createPosts = async (title: string, body: string): Promise<void> => {
    await postData('posts', {title, body})
}

export const updatePost = async (id: string, title: string, body: string): Promise<void> => {
    await putData(`post/${id}`, {title, body})
}

export const deletePost = async (id: string): Promise<void> => {
    await deleteData(`post/${id}`)
}