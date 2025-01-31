import { useState } from "react";
import { updateNews } from "../MyAPI/UpdateNewsAPI"; 
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function UpdateNews() {
    const [updatedTitle, setUpdatedTitle] = useState("");
    const [updatedInfo, setUpdatedInfo] = useState("");
    const [updatedLink, setUpdatedLink] = useState("");
    const { ID } = useParams();
    const navigate = useNavigate();

    const handleUpdateNews = async() => {
        const updatedData = {   
            Title: updatedTitle,
            Info: updatedInfo,
            Link: updatedLink
        };

        await updateNews(ID, updatedData); 
        navigate('/getMyNews'); 
    };

    return (
        <div>
            <h1>Update News</h1>
            <div>
                <input 
                    type="text" 
                    placeholder="Updated News Title" 
                    value={updatedTitle}
                    onChange={(e) => setUpdatedTitle(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Updated News Info" 
                    value={updatedInfo}
                    onChange={(e) => setUpdatedInfo(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Updated News Link" 
                    value={updatedLink}
                    onChange={(e) => setUpdatedLink(e.target.value)}
                />
                <button onClick={handleUpdateNews}>Update News</button>
            </div>
        </div>
    );
}