import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const treeService = {

    
    create:(data)=>{
        return axios.post(baseUrl + "/trees/", data)
    }
};
