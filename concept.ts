//TS = superset of JS
let a: String
a = 'abc'
// a  = 1 NOT POSSIBLE

// datatypes
//string, number, boolean, null, undefined, any
// loops, conditionals -- same as JS
// es6 -- for OF loop

// code base --- CLASS

// to convert ts file into js -- tsc <file_name>

//array
let fruits: Array<string> 
let cars: string[];
fruits.push('dshjdh', '1')
cars.push('sdbksb')

//object
//interface is a collection of keyvalue pair that define obj
interface a{
    sender: string,
    reciever: string,
    subject: string,
    phone: number,
    status: boolean
}
function sendMail(details:a){

}
sendMail({
    sender: 'djnsd',
    reciever: 'df',
    subject: 'dsdsd0',
    phone: 1,
    status: false
})

//function
function welcome(name: string){
    return `welcome ${name}`
}
let res = welcome('dnskjjd')
console.log(res)

