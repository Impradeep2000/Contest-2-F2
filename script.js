const students = [
  {
    ID: 1,
    name: 'Alice',
    email: 'alice@example.com',
    gpa: 9.36,
    age: 21,
    degree: 'Btech'
  },
  {
    ID: 2,
    name: 'Bob',
    age: 22,
    gpa: 7.25,
    degree: 'MBA',
    email: 'bob@example.com'
  },
  {
    ID: 3,
    name: 'Charlie',
    age: 20,
    gpa: 6.25,
    degree:'Arts',
    email: 'charlie@example.com'
  }
]; 

function renderStudents(stu){
  const tbody = document.getElementById("tbody");
  tbody.innerHTML="";

  if(stu.length>0){
    for(let i=0;i<stu.length;i++){
      const student = stu[i];
      const row = document.createElement("tr");
      row.innerHTML="<td>" + student.ID + "</td>" +
      "<td>" + student.name + "</td>" +
      "<td>" + student.email + "</td>" +
      "<td>" + student.age + "</td>" +
      "<td>" + student.gpa + "</td>" +
      "<td>" + student.degree + "</td>";
      tbody.appendChild(row);
  }
  }
  else{
    const row = document.createElement("tr");
    row.innerHTML="<h2 style='text-align:center;x`'>No Record Found</h2>";
    tbody.appendChild(row);
  }

}
renderStudents(students);

const itemForm = document.getElementById("itemForm");
const Name = document.getElementById("name");
const Email = document.getElementById("email");
const GPA = document.getElementById("gpa");
const AGE = document.getElementById("age");
const Degree = document.getElementById("degree");
const itemList = document.getElementById("tbody");


itemForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const GetName = Name.value;
    const GetEmail = Email.value;
    const GetGPA = GPA.value;
    const GetAGE = AGE.value;
    const GetDegree = Degree.value;

    const newStudent = {
      ID:students.length+1,
      name:GetName,
      email:GetEmail,
      gpa:GetGPA,
      age:GetAGE,
      degree:GetDegree
  };

  students.push(newStudent);
  renderStudents(students);

    Name.value = ""; 
    Email.value = "";
    GPA.value = "";
    AGE.value = "";
    Degree.value = "";

});

const inputSearch = document.getElementById("search");
inputSearch.addEventListener("keyup",function(){
  const searchResult = inputSearch.value;
  filterInput(searchResult);
});

function filterInput(searchResult){
  const searchedStudents=[];
  const query = searchResult.toLowerCase();
console.log("query",query);
  for(let i=0;i<students.length;i++){
      const student = students[i];
      if(student.name.toLowerCase().includes(query) ||
      student.email.toLowerCase().includes(query) ||
      student.degree.toLowerCase().includes(query)){
          searchedStudents.push(student);
      }
  }
  renderStudents(searchedStudents);
}