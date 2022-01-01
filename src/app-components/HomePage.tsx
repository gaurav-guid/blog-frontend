import { CardGroup, Container } from "react-bootstrap";
import TopicModel from "../models/TopicModel"
import Topic from "./Topic";

const HomePage = () => {

    const topics: TopicModel[] = [
        { TopicGuid : "e34965ca-e6a1-4782-82f4-2be6e180407c", Name : "General coding tips", Description : "" },
        { TopicGuid : "64c545d9-c687-45a3-b338-a9b1cd28df5c", Name : "Data Structures", Description : "" },
        { TopicGuid : "1076bd95-5af3-4094-81b4-a2a8286983a7", Name : "Algorithms", Description : "" },
        { TopicGuid : "729e304d-9cea-4b96-95bd-00c1471edc91", Name : "OOP concepts", Description : "" },
        { TopicGuid : "280f072c-6ac0-4f0d-aefc-d0fbc4c6489e", Name : "Design Patterns", Description : "" },
        { TopicGuid : "8c864be9-9e83-44ac-989a-8b408b89e343", Name : "Distributed Systems", Description : "" },
        { TopicGuid : "df2f25b5-ac0f-4fc8-96fe-55747a2e832e", Name : "Web development concepts", Description : "" },
        { TopicGuid : "61e1000f-19fc-4cb8-9838-5a70be36fd50", Name : "Frontend technologies", Description : "" },
        { TopicGuid : "22de9c73-1def-4e8e-8e95-87aa533eb4c8", Name : "RDBMS", Description : "" }
    ]
    return (
        <CardGroup style={{ display: 'flex', justifyContent: 'space-around' }}>
            { topics.map(t => <Topic key={t.TopicGuid} topicModel={t} />) }
        </CardGroup>
    )
}

export default HomePage;