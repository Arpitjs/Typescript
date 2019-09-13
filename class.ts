// class is group of  ---
// fields
// constructors
// methods

class Bands {
   public album: string = 'green day'
    genre: string = 'punk'
    constructor(){
        console.log('i am constructor block')
    }
     private welcome(name: string){
        return `welcome ${name}, ${this.album}`
    }
    protected goodbye(name: string){
        return this.welcome('arpit')
    }
}
//inheritance
class fans extends Bands{
    constructor(){
        super() //calling parents construtor
        
    }
} 
let song = new Bands() //instance 

//encapsulation -- data hiding mechansim using access specifiers
// acess specifiers -- private, public, protected
//private and protected cannot be accessed by the instances
//protected can be accessed by child class
//private cant be accessed by child class