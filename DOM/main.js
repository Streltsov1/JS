const addBtn = document.querySelector('#submit-btn');
const tableBody = document.querySelector('#product-table tbody');
const clearBtn = document.querySelector('#clear-btn');
const findBtn = document.querySelector('#find-btn');

const form = document.forms.creationForm;
const brandIn = form.elements.brand;
const modelIn = form.elements.model;
const licensePlatesIn = form.elements.licensePlates;
const priceIn = form.elements.price;

const findForm = document.forms.findForm;
const searchIn = findForm.elements.search;

const cars = [];
class Car {
    constructor(brand, model, licensePlates, price) {
        this.brand = brand;
        this.model = model;
        this.licensePlates = licensePlates;
        this.price = price;
    }
}

addBtn.onclick = (event) => {
    event.preventDefault();
    const car = new Car(brandIn.value, modelIn.value, licensePlatesIn.value, priceIn.value);
    cars.push(car);
    addProductToTable(car);
}

clearBtn.onclick = () => {
    tableBody.innerHTML = '';
    cars.splice(0);
}

function addProductToTable(item) {
    tableBody.innerHTML += `<tr>
                                <td>${item.brand}</td>
                                <td>${item.model}</td>
                                <td>${item.licensePlates}</td>
                                <td>${item.price}</td>
                            </tr>`;
}
function filterObjects() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("product-table");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}