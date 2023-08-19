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

  function renderStudents(){
    const tbody = document.getElementById("tbody");
    tbody.innerHTML="";

    for(let i=0;i<students.length;i++){
        const student = students[i];
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
  renderStudents();

    const addbtn = document.getElementById("addStudent");
    addbtn.addEventListener('click',() => {
        addStudent();
    });

  function addStudent(){
    const name= getElementById("name").value;
    const email = getElementById("email").value;
    const gpa = parseFloat(getElementById("gpa").value);
    const age = parseInt(getElementById("age").value);
    const degree = getElementById("degree").value;

    const newStudent = {
        ID:students.length+1,
        name:name,
        age:email,
        gpa:gpa,
        age:age,
        degree:degree
    };

    students.push(newStudent);
    renderStudents();
  }

  const input = document.getElementById("search");
  input.addEventListener('input',function(){
    const searchResult = input.value;
    filterInput(searchResult);
  });

  function filterInput(searchResult){
    const searchedStudents=[];
    const query = searchResult.toLowerCase();

    for(let i=0;i<students.length;i++){
        const student = students[i];
        if(student.name.toLowerCase().includes(query) ||
        student.email.toLowerCase().includes(query) ||
        student.degree.toLowerCase().includes(query)){
            searchedStudents.push(student);
        }
    }
    renderStudents(filterInput);
  }