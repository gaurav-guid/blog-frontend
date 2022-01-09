import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import Form from "react-bootstrap/esm/Form"
import { useLocation } from "react-router"
import { GetArticleByGuid } from "../app-services/mock-services/ArticleService"
import { GetAllTopics } from "../app-services/mock-services/TopicService"
import ArticleModel from "../models/ArticleModel"
import TopicModel from "../models/TopicModel"
import Collapsible from "./helper-components/Collapse"

const AddEditArticle : React.FC = () => {

    let location = useLocation()
    const params = new URLSearchParams(location.search)
    const [articleGuid, setArticleGuid] = useState(params.get("articleguid"))
    const [loadingArticle, setLoadingArticle] = useState(true)
    const [loadingTopics, setLoadingTopics] = useState(true)
    const [article, setArticle] = useState<ArticleModel>(null)
    const [topics, setTopics] = useState<TopicModel[]>(null)
    const [heading, setHeading] = useState("Add Article")
    if(articleGuid != params.get("articleguid")) {
        setArticleGuid(params.get("articleguid"))
    }

    useEffect(() => {
        GetArticleByGuid(articleGuid)
            .then((data: ArticleModel) => {
                setArticle(data)
                setLoadingArticle(false)
                setHeading(data.ArticleGuid != null ? "Edit Article " + data.Name : "Add Article")
            })
    }, [articleGuid])

    useEffect(() => {
        
        GetAllTopics()
            .then((result: TopicModel[]) => {
                setTopics(result)
                setLoadingTopics(false)
            })
    }, [])

    if(loadingArticle || loadingTopics) {
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
        <Container>
            <Row style={{ textAlign: "center" }}>
                <h3>{heading}</h3>
            </Row>
            <Row>
            <form>
            <div className="form-group">
                <label htmlFor="Name">Name / Heading</label>
                <input className="form-control"
                    id="Name"
                    type="text"
                />
            </div>
            <div className="form-group">
                <label htmlFor="Content">Content (in markdown format)</label>
                <textarea className="form-control"
                    id="Content"
                    onChange={(e) => setArticle({...article, Content: e.target.value})}
                    value={article.Content}
                />
            </div>
            <br />
            <Collapsible content={article.Content} ></Collapsible>
            <br /> 
            {/* DEBT: The above BR is not working as expected */}
            <div className="form-group">
                <label htmlFor="Author">Author</label>
                <input className="form-control"
                    id="Author"
                    type="text"
                />
            </div>
            <div className="form-group">
                <label htmlFor="Topic">Topic</label>
                <select id="Topic" className="form-control">
                    {
                        topics.map((item: TopicModel) => <option key={item.TopicGuid} value={item.TopicGuid}>{item.Name}</option>)
                    }
                </select>
            </div>
        </form>
            </Row>
        </Container>
    )
}

export default AddEditArticle