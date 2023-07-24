interface ApiResponse<T> {
    data: T | null;
    status: number;
}

class HttpService {
    async get<T>(url: string): Promise<ApiResponse<T>> {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return ({
                data,
                status: response.status
            })
        } catch(e) {
            return ({
                data: null,
                status: 500
            })
        }
    }
}


interface User {
    id: number;
    name: string
}

const getUserData = async () => {
    const userService = new HttpService();
    const url = "http://dummy.url";
    const response = await userService.get<User>(url)
    
    if(response.status === 200) {
        console.log(response.data?.name);
        
    }
}

interface Product {
    id: number;
    product_name: string
}

const getProductData = async () => {
    const productService = new HttpService();
    const url = "http://dummy.url";
    const response = await productService.get<Product>(url)
    
    if(response.status === 200) {
        console.log(response.data?.product_name);
        
    }
}