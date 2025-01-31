import {useState} from "react"
import {addNews} from "../MyAPI/AddNewsAPI"
export default function AddNews() {
    const[NewsID, setNewsId] = useState("")
    const[NewsTitle, setNewsTitle] = useState("")
    const[NewsInfo, setNewsInfo] = useState("")
    const[NewsLink, setNewsLink] = useState("")

    const handleAddNews = () => {

        const newsData = {
            Title: NewsTitle,
            Info: NewsInfo,
            Link: NewsLink,
        };

        addNews(newsData); 
    };

    return (
        <div>
            <h1>Add News!</h1>
            <div>
                <input 
                    type="text" 
                    placeholder="News Title" 
                    value={NewsTitle}
                    onChange={(e) => setNewsTitle(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="News Info" 
                    value={NewsInfo}
                    onChange={(e) => setNewsInfo(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="News Link" 
                    value={NewsLink}
                    onChange={(e) => setNewsLink(e.target.value)}
                />
                <button onClick={handleAddNews}>Add News</button>
            </div>
        </div>
        
    )
}

