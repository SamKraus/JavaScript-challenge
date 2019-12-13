
var $tbody = document.querySelector("tbody");

var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#filter-btn");

$searchBtn.addEventListener("click", handleSearchButtonClick);

var tableData = data;

function renderTable() {
	$tbody.innerHTML = "";

	for (var i = 0; i < tableData.length; i++) {

		var currentSighting = tableData[i];
		var infos = Object.keys(currentSighting);
		var $row = $tbody.insertRow(i);

		for (var j = 0; j < infos.length; j++) {
			var info = infos[j];
			var $cell = $row.insertCell(j);
			$cell.innerText = currentSighting[info];
		}
	}
}

function handleSearchButtonClick() {
	var filteredDate = $dateInput.value.trim();

	if (filteredDate.length != 0) {
		tableData = data.filter(function(currentSighting){
			var sightingDate = sighting.date;
			return sightingDate === filteredDate;
		});
	}
	else {
		tableData = data;
	}
    renderTable();
}

renderTable();