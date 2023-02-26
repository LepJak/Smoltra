import axios from "axios";

const instance = axios.Create({
    withCreditionals: true,
    baseUrl: " "
});

export const productApi = {
    getProducts(page, pageSize){
        return instance.get("url")
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