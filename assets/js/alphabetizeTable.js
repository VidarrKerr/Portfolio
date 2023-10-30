<script>
  // Get the table body element
  var tableBody = document.querySelector('table tbody');

  // Get all the rows in the table body
  var rows = tableBody.getElementsByTagName('tr');

  // Loop through each row
  for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].getElementsByTagName('td');

    // Sort the cells in alphabetical order based on the link text
    cells = Array.from(cells).sort(function(a, b) {
      var linkA = a.querySelector('a').innerText;
      var linkB = b.querySelector('a').innerText;
      return linkA.localeCompare(linkB);
    });

    // Replace the cells in the row with the sorted cells
    for (var j = 0; j < cells.length; j++) {
      rows[i].appendChild(cells[j]);
    }
  }
</script>