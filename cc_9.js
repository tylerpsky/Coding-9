//Task 1

class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }

    getDetails() {
        return `Employee: ${this.name},
        ID: ${this.id},
        Department: ${this.department},
        Salary: $${this.salary}`;
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); 

console.log(emp1.calculateAnnualSalary()); 

//Task 2

class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }

    getDetails() {
        return `Employee: ${this.name}, 
        ID: ${this.id}, Department: 
        ${this.department}, 
        Salary: $${this.salary}`;
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize;
    }

    getDetails() {
        return `Manager: ${this.name}, 
        ID: ${this.id}, 
        Department: ${this.department}, 
        Salary: $${this.salary}, 
        Team Size: ${this.teamSize}`;
    }

    calculateBonus() {
        return this.calculateAnnualSalary() * 0.1;
    }
}

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());

console.log(mgr1.calculateBonus()); 

//Task 3

class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }

    getDetails() {
        return `Employee: ${this.name}, 
        ID: ${this.id}, 
        Department: ${this.department}, 
        Salary: $${this.salary}`;
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize;
    }

    getDetails() {
        return `Manager: ${this.name}, 
        ID: ${this.id}, 
        Department: ${this.department}, 
        Salary: $${this.salary}, 
        Team Size: ${this.teamSize}`;
    }

    calculateBonus() {
        return this.calculateAnnualSalary() * 0.1;
    }
}

class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        this.employees.forEach(emp => console.log(emp.getDetails()));
    }
}

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);

const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();


//Task 4

class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }

    getDetails() {
        return `${this.constructor.name}: ${this.name}, 
        ID: ${this.id}, 
        Department: ${this.department}, 
        Salary: $${this.salary}`;
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize;
    }

    getDetails() {
        return `${super.getDetails()}, Team Size: ${this.teamSize}`;
    }

    calculateAnnualSalary() {
        return super.calculateAnnualSalary() * 1.1;
    }
}

class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        this.employees.forEach(emp => console.log(emp.getDetails()));
    }

    calculateTotalPayroll() {
        return this.employees.reduce((total, emp) => total + emp.calculateAnnualSalary(), 0);
    }
}

const company = new Company("TechCorp");
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);

company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();

console.log(company.calculateTotalPayroll()); 


