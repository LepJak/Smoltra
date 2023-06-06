import axios from 'axios';

const instance = axios.create({
    withCreditionals: true,
    baseURL: "https://localhost:7175/api",
});

export const productApi = {
    getProducts(numberPage=1, countItems=20){
        return instance.get(`product?numberPage=${numberPage}&countItems=${countItems}`)
            .then(response =>{
                return response.data;
            })
    },
    getProductDetail(id){
        return instance.get("url")
        .then(response =>{
            return response.data;
        })
    },
    createProduct(product){
        const formData = new FormData();
        console.log("createProduct");
        console.log(product.images)
        formData.append('name', product.name);
        formData.append('price', product.price);
        formData.append('description', product.description);
        formData.append('SpecificationGroups',JSON.stringify(product.specifications));

        for(let i=0;i<product.images?.length; i++){
            formData.append('images', product.images[i]);
        }

        return instance.post(`product`,formData)
            .then(response =>{
                return response.data;
            })
    }
}
export const cartApi = {
    getCartItems(){
        return instance.get(`cart`)
            .then(response =>{
                console.log(response);
                return response.data;
            })
    },
    getProductsGuidsFromCart(){
        return instance.get(`cart/getProductsGuid`)
            .then(response =>{
                return response.data;
            })
    },
    removeProductFromCart(productId){
        return instance.delete(`cart/${productId}`,)
            .then(response =>{
                return response.data;
            })
    },
    addProductInCart(id){
        console.log("api");
        return instance.post(`cart`,{productId:id,count:1})
            .then(response =>{
                return response.data;
            })
            .catch((err) => {
                console.log(err);
            })
    }
}