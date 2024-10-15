class Student{
    constructor(){
        this.id=101;
        this.name='Ajay'
    }    
    showDetails(){
        console.log(this.id+" "+this.name)
    }
    displayInfo(){
        console.log("this is displaying method");
    }
}
let s=new Student();
s.showDetails();
s.displayInfo();