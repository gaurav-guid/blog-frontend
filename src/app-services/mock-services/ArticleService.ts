import ArticleAsListItem from "../../models/ArticleAsListItem";

const mockArticlesAsListItemData: ArticleAsListItem[] = [
    { ArticleAsListItemGuid: '16c3dd8a-5dac-4ac8-993f-d5bac0ba75c6', Name: 'Imperativs vs Declarative style of writing code.', Author: 'Gaurav Kumar', WrittenOn: new Date(2021, 12, 15), TopicGuid: 'e34965ca-e6a1-4782-82f4-2be6e180407c' },
    { ArticleAsListItemGuid: 'b17ad1de-2059-41d7-8da4-0ea318d4be6c', Name: 'Is Mutation bad?', Author: 'Gaurav Kumar', WrittenOn: new Date(2021, 12, 20), TopicGuid: 'e34965ca-e6a1-4782-82f4-2be6e180407c' },
    { ArticleAsListItemGuid: '2d67adb8-d829-4e78-a315-62f90668bed3', Name: 'COde Smells', Author: 'Gaurav Kumar', WrittenOn: new Date(2022, 1, 1), TopicGuid: 'e34965ca-e6a1-4782-82f4-2be6e180407c' },
    { ArticleAsListItemGuid: '27315e1e-c5c0-4b57-ac65-f45b5e484614', Name: 'Parallel execution of code.', Author: 'Gaurav Kumar', WrittenOn: new Date(2021, 12, 19), TopicGuid: 'e34965ca-e6a1-4782-82f4-2be6e180407c' },
    { ArticleAsListItemGuid: 'f7b8733e-f50f-4dc3-b9bb-666be4a2ea66', Name: 'Object Oriented vs Functional style.', Author: 'Gaurav Kumar', WrittenOn: new Date(2021, 12, 11), TopicGuid: 'e34965ca-e6a1-4782-82f4-2be6e180407c' },
    { ArticleAsListItemGuid: '29bbcaae-1e8f-4396-8499-803c2c65b0ab', Name: 'CAP Theorem', Author: 'Gaurav Kumar', WrittenOn: new Date(2021, 8, 15), TopicGuid: '8c864be9-9e83-44ac-989a-8b408b89e343' },
    { ArticleAsListItemGuid: 'aaeada89-9f48-4db8-9098-b2297ec0e2d8', Name: 'Async vs Sync communication', Author: 'Gaurav Kumar', WrittenOn: new Date(2021, 10, 9), TopicGuid: '8c864be9-9e83-44ac-989a-8b408b89e343' },
    { ArticleAsListItemGuid: '6c139234-54c7-47fd-805a-30deb66174cc', Name: 'Handling Distributed Transactions', Author: 'Gaurav Kumar', WrittenOn: new Date(2021, 10, 10), TopicGuid: '8c864be9-9e83-44ac-989a-8b408b89e343' },
    { ArticleAsListItemGuid: 'de9803fb-3219-4d12-9418-97ed7aff6469', Name: 'Desired characterstics for distributed system members. (Idempotent, Immutable, Location Independent)', Author: 'Gaurav Kumar', WrittenOn: new Date(2021, 7, 7), TopicGuid: '8c864be9-9e83-44ac-989a-8b408b89e343' },
    // { ArticleAsListItemGuid: '', Name: '', Author: 'Gaurav Kumar', WrittenOn: new Date(2021, 12, 15), TopicGuid: '' },
    // { ArticleAsListItemGuid: '', Name: '', Author: 'Gaurav Kumar', WrittenOn: new Date(2021, 12, 15), TopicGuid: '' },
    // { ArticleAsListItemGuid: '', Name: '', Author: 'Gaurav Kumar', WrittenOn: new Date(2021, 12, 15), TopicGuid: '' },
    // { ArticleAsListItemGuid: '', Name: '', Author: 'Gaurav Kumar', WrittenOn: new Date(2021, 12, 15), TopicGuid: '' },
    // { ArticleAsListItemGuid: '', Name: '', Author: 'Gaurav Kumar', WrittenOn: new Date(2021, 12, 15), TopicGuid: '' },
    // { ArticleAsListItemGuid: '', Name: '', Author: 'Gaurav Kumar', WrittenOn: new Date(2021, 12, 15), TopicGuid: '' },
    // { ArticleAsListItemGuid: '', Name: '', Author: 'Gaurav Kumar', WrittenOn: new Date(2021, 12, 15), TopicGuid: '' },
    // { ArticleAsListItemGuid: '', Name: '', Author: 'Gaurav Kumar', WrittenOn: new Date(2021, 12, 15), TopicGuid: '' },
    // { ArticleAsListItemGuid: '', Name: '', Author: 'Gaurav Kumar', WrittenOn: new Date(2021, 12, 15), TopicGuid: '' }
]

export async function GetArticlesAsListItemsByTopicGuid(topicGuid: string) : Promise<ArticleAsListItem[]> {
    return mockArticlesAsListItemData.filter(item => item.TopicGuid === topicGuid)
}