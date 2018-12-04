//write your code here to make the tests pass
class Document{
    constructor(EmployeeName){
        this.EmployeeName = EmployeeName;
    }
}

class Employee{
    constructor(name){
        this.name = name;
    }

    work(office){
        for(let i =0;i < 10; i++){
            office.documents.push(new Document(this.name)) 
        }
    }
}

class Manager{
    constructor(name){
        this.employees = [];
        this.name = name;
    }

    hireEmployee(name){
        const newEmployee = new Employee;
        newEmployee.name = name;
        this.employees.push(newEmployee);
    }

    askEmployeesToWork(office){
        this.employees.forEach(e => 
        e.work(office)
        );
    }
}

class Cleaner{
    constructor(name){
        this.name = name;
    }

    clean(){
        console.log("Clean")
    }
}

class Office{
    constructor(){
        this.documents = [];
        this.managers = [];
        this.cleaners = [];
    }

    hireCleaner(name){
        const newCleaner = new Cleaner;
        newCleaner.name = name;
        this.cleaners.push(newCleaner);
    }

    hireManager(name){
        const newManager = new Manager;
        newManager.name = name;
        this.managers.push(newManager);
    }

    startWorkDay(){
        this.managers.forEach(m => 
        m.askEmployeesToWork(this)
        );
    }

}