import axios from 'axios';

const instance = axios.create({
    withCreditionals: true,
    baseURL: "https://localhost:7175/api",
});

export const productApi = {
    getProducts(numberPage, countItems){
        return instance.get(`Product?numberPage=${numberPage}&countItems=${countItems}`)
            .then(response =>{
                return response.data;
            })
    },
    getProductDetail(id){
        return instance.get("url")
        .then(response =>{
            return response.data;
        })
    }
}