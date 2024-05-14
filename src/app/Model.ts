export class Model {
    user;
    İtems;
    constructor(){
      this.user = "Abdullah"
      this.İtems = [
        new TodoItem("Spor", true),
        new TodoItem("Kahvaltı", true),
        new TodoItem("Kitap", false),
        new TodoItem("Sinema", false)
      ];
    }
   }
  
   export class TodoItem {
    description: string;
    action: boolean;
    constructor(description: string, action: boolean){
      this.description = description;
      this.action = action;
    }
   }