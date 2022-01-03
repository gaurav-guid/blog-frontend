
export default class ArticleModel {    //DEBT: Rename this to ArticleModel
    public ArticleGuid : string  //DEBT: use GUID data type instead.
    public Name : string
    public Content: string
    public Author : string
    public WrittenOn : Date
    public TopicGuid: string
}