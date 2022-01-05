import ArticleModel from "../../models/ArticleModel";

const mockArticles: ArticleModel[] = [
    { ArticleGuid: '16c3dd8a-5dac-4ac8-993f-d5bac0ba75c6', Content: "Declarative is good.", Name: 'Imperativs vs Declarative style of writing code.', Author: 'Gaurav Kumar', WrittenOn: new Date(2021, 12, 15), TopicGuid: 'e34965ca-e6a1-4782-82f4-2be6e180407c' },
    { ArticleGuid: 'b17ad1de-2059-41d7-8da4-0ea318d4be6c', Content: "Mutation should be restricted to certain parts of your application code.", Name: 'Is Mutation bad?', Author: 'Gaurav Kumar', WrittenOn: new Date(2021, 12, 20), TopicGuid: 'e34965ca-e6a1-4782-82f4-2be6e180407c' },
    { ArticleGuid: '2d67adb8-d829-4e78-a315-62f90668bed3', Content: "It smells bad.", Name: 'Code Smells', Author: 'Gaurav Kumar', WrittenOn: new Date(2022, 1, 1), TopicGuid: 'e34965ca-e6a1-4782-82f4-2be6e180407c' },
    { ArticleGuid: '27315e1e-c5c0-4b57-ac65-f45b5e484614', Content: "More time effecient code.", Name: 'Parallel execution of code.', Author: 'Gaurav Kumar', WrittenOn: new Date(2021, 12, 19), TopicGuid: 'e34965ca-e6a1-4782-82f4-2be6e180407c' },
    { ArticleGuid: 'f7b8733e-f50f-4dc3-b9bb-666be4a2ea66', Content: "Something to think about.", Name: 'Object Oriented vs Functional style.', Author: 'Gaurav Kumar', WrittenOn: new Date(2021, 12, 11), TopicGuid: 'e34965ca-e6a1-4782-82f4-2be6e180407c' },
    { ArticleGuid: '29bbcaae-1e8f-4396-8499-803c2c65b0ab', Content: "Consistance, Availability and Partition tolerence. New Line", Name: 'CAP Theorem', Author: 'Gaurav Kumar', WrittenOn: new Date(2021, 8, 15), TopicGuid: '8c864be9-9e83-44ac-989a-8b408b89e343' },
    { ArticleGuid: 'aaeada89-9f48-4db8-9098-b2297ec0e2d8', Content: "Fire and forget, less coupling.", Name: 'Async vs Sync communication', Author: 'Gaurav Kumar', WrittenOn: new Date(2021, 10, 9), TopicGuid: '8c864be9-9e83-44ac-989a-8b408b89e343' },
    { ArticleGuid: '6c139234-54c7-47fd-805a-30deb66174cc', Content: "Saga and Routing slip.", Name: 'Handling Distributed Transactions', Author: 'Gaurav Kumar', WrittenOn: new Date(2021, 10, 10), TopicGuid: '8c864be9-9e83-44ac-989a-8b408b89e343' },
    { ArticleGuid: 'de9803fb-3219-4d12-9418-97ed7aff6469', Content: "(Idempotent, Immutable, Location Independent)", Name: 'Desired characterstics for distributed system members. (Idempotent, Immutable, Location Independent)', Author: 'Gaurav Kumar', WrittenOn: new Date(2021, 7, 7), TopicGuid: '8c864be9-9e83-44ac-989a-8b408b89e343' },
]

export async function GetArticlesAsListItemsByTopicGuid(topicGuid: string) : Promise<ArticleModel[]> {
    return mockArticles
        .filter(item => item.TopicGuid === topicGuid)
        .map(item => {
            let article: ArticleModel = new ArticleModel()
            article.ArticleGuid = item.ArticleGuid
            article.Name = item.Name
            article.Content = null
            article.Author = item.Author
            article.WrittenOn = item.WrittenOn
            article.TopicGuid = item.TopicGuid
            return article
        })
}

export async function GetArticleByGuid(articleGuid: string) : Promise<ArticleModel> {
    return mockArticles.find(a => a.ArticleGuid === articleGuid)
}