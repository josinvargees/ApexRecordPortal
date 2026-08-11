const tbody = document.getElementById("employeeTable");
const searchInput = document.getElementById("sea");

function getEmployees() {
    return JSON.parse(localStorage.getItem("employees")) || [];
}

function renderEmployees(filter = "") {
    const employees = getEmployees();
    tbody.innerHTML = "";

    employees
        .filter(emp =>
            emp.name.toLowerCase().includes(filter.toLowerCase()) ||
            emp.id.includes(filter)
        )
        .forEach(emp => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.department}</td>
                <td>${emp.position}</td>
                <td>
                    <button class="edit" onclick="editEmployee('${emp.id}')">Edit</button>
                    <button class="delete" onclick="deleteEmployee('${emp.id}')">Delete</button>
                </td>
            `;
            tbody.appendChild(row);
        });
}

function editEmployee(id) {
    localStorage.setItem("editEmployeeId", id);
    window.location.href = "empedit.html";
}

function deleteEmployee(id) {
    if (!confirm("Delete this employee?")) return;

    const updated = getEmployees().filter(emp => emp.id !== id);
    localStorage.setItem("employees", JSON.stringify(updated));
    renderEmployees(searchInput.value);
}

function addEmployee() {
    window.location.href = "empadd.html";
}

searchInput.addEventListener("input", () => {
    renderEmployees(searchInput.value);
});

renderEmployees();

function viewProfile(id) {
    localStorage.setItem("profileEmployeeId", id);
    window.location.href = "empprofile.html";
}