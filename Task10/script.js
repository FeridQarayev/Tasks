// class Car{
//     constructor(name,brand){
//         this.name=name,
//         this.brand=brand
//     }
//     get GetAll(){
//         return `Masin-${this.name} Brand-${this.brand}`;
//     }
// }

// class SUV extends Car{
//     constructor(name,brand,pelaceCount,length){
//         super(name,brand)
//         this.pelaceCount=pelaceCount,
//         this.length=length
//     }
// }

// class Sedan extends Car{
//     constructor(name,brand,pelaceCount,length){
//         super(name,brand)
//         this.pelaceCount=pelaceCount,
//         this.length=length
//     }
// }
// Car.prototype.GetInfo=function(){
//     return `Masin-${this.name} Brand-${this.brand}`;
// }

// let a=new Car("vetnamnka","nike")

// console.log(new SUV("daska","ofisait",20,15))
// console.log(new Sedan("velsiped","sport",25,1))


// console.log(a.GetAll)
// console.log(a.GetInfo())

// let a= prompt('Enter 1')
// let b=prompt('Enter 2')

// a=(a+b)-a;
// b=(a+b)-b;


// console.log(`number1 ${b} number2 ${a}`)

let addStudent=document.getElementById('addStudent');
let addTeacher=document.getElementById('addTeacher');
let getStudents=document.getElementById('getStudents');
let getTeacher=document.getElementById('getTeacher');


class Person{
    constructor(name,surname,dateOfBirth){
        this.name=name,
        this.surname=surname,
        this.dateOfBirth=dateOfBirth
    }
}

class Teacher extends Person{
    constructor(name,surname,dateOfBirth,subject){
        super(name,surname,dateOfBirth)
            this.subject=subject   
    }
}
class Student extends Person{
    constructor(name,surname,dateOfBirth,average){
        super(name,surname,dateOfBirth)
            this.average=average
    }
}

var Teachers=[]
var Students=[]

let teacherTable=document.getElementById('teacherTable');
let studentTable=document.getElementById('studentTable');


addStudent.addEventListener('click',function(){
    let nameP=prompt('Enter name')
    let surnameP=prompt('Enter surname')
    let dateOfBirthP=prompt('Enter date of birth')
    let average=prompt('Enter average')
    let student=new Student(nameP,surnameP,dateOfBirthP,average)
    Students.push(student)

    let row= `<tr>
        <td>${nameP}</td>
        <td>${surnameP}</td>
        <td>${dateOfBirthP}</td>
        <td>${average}</td>
    </tr>`
    studentTable.innerHTML+=row;
})

addTeacher.addEventListener('click',function(){
    let nameP=prompt('Enter name')
    let surnameP=prompt('Enter surname')
    let dateOfBirthP=prompt('Enter date of birth')
    let subject=prompt('Enter subject')
    let teacher=new Teacher(nameP,surnameP,dateOfBirthP,subject)
    Teachers.push(teacher)

    let row= `<tr>
        <td>${nameP}</td>
        <td>${surnameP}</td>
        <td>${dateOfBirthP}</td>
        <td>${subject}</td>
    </tr>`
    teacherTable.innerHTML+=row;
})

getStudents.addEventListener('click',()=>{
    console.log(Students)
})
getTeacher.addEventListener('click',()=>{
    console.log(Teachers)
})