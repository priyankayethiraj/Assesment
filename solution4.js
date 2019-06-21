class Calculator {
    constructor(a,b){
        
        this.a=a;
        this.b=b;
    }

    add(){
        console.log("Addition is :",this.a+this.b) 
    }
    sub(){
        console.log("subtraction is :",this.a-this.b) 
    }
    mul(){
        console.log("Multiplication is :",this.a*this.b) 
    }
    div(){
        console.log("Division is :",this.a/this.b) 
    }

}

let res=new Calculator(1,2)
res.add()
res.sub()
res.mul()
res.div()