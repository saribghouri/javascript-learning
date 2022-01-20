console.log("this is tutorial 30");
const proto = {
    slogan: function () {

        return ` inciter tech is the best`;
  },
  changeName: function (newName) {
    this.name = newName;
  },
};

let harry = Object.create(proto);
harry.name = "harry";
harry.role = "Programmer";
// harry.changeName("harry2")

const harry1 = Object.create(proto, {
  name: { value: "harry", writable: true },
  role: { value: "Programmer" },
});
harry1.changeName("Harry2");

function Employee(name, salary, experience) {
  this.name = name;
  this.salary = salary;
  this.experience = experience;
}
Employee.prototype.slogan = function () {
  return `this company is the best.Regards,${this.name}`;
};
let harryObj = new Employee("harry", 4515615, 45);
console.log(harryObj.slogan())

function Programmer(name,salary,experience,language){
    Employee.call(this, name, salary, experience);
    this.language = language;
}
let rohan = new Programmer("Rohan", 2,0, " javascript");
console.log(rohan);