import axios from "@/helpers/httpHelper";

export const getBlogsByCategory = async (category, page = 1, limit = 10) => await new Promise((resolve, reject) => {
    axios
        .get(`/blog/get-all?page=${page}&limit=${limit}&${category ? `tag=${category}` : ""}`)
        .then((response) => {
            resolve(response);
        })
        .catch(reject);
});