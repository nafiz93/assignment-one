
//problem 1


const multiplyValue=(firstNumber:number,multiplier:number=2)=>{

    const result:number=firstNumber*multiplier;

    return result;
}

console.log(multiplyValue(10,5))





//Problem 2

const processInput=(value:string|number|boolean)=>{

    if(typeof value==="string"){

       return (value.toLowerCase().trim());
    }

    if(typeof value ==="number"){

        return (value*10)
    }

    if(value===true){

        return ("Active")
    }

    if(value===false){
        return ("Inactive")
    }


}



console.log(processInput("  TypeScript  "));
console.log(processInput(false))



//problem 3

const formatCoordinate=(cityDetails: readonly[latitude:number,longitude:number,locationName:string])=>{

   
    const formatString=`"Location:${cityDetails[2]} (${cityDetails[0]},${cityDetails[1]})"`;
    return formatString


}

formatCoordinate([23.81, 90.41, "Mymensingh"])


//problem 4

const concatenateArrays=<T>(...arrays:T[][])=>{

    let combineArray:T[]=[];
    for(let array of arrays){
        combineArray=[...combineArray,...array]
    }
     return combineArray;
}

console.log(concatenateArrays(["a", "b"], ["c", "d"]))

//problem 5

interface course{

    title:string,
    students:number,
    isPublished:boolean
}

const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

const getPopularCourses=(array:course[],minStudents:number)=>{

      const result=   array.filter(element=>element.isPublished===true && element.students>=minStudents);
      return result;
}

getPopularCourses(courses, 80)

//problem 6

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];

const pluckValues=<T extends object, K extends keyof T>(items:T[],key:K)=>{

      const result= items.map(item=>item[key]);
      return result;

}

(pluckValues(users, "name"));
(pluckValues(users, "id"))




//problem 7

 class Employee{

    protected name:string;
    private baseSalary:number;

    constructor(name:string,baseSalary:number){
        this.name=name;
        this.baseSalary=baseSalary;
    }

    getDetails():string{
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee{

    private department:string;

    constructor(name:string,baseSalary:number,department:string){
        super(name,baseSalary);

        this.department=department
    }

    getRoleInfo():string{
        return `Manager of ${this.department}: ${this.name}`
    }
}


const manager = new Manager("Alice", 50000, "Engineering");

manager.getDetails()
manager.getRoleInfo()




 






//problem 8


const validateAgeAsync=(age:number):Promise<string>=>{


    return new Promise<string>((resolve,reject)=>{

        if(age >= 18){

            setTimeout(() => {
                resolve("Access granted")
            }, 1000);
        }

        else{
            reject(new Error("Access Denied: Must be 18 or older"))
        }
    })
}

const showNumber=async():Promise<void>=>{

    try{

        const result=await validateAgeAsync(20);

        console.log(result)
    }

    catch(error){
        console.log(error)
    }
}


showNumber()
