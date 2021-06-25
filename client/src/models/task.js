class Task {
    constructor({id,isCompleted,title,description}){
        this.id = id;
        this.isCompleted = isCompleted;
        this.title = title;
        this.description = description;
    }
    static fromJson(json){
        return new this({id:json._id,isCompleted:json.isCompleted,title:json.title, description:json.description})
    }
    toJSON(){
        return JSON.stringify({
            _id:this.id,
            isCompleted:this.isCompleted,
            title : this.title,
            description: this.description
        })
    }
}
export default Task