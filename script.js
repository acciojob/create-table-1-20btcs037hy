let counter=1;

function insert_Row() {
    //Write your code here
  let item=document.getElementById("sampleTable");
	const newRow = item.insertRow(0);

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  cell1.textContent = `New Cell ${counter}`;
	//`Data for Row ${counter}`
	counter++;
  cell2.textContent = `New Cell ${counter}`;
  
}
