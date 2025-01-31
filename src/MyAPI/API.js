import axios from 'axios';
const API_URL = "http://localhost:5000/api/news/getNews"
export const fetchNews = async () => {
    try {
        const response = await axios.get(API_URL)
        return response
    }
    catch(err) {
        console.error("Error fetching News: ", err)
        throw err
    }
}



