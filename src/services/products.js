import axios from "axios"
import { obj } from "./myUrls";
export const getProducts = async (id) => {
    try {
        let response = await axios.post(`${obj.BASE_URL}/Productslist`,
            {
                category_id: id
            })
        return response.data.data;
    } catch (error) {

    }
}
export const getProductDetails = async (id) => {
    try {
        let response = await axios.post(`${obj.BASE_URL}/productdetails`,
            {
                product_id: id
            })
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
}

export const productSearch = async (searchedProducts) => {
    try {
        let response = await axios.post(`${obj.BASE_URL}/Search`,
            {
                Search: searchedProducts
            })
        console.log("hello here i ma ", searchedProducts);
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
}

export const 
FilterProducts = async (minValue,maxValue) => {
    try {
        let response = await axios.post(`${obj.BASE_URL}/filterProducts`,
            {
                priceFrom:minValue,
                priceTo:maxValue
            })
            console.log("me value hoo vamue leta hoo",minValue,maxValue);
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
}
