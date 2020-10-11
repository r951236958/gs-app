(function () {
  var sheetid = "12_6JeFDKeHHybI9GwPnPTxvmKNs5DBOZ29hQzsPIYf0",
    sheetno = 1,
    dataurl =
    "https://spreadsheets.google.com/feeds/list/" +
    sheetid +
    "/" +
    sheetno +
    "/public/values?alt=json-in-script&callback=?";

  $.getJSON(dataurl, function (json) {
    var d = json.feed.entry;
    var items = [];
    for (var i = 0; i < d.length; i++) {
      var item = {};
      item.firstname = d[i].gsx$firstname.$t;
      item.lastname = d[i].gsx$lastname.$t;
      item.phone = d[i].gsx$phone.$t;
      item.email = d[i].gsx$email.$t;
      items.push(item);
    }
    console.table(items);

    for (var i = 0; i < d.length; i++) {
      var tableData =
        '<tr><td>' + items[i].firstname + '</td>' + '<td>' + items[i].lastname + '</td>' + '<td>' + items[i].phone + '</td>' + '<td>' + items[i].email + '</td></tr>'

      $('#table-list-item').append(tableData);
    }
  });

})();

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("acnh");
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