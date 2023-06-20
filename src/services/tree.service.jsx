import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const treeService = {

    show: (userId) => {
        return axios.get(baseUrl + "/trees/" + userId);
    },
    create:(data)=>{
        return axios.post(baseUrl + "/trees/", data)
    }
};
