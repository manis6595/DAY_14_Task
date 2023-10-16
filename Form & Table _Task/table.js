document.getElementById('dataform').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById('validationTooltip01').value;
    const lastName = document.getElementById('validationTooltip02').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('validationTooltip05').value;
    const gender = document.getElementById('gender').value;
    const foods = [];
    const foodCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    foodCheckboxes.forEach(checkbox => foods.push(checkbox.value));
    const state = document.getElementById('validationTooltip04').value;
    const country = document.getElementById('country').value;

    // Create table row and cells
    const tableRow = document.createElement('tr');
    const tableData = [firstName, lastName, address, pincode, gender, foods.join(', '), state, country];
    tableData.forEach(data => {
        const cell = document.createElement('td');
        cell.textContent = data;
        tableRow.appendChild(cell);
    });

    // Append row to the table
    const dataTable = document.getElementById('dataTable');
    dataTable.appendChild(tableRow);

    // Reset form fields
    document.getElementById('dataform').reset();
});
//     function validateForm() {
//     var x = document.forms["dataform"]["validationTooltip01"].value;
//     var x = document.forms["dataform"]["validationTooltip02"].value;
//     var x = document.forms["dataform"]["address"].value;
//     var x = document.forms["dataform"]["validationTooltip05"].value;
//     var x = document.forms["dataform"]["validationTooltip01"].value;
//     var x = document.forms["dataform"]["country"].value;
//     let x = document.forms["dataform"]["gender"].value;
//     let x = document.forms["dataform"]["validationTooltip01"].value;
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
//   }