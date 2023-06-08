
import axios from "axios"
import { obj } from "./myUrls";

export const getProductsList = async () => {
    try {
        let productData = await axios.get(`${obj.BASE_URL}/featuredCollection`)
        return productData.data.data
    } catch (error) {
        console.log(error);
    }
}

export const getNewArrivalProducts = async () => {
    try {
        let productData = await axios.get(`${obj.BASE_URL}/newArrival`)
        return productData.data.data
    } catch (error) {
        console.log(error);
    }
}