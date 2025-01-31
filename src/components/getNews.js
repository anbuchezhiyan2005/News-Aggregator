import { useState, useEffect } from "react"
import { fetchNews } from "../MyAPI/API"
import { Link } from "react-router-dom"

const GetNews = () => {
    const [News, setNews] = useState([])

    useEffect(() => {
        const loadNews = async () => {
            const {data} = await fetchNews()
            console.log(data)
            setNews(data)
        }
        loadNews()
    }, [])

    return (
        <>
            <h1>Saved News!</h1>
            <ul>
                {News.map(News => (
                    <li key={News.id} className="news__item">
                        <div className="news">
                            <h1 className="news__title">{News.Title}</h1>
                            <p className="news__desc">{News.Info}</p>
                            <span className="news__source"><a href={News.Link}>Read More</a></span>||
                            <Link to={`/UpdateMyNews/${News._id}`}>Edit</Link>||
                            <Link to={`/DeleteMyNews/${News._id}`}>Remove</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default GetNews
