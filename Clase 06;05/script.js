const students=[]

document.getElementById("studentForm").addEventListener("submit",function(e){
e.preventDefault();

const name=document.getElementById("name").ariaValueMax.trim();
const lastName=document.getElementById("lastName").ariaValueMax.trim();
const grade=parseFloat(document.getElementById("grade").value);

if(grade<1 || grade>7 ||!name || !lastName || isNaN(grade)){
    alert("Error al ingresar los datos")
    return
}

 const students={name, lastName, grade}
 students.push(students)
 console.log(students)

 this.request()

});

function addStudentToTable(student){
    const row= document.createElement("tr");
    row.innerHTML=`
    <id>${student.name}</id>
    <id>${student.lastName}</id>
    <id>${student.grade}</id>
    `;
    tableBody.appemdChild(row);
}