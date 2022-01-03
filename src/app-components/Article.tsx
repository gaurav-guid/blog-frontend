import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { GetArticleByGuid } from "../app-services/mock-services/ArticleService";
import ArticleModel from "../models/ArticleModel";


const Article : React.FC = () => {
    let location = useLocation()
    let params = new URLSearchParams(location.search)

    const [loading, setLoading] = useState<boolean>(true)
    const [articleGuid, setArticleGuid] = useState<string>(params.get("articleguid"))
    const [article, setArticle] = useState<ArticleModel>(null)

    if(articleGuid != params.get("articleguid")) {
        setArticleGuid(params.get("articleguid"))
    }

    useEffect(() => {
        GetArticleByGuid(articleGuid)
            .then((data: ArticleModel) => {
                setArticle(data)
                setLoading(false)
            })
    }, [articleGuid])

    if(loading) {
        return(
            // DEBT: Make use of react-bootstrap spinner
            <>
                <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div style={{ textAlign: "center" }}><h3>{article.Name}</h3></div>
            <hr />
            {article.Content}
            <hr />
            Written by <b>{article.Author}</b> on <b>{article.WrittenOn.toDateString()}</b>
        </>
    )
}

export default Article;