// STUDENT OBJECT

let student = {
    name: "Kirana G V",
    college: "Cambridge Institute of Technology North Campus",
    branch: "Computer Science",
    year: "Final Year",
    skills: "JavaScript, React, AI",

    displayDetails: function () {
        console.log("----- Student Details -----");
        console.log("Name: " + this.name);
        console.log("College: " + this.college);
        console.log("Branch: " + this.branch);
        console.log("Year: " + this.year);
        console.log("Skills: " + this.skills);
    }
};

student.displayDetails();


// EMPLOYEE OBJECT

let employee = {
    name: "Ravi Kumar",
    company: "Tech Solutions",
    role: "Software Developer",
    salary: 60000,
    experience: "2 Years",

    showEmployeeInfo: function () {
        console.log("----- Employee Details -----");
        console.log("Name: " + this.name);
        console.log("Company: " + this.company);
        console.log("Role: " + this.role);
        console.log("Salary: " + this.salary);
        console.log("Experience: " + this.experience);
    }
};

employee.showEmployeeInfo();


// PRODUCT OBJECT

let product = {
    productName: "Laptop",
    brand: "Dell",
    price: 80000,
    category: "Electronics",
    stock: 25,

    showProductDetails: function () {
        console.log("----- Product Details -----");
        console.log("Product Name: " + this.productName);
        console.log("Brand: " + this.brand);
        console.log("Price: " + this.price);
        console.log("Category: " + this.category);
        console.log("Stock Available: " + this.stock);
    }
};

product.showProductDetails();