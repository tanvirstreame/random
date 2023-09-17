const itemList = new LocalStorage();
document.getElementById("text-submit-massage").innerHTML = `Give Your Name, Email, Age`

const addData = () => {
  const itemList = new LocalStorage();
  var arrayData = itemList.getItem("item") || [];
  arrayData.push({
    name: document.getElementById("full_name").value,
    age: document.getElementById("age").value,
    email: document.getElementById("email").value
  })
  document.getElementById("text-submit-massage").innerHTML = `Successfully Added Name: ${arrayData[arrayData.length - 1].name}`
  itemList.addItem(arrayData, "item");
  populateTable();
}

function populateTable() {
  const itemList = new LocalStorage();
  var items = itemList.getItem("item");
  document.getElementById("text").innerHTML =
    `<table>
      <tr>
      <th>Full Name</th>
      <th>Email</th>
      <th>Age</th>
      </tr>
    </table>`
  items.map(item =>
    document.getElementById("text").innerHTML +=
    `<table>
      <tr>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.age}</td>
      </tr>
    </table >`
  )
}
populateTable();

const removeItem = () => {
   itemList.removeItem('item')
}

const removeAllItem = () => {
   itemList.removeAllItem()
}