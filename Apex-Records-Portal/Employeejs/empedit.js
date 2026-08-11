const editId = localStorage.getItem("editEmployeeId");
const employees = JSON.parse(localStorage.getItem("employees")) || [];
const emp = employees.find(e => e.id === editId);

if (emp) {
    document.getElementById("empid").value = emp.id;
    document.getElementById("empid").readOnly = true;
    document.getElementById("empname").value = emp.name;
    document.getElementById("dep").value = emp.department;
    document.getElementById("pos").value = emp.position;
}

document.getElementById("editform").addEventListener("submit", function (e) {
    e.preventDefault();

    if (!emp) return;

    emp.name = document.getElementById("empname").value.trim();
    emp.department = document.getElementById("dep").value.trim();
    emp.position = document.getElementById("pos").value.trim();

    localStorage.setItem("employees", JSON.stringify(employees));
    document.getElementById("mes").textContent = "Employee updated successfully!";
});