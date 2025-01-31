import axios from "axios";

export const deleteNews = async (newsId) => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/news/deleteNews/${newsId}`);
        alert("News deleted successfully!");
        return response.data;
    } catch (error) {
        console.error("Error deleting news:", error);
    }
};