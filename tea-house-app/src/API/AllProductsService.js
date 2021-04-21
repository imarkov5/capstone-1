import axios from "axios"

class AllProductsService{
    executeAllProductsService(){
        return axios.get('http://localhost:8080/products');
    }
}
export default new AllProductsService()