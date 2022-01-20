console.log( "this is tutorial 31");
class Employee{
    constructor(  givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience= givenExperience;
        this.division= givenDivision;
    }
    slogan(){
        return ` I am ${this.name} and this company is the the best `
    }
    joiningYear(){
  return 2020 - this.experience;
    }
    static add(a,b){
          return a + b;
    }
    }
    class Programmer extends Employee{
       constructor(givenName, givenExperience, givenDivision, language, github){

           super(givenName ,givenExperience,givenDivision);
           this.language = language;
           this.github = github;
       }

       favoriteLanguage(){
          if(this.language == 'python'){
         return'python';
          }
     else{
         return'javaScript';
     }
     
     }
     static multiply(a, b){
        return a *b;
  }
    }
sarib = new Programmer('shariq', 3,"lays","go","shariq420")
console.log(sarib)
console.log(sarib.favoriteLanguage())

console.log(Programmer.multiply(5,7))
// harry = new Employee("harry",56,  "Division");
// console.log(harry);

// console.log(harry.joiningYear());