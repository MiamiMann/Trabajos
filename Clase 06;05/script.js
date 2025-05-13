const students = [];

document.getElementById("studentform").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const grade = parseFloat(document.getElementById("grade").value);

    if (grade < 1 || grade > 7 || !name || !lastname || isNaN(grade)) {
        alert("Error al ingresar los datos. Verifica que todos los campos sean válidos.");
        return;
    }

    const student = { name, lastname, grade };
    students.push(student);

    addStudentToTable(student); // Agregar el estudiante a la tabla
    calculateAverage(); // Calcular el promedio general

    this.reset(); // Limpiar el formulario
});

const tablebody = document.querySelector("#studenttable tbody");

function addStudentToTable(student) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.lastname}</td>
        <td>${student.grade.toFixed(2)}</td>
    `;
    tablebody.appendChild(row);
}

function calculateAverage() {
    if (students.length === 0) {
        promedio.textContent = "0.00";
        return;
    }
    const total = students.reduce((sum, student) => sum + student.grade, 0);
    const average = (total / students.length).toFixed(2);
    promedio.textContent = average; // Mostrar el promedio en el elemento con ID "average"
}
