var items = [  
    {
        name: 'first',
        price: 12,
        date: 'today'
    },
    {
        name: 'second',
        price: 15,
        date: '15-th september'
    },
];

renderTable(items); 
function renderTable(items) {
    items.map((item, i) => {
        var name = item.name;
        var price = item.price;
        var date = item.date;
        var id = i;
        renderRow(id, name, price, date);
    });
}

function renderRow(id, name, price, date) { 
    var tr = document.createElement('tr');  
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');

    var text1 = document.createElement("input");  
    text1.value = name;  
    text1.id = 'name' + id;

    var text2 = document.createElement("input");
    text2.value = price;
    text2.id = 'price' + id;

    var text3 = document.createElement("input");
    text3.value = date;
    text3.id = 'date' + id;

    var text4 = document.createElement("button");
    var text5 = document.createElement("button");


    var buttext1 = document.createTextNode("Delete"); 
    var buttext2 = document.createTextNode("Update"); 

    var atr1 = document.createAttribute('onclick');
    atr1.value = 'deleteRow(this);';

    var atr2 = document.createAttribute('onclick');
    atr2.value = 'updateRow(this);';

    text4.appendChild(buttext1);  
    text4.setAttributeNode(atr1);

    text5.appendChild(buttext2); 

    td1.appendChild(text1); 
    td2.appendChild(text2);
    td3.appendChild(text3);
    td4.appendChild(text4);
    td5.appendChild(text5);

    tr.appendChild(td1); 
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    var table = document.getElementById('table');
    table.appendChild(tr); 
}




function Add() { 
    var newElem = {
        name: document.getElementById('name').value, 
        price: document.getElementById('price').value, 
        date: document.getElementById('date').value, 
    };
    if (newElem.name && newElem.price && newElem.date) { 
        items.push(newElem); 
        delall();
        renderTable(items); 
    }
}

function delall() { 
    var table = document.getElementById('table');
    for (var i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }
}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex; 
    items.splice(i - 1, 1); 
    document.getElementById("table").deleteRow(i); 
}

function updateRow(r) { 
    var i = r.parentNode.parentNode.rowIndex; 
    var newName = document.getElementById('name' + (i - 1)).value; 
    var

        newPrice = document.getElementById('price' + (i - 1)).value; 
    var newDate = document.getElementById('date' + (i - 1)).value; 
    items[i - 1] = { 
        name: newName,
        price: newPrice,
        date: newDate
    };
    delall();
    renderTable(items); 
}
