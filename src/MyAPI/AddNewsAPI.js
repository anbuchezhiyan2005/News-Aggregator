import axios from 'axios';
const API_URL = "http://localhost:5000/api/news/addNews"

export const addNews = async (news) => {
    const newsData = {
        Title: news.Title,
        Info: news.Info,
        Link: news.Link
    }
    try {
        const response = await axios.post(API_URL, newsData)
        console.log(response)
        return response
    }
    catch(err) {
        console.error("Error creating employee: ", err)
        throw err
    }
}