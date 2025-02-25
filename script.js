const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	
const price = document.querySelectorAll(".price");


	let total=0;
	price.forEach(p=>{
		total=total+parseFloat(p.textContent);
	})

	const exist = document.getElementById("totalRow");
	if(exist){
		exist.remove();
	}

	const table = document.querySelector("table");
	const totalRow = document.createElement("tr");
    totalRow.id = "ans";

	 const totalCell = document.createElement("td");
    totalCell.setAttribute("colspan", "2");
    totalCell.style.textAlign = "center";
    totalCell.textContent = `Total Price: Rs ${total}`;


	totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

