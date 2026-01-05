import { BASE_URL } from "./config";

export const endPoints = {

    baseUrl: BASE_URL,

    products:{
        get: `${BASE_URL}/products`
    },
    
    categories:{
        get: `${BASE_URL}/products/categories`
    }
};