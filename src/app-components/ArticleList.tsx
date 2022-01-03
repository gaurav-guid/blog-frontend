import { useEffect, useState } from "react";
import { Card, Row } from "react-bootstrap";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { GetArticlesAsListItemsByTopicGuid } from "../app-services/mock-services/ArticleService";
import ArticleModel from "../models/ArticleModel";

const ArticleList : React.FC = () => {

    let location = useLocation();
    const params = new URLSearchParams(location.search)
    const [topicGuid, setTopicGuid] = useState(params.get("topicguid"))

    const [articleListItems, setArticleListItems] = useState<ArticleModel[]>(null)
    const [loading, setLoading] = useState<boolean>(true)

    if(topicGuid != params.get("topicguid")) {
        setTopicGuid(params.get("topicguid"))
    }

    useEffect(() => {
        GetArticlesAsListItemsByTopicGuid(topicGuid)
            .then((data: ArticleModel[]) => {
                setArticleListItems(data)
                setLoading(false)
            })
    }, [topicGuid])

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
        <div>
            {
                articleListItems.map(item =>
                    <Card key={item.ArticleGuid} style={{ marginTop: '10px', marginLeft: '5px', marginRight: '5px', border: '2px solid lightgray' }}>
                        <Card.Body className="btn btn-secondary" style={{marginTop: '10px', marginBottom: '5px', marginLeft: '5px', marginRight: '5px', textAlign: "left"}}>
                            <NavLink to={`/Article?articleguid=${item.ArticleGuid}`} style={{ textDecoration: 'none' }}>
                                <h5 style={{ textDecoration: 'none', color: 'white' }}>{item.Name}</h5>
                            </NavLink>
                        </Card.Body>
                    <Card.Footer className="text-muted">Written by <b>{item.Author}</b> on <b>{item.WrittenOn.toDateString()}</b></Card.Footer>
                </Card>
                )
            }
        </div>
    )
}

export default ArticleList;