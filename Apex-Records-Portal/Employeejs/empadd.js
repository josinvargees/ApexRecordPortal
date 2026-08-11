document.getElementById("empform").addEventListener("submit", function (e) {
    e.preventDefault();

    const employees = JSON.parse(localStorage.getItem("employees")) || [];

    const employee = {
        id: document.getElementById("empid").value.trim(),
        name: document.getElementById("empname").value.trim(),
        department: document.getElementById("dep").value.trim(),
        position: document.getElementById("pos").value.trim()
    };

    if (employees.some(emp => emp.id === employee.id)) {
        document.getElementById("mes").textContent = "Employee ID already exists.";
        return;
    }

    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));

    document.getElementById("mes").textContent = "Employee added successfully!";
    this.reset();
});