import { useEffect, useState } from "react";
import { CardGroup, Container } from "react-bootstrap";
import { GetAllTopics } from "../app-services/mock-services/TopicService";
import TopicModel from "../models/TopicModel"
import Topic from "./Topic";

const HomePage = () => {

    const [topics, setTopics] = useState<TopicModel[]>(null)
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        GetAllTopics()
            .then((data: TopicModel[]) => {
                setTopics(data)
                setLoading(false)
            })
    }, [])

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
        <CardGroup style={{ display: 'flex', justifyContent: 'space-around' }}>
            { topics.map(t => <Topic key={t.TopicGuid} topicModel={t} />) }
        </CardGroup>
    )
}

export default HomePage;