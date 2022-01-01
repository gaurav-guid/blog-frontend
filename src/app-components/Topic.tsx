import { Badge, Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import TopicModel from "../models/TopicModel";


const Topic : React.FC<{topicModel: TopicModel}> = ({ topicModel }) => {
    return (
        <Card style={{ minWidth: '18rem', maxWidth: '18rem', marginTop: '10px', marginLeft: '5px', marginRight: '5px', border: '2px solid lightgray' }}>
            <Card.Body className="btn btn-secondary" style={{marginTop: '10px', marginBottom: '5px', marginLeft: '5px', marginRight: '5px'}}>
                <NavLink to={`/ArticleList?topicguid=${topicModel.TopicGuid}`} style={{ textDecoration: 'none' }}>
                    <h5 style={{ textDecoration: 'none', color: 'white' }}>{topicModel.Name}</h5>
                </NavLink>
            </Card.Body>
            <Card.Footer className="text-muted">10 articles</Card.Footer>
        </Card>
    )
}

export default Topic;
