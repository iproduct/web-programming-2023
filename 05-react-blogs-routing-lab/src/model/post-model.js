export class Post {
    constructor(title='', content='', tags = [], imageUrl='', author='', active = true){
        this.title = title;    
        this.content = content;    
        this.tags = tags;    
        this.imageUrl = imageUrl;    
        this.author = author;    
        this.active = active;    
    }
}