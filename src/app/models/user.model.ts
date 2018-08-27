export class User{
   
    constructor(
        public username : string, 
        public password? : string, 
        public firstName? : string, 
        public lastName? : string, 
        public email? : string, 
        public active? : boolean, 
        public id? : number
    ){ }
    
}

