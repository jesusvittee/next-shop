const API = process.env.NEXT_PUBLIC_API_URL;

const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
    auth : {
        login:`${API}/api/${VERSION}/auth/login`,
        profile:`${API}/api/${VERSION}/auth/profile`,
    },
    products:{
        getAllProducts:`${API}/api/${VERSION}/products`,
        getProduct:(id) => `${API}/api/${VERSION}/products/${id}`,
    },
    categories :{
        getAllCategories:`${API}/api/${VERSION}/categories`,
        getCategory:(id) =>`${API}/api/${VERSION}/categories/${id}`,
        getCategoryWithProducts:(id) =>`${API}/api/${VERSION}/categories/${id}/products`,
    },

}