const employees = JSON.parse(localStorage.getItem("employees")) || [];

document.getElementById("temp").textContent = employees.length;
document.getElementById("aemp").textContent = employees.length; // assuming all are active

const tbody = document.getElementById("emptable");
tbody.innerHTML = "";

employees.slice(-5).reverse().forEach(emp => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.department}</td>
        <td>${emp.position}</td>
    `;
    tbody.appendChild(row);
});