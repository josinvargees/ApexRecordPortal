const employees = JSON.parse(localStorage.getItem("employees")) || [];

const departmentTable = document.getElementById("departmentTable");

const departmentCount = {};

employees.forEach(emp => {

    let dept = emp.department.trim();

    if(departmentCount[dept]){
        departmentCount[dept]++;
    }
    else{
        departmentCount[dept]=1;
    }

});

let sno = 1;

for(let dept in departmentCount){

    const row=document.createElement("tr");

    row.innerHTML=`
        <td>${sno++}</td>
        <td>${dept}</td>
        <td>${departmentCount[dept]}</td>
    `;

    departmentTable.appendChild(row);

}