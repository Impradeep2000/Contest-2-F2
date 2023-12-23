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

let editingStudent = null;

function renderStudents(stu){
  const tbody = document.getElementById("tbody");
  tbody.innerHTML="";

  if(stu.length>0){
    for(let i=0;i<stu.length;i++){
      const student = stu[i];
      const row = document.createElement("tr");
      row.innerHTML=`<td>  ${student.ID}  </td> 
      <td>  ${student.name}  </td> 
      <td>  ${student.email}  </td> 
      <td>  ${student.age}  </td> 
      <td>  ${student.gpa}  </td>
      <td>  <div class="degree">
              <span>${student.degree}</span>
              <div>
                <span><i class="icon fa-solid fa-pen-to-square"></i></span>
                <span><i class="icon fa-solid fa-trash"></i></span>
              </div> 
            </div>
          </td>`
      tbody.appendChild(row);
  }
  
  const editIcons = document.querySelectorAll('.fa-pen-to-square');
    editIcons.forEach(icon => {
        icon.addEventListener('click', function () {
                const rowToEdit = this.closest('tr');
                const studentID = parseInt(rowToEdit.querySelector('td:first-child').textContent);
                const studentToEdit = students.find(student => student.ID === studentID);

                if (studentToEdit) {
                    // Set the currently editing student
                    editingStudent = studentToEdit;

                    // Populate input fields with the details of the selected student
                    Name.value = studentToEdit.name;
                    Email.value = studentToEdit.email;
                    GPA.value = studentToEdit.gpa;
                    AGE.value = studentToEdit.age;
                    Degree.value = studentToEdit.degree;

                    // Change button text to "Edit Student"
                    document.getElementById('addStudent').style.display = "none";
                    document.getElementById('edit').style.display = "block";
                }
      });
  });


  const deleteIcons = document.querySelectorAll('.fa-trash');
        deleteIcons.forEach(icon => {
            icon.addEventListener('click', function () {
                const rowToDelete = this.closest('tr');
                const studentID = parseInt(rowToDelete.querySelector('td:first-child').textContent);
                deleteStudent(studentID);
            });
        });
  }
  else{
    const row = document.createElement("tr");
    row.innerHTML="<h2 style='text-align:center;x`'>No Record Found</h2>";
    tbody.appendChild(row);
  }

}
const editStudents=document.getElementById('edit');
  editStudents.addEventListener("click",function(e){
    e.preventDefault()
    console.log("editStudent");
    students.forEach(element => {
      if(element.ID===editingStudent.ID) {
       element.name=document.getElementById("name").value;
       element.age=document.getElementById("age").value;
       element.email=document.getElementById("email").value;
       element.degree=document.getElementById("degree").value;
       element.gpa=document.getElementById("gpa").value;
  }});
  renderStudents(students);
  document.getElementById('addStudent').style.display = "block";
  document.getElementById('edit').style.display = "none";
  Name.value = ""; 
    Email.value = "";
    GPA.value = "";
    AGE.value = "";
    Degree.value = "";
  });

renderStudents(students);
function updateTableRow(row, student) {
  row.querySelector('td:nth-child(2)').textContent = student.name;
  row.querySelector('td:nth-child(3)').textContent = student.email;
  row.querySelector('td:nth-child(4)').textContent = student.age;
  row.querySelector('td:nth-child(5)').textContent = student.gpa;
  row.querySelector('td:nth-child(6) span').textContent = student.degree;
}
const itemForm = document.getElementById("itemForm");
const Name = document.getElementById("name");
const Email = document.getElementById("email");
const GPA = document.getElementById("gpa");
const AGE = document.getElementById("age");
const Degree = document.getElementById("degree");
const itemList = document.getElementById("tbody");


document.getElementById('addStudent').addEventListener("click", function (event) {
  console.log("added")
  event.preventDefault();
    const GetName = Name.value;
    const GetEmail = Email.value;
    const GetGPA = GPA.value;
    const GetAGE = AGE.value;
    const GetDegree = Degree.value;
    
    if(GetName==="" || GetEmail==="" || GetDegree==="" || GetAGE==="" || GetGPA===""){
      alert("All fields required!");
      return
    }

    const newStudentID = calculateNewStudentID();

    const newStudent = {
      ID:newStudentID,
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

function calculateNewStudentID() {
  const existingIDs = students
        .map(student => student.ID)
        .filter(id => typeof id === 'number' && !isNaN(id));

    if (existingIDs.length === 0) {
        // If no numeric IDs found, start with ID 1
        return 1;
    }

    const maxID = Math.max(...existingIDs);
    return maxID + 1;

}

function deleteStudent(studentID) {
  const index = students.findIndex(student => student.ID === studentID);

  if (index !== -1) {
      students.splice(index, 1);
      renderStudents(students);
  }
}
