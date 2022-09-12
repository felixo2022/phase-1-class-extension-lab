// Your code here
class Polygon{
    constructor(array){
        this.array = array;
    }
    get countSides(){
        return this.array.length
    }
    get perimeter(){
       return this.array.reduce((a,b)=>a+b)
    }
}
class Triangle extends Polygon{
    constructor(array){
        super(array)
    }
    get isValid(){
        if (((this.array[0]<(this.array[1])+this.array[2])) && this.array.length==3){
            return true
        }
        else{return false}
    }
}

class Square extends Polygon{
    constructor(array){
        super(array)
    }
    get area(){
        return this.array[0]*this.array[0]
    }
    get isValid(){
        if(this.array.length==4 && (this.array[0]==this.array[1])&&(this.array[0]==this.array[2])&&(this.array[0]==this.array[3])){
            return true
        }
        else{return false}
    }
}