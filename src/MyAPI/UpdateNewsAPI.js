import axios from "axios";

export const updateNews = async (newsId, updatedData) => {
    try {
        const response = await axios.put(`http://localhost:5000/api/news/updateNews/${newsId}`, updatedData);
        alert("News updated successfully!");
        return response.data;
    } catch (error) {
        console.error("Error updating news:", error);
        alert("Failed to update news. Try again.");
    }
};
