var productForm = document.getElementById('productForm');
var productName = document.getElementById('productName');
var productDesc = document.getElementById('productDesc');
var productPrice = document.getElementById('productPrice');
var productCategory = document.getElementById('productCategory');
var productAvailable = document.getElementById('productAvailable');
var submitBtn = document.getElementById('submitBtn');
var productTable = document.getElementById('productTable').getElementsByTagName('tbody')[0];
var searchBar = document.getElementById('searchBar');
var filterCategory = document.getElementById('filterCategory');

var products = [];
var editIndex = null;

productForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var name = productName.value.trim();
    var desc = productDesc.value.trim();
    var price = parseFloat(productPrice.value);
    var category = productCategory.value;
    var available = productAvailable.checked;
    if (name === '') {
        alert('Product Name cannot be empty.');
        return;
    }
    if (desc === '') {
        alert('Description cannot be empty.');
        return;
    }
    if (isNaN(price) || price <= 0) {
        alert('Price should be a positive number.');
        return;
    }
    if (category === '') {
        alert('Please select a category.');
        return;
    }
    if (editIndex === null) {
        products.push({ name, desc, price, category, available });
    } else {
        products[editIndex] = { name, desc, price, category, available };
        editIndex = null;
        submitBtn.textContent = 'Add Product';
    }
    productForm.reset();
    showProducts();
});

function showProducts() {
    productTable.innerHTML = '';
    var search = searchBar.value.trim().toLowerCase();
    var filter = filterCategory.value;
    for (var i = 0; i < products.length; i++) {
        var p = products[i];
        if ((p.name.toLowerCase().includes(search) || p.category.toLowerCase().includes(search)) && (filter === '' || p.category === filter)) {
            var row = productTable.insertRow();
            row.insertCell(0).textContent = p.name;
            row.insertCell(1).textContent = p.desc;
            row.insertCell(2).textContent = p.price.toFixed(2);
            row.insertCell(3).textContent = p.category;
            row.insertCell(4).textContent = p.available ? 'Available' : 'Not Available';
            var actions = row.insertCell(5);
            var editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.className = 'action-btn edit';
            editBtn.onclick = (function(index) {
                return function() { editProduct(index); };
            })(i);
            var deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'action-btn delete';
            deleteBtn.onclick = (function(index) {
                return function() { deleteProduct(index); };
            })(i);
            actions.appendChild(editBtn);
            actions.appendChild(deleteBtn);
        }
    }
}

function editProduct(index) {
    var p = products[index];
    productName.value = p.name;
    productDesc.value = p.desc;
    productPrice.value = p.price;
    productCategory.value = p.category;
    productAvailable.checked = p.available;
    submitBtn.textContent = 'Update Product';
    editIndex = index;
}

function deleteProduct(index) {
    if (confirm('Are you sure you want to delete this product?')) {
        products.splice(index, 1);
        showProducts();
    }
}

searchBar.addEventListener('input', showProducts);
filterCategory.addEventListener('change', showProducts);

showProducts(); 