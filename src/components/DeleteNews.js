import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteNews } from "../MyAPI/DeleteNewsApi";

export default function DeleteNews() {
    const { ID } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const handleDeleteNews = () => {
            deleteNews(ID);
            navigate('/getMyNews'); 
        };

        handleDeleteNews();
    }, [ID, navigate]);

    return (
        <div>
            <h1>Deleting News...</h1>
        </div>
    );
}