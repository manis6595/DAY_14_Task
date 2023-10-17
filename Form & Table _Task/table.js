document.getElementById('dataform').addEventListener('submit', function(event) {
    event.preventDefault();

    
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

  
    const tableRow = document.createElement('tr');
    const tableData = [firstName, lastName, address, pincode, gender, foods.join(', '), state, country];
    tableData.forEach(data => {
        const cell = document.createElement('td');
        cell.textContent = data;
        tableRow.appendChild(cell);
    });


    const dataTable = document.getElementById('dataTable');
    dataTable.appendChild(tableRow);

  
    document.getElementById('dataform').reset();
});
