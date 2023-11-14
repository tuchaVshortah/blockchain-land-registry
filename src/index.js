
// //Initialize an IPFS client:

// const IPFS = require('ipfs-http-client');
// const ipfs = new IPFS({host: 'localhost', port: '5001', protocol: 'http'});

// //Upload a file to IPFS:

// const file = event.target.files[0];
// const fileReader = new FileReader();
// fileReader.readAsArrayBuffer(file);
// fileReader.onloadend = async () => {
//   const buffer = Buffer.from(fileReader.result);
//   const file = await ipfs.add(buffer);
//   const ipfsHash = file.cid.toString();
//   // Store the IPFS hash on the Ganache blockchain
//   const result = await contract.methods.storeIPFSHash(ipfsHash).send({from: '0x...'}); // Replace with the address of your account
// };

// //Retrieve the IPFS hash from the Ganache blockchain:

// const ipfsHash = await contract.methods.getIPFSHash().call();

// //Retrieve the file from IPFS:

// const file = await ipfs.cat(ipfsHash);
// const blob = new Blob([file], { type: file.type });
// const fileUrl = URL.createObjectURL(blob);
// const link = document.createElement('a');
// link.href = fileUrl;
// link.download = file.name;
// link.click();



// ---------------------------------------------INTERACT WITH DEPLOYED CONTRACT---------------------------------
window.addEventListener('load', Connect);
function Connect(){
  if(window.ethereum !== "undefined") {
    const accounts = ethereum.request({ method: "eth_requestAccounts"});
    account = accounts[0];
    Deploy();
  }
}
const Deploy = async () => {   
	const Address="0xD2015a11Dc898121F082A10e26a5d50F198e94F9";
	const ABI=[
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "Account",
					"type": "address"
				},
				{
					"internalType": "string",
					"name": "Location",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "District",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "plot_no",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "area",
					"type": "string"
				},
				{
					"internalType": "int256",
					"name": "value",
					"type": "int256"
				}
			],
			"name": "add_asset",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "Account",
					"type": "address"
				},
				{
					"internalType": "string",
					"name": "name",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "gender",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "Address",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "phone",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "password",
					"type": "string"
				}
			],
			"name": "add_user",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "account",
					"type": "address"
				},
				{
					"internalType": "int256",
					"name": "value",
					"type": "int256"
				}
			],
			"name": "change_assetValue",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address payable",
					"name": "sellerAddress",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "values",
					"type": "uint256"
				}
			],
			"name": "transferlnd",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "get_array",
			"outputs": [
				{
					"components": [
						{
							"internalType": "address",
							"name": "Account",
							"type": "address"
						},
						{
							"internalType": "string",
							"name": "Location",
							"type": "string"
						},
						{
							"internalType": "string",
							"name": "District",
							"type": "string"
						},
						{
							"internalType": "string",
							"name": "plot_no",
							"type": "string"
						},
						{
							"internalType": "string",
							"name": "area",
							"type": "string"
						},
						{
							"internalType": "int256",
							"name": "asset_value",
							"type": "int256"
						}
					],
					"internalType": "struct Registry.asset[]",
					"name": "",
					"type": "tuple[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "Account",
					"type": "address"
				}
			],
			"name": "get_asset",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				},
				{
					"internalType": "int256",
					"name": "",
					"type": "int256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "Account",
					"type": "address"
				}
			],
			"name": "get_user",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	];
  	window.web3 = await new Web3(window.ethereum);
  	window.contract = await new window.web3.eth.Contract( ABI, Address);
};




// -------------------------------------------------CREATE USER PROFILE---------------------------------
const createProfile = async () => {
  var form_account=document.getElementById("account_no").value;
  var form_name=document.getElementById("name").value;
  var form_gender=document.getElementById("Gender").value;
  var form_address=document.getElementById("Address").value;
  var form_phone=document.getElementById("phone").value;
  var form_password=document.getElementById("password").value;
  contract.methods.add_user(form_account, form_name,form_gender,form_address,form_phone,form_password).send({
		from: form_account,
	 	gas: 4700000,
	 	gasPrice: '2000000000'
	})
  alert("User account created successfully.");
}
function userlogin() {
	var form_user_account=document.getElementById("login_account_no").value;
  	var user_password=document.getElementById("login_password").value;
	contract.methods.get_user(form_user_account).call().then((response) => {
		if (user_password==response[4]){
			var x = document.getElementById("cp1");
			x.style.display = "none";
			var y = document.getElementById("lg1");
			y.style.display = "none";
			var z = document.getElementById("userpage");
			z.style.display = "block";
			contract.methods.get_asset(form_user_account).call().then((data) => {
				const container = document.getElementById('card-container');
				container.innerHTML = '';
				// Create a template for the card
				const cardTemplate = `
				<div class="card">
				<h2 id="assetid">${form_user_account}</h2>
				<img src="${data.image}" alt="${data[5]}">
				<p>${"Location: "+data[0]}</p>
				<p>${"City: "+data[1]}</p>
				<p>${"Plot No: "+data[2]}</p>
				<p>${"Area: "+data[3]}</p>
				<p>${"Value: "+data[4]}</p>
				<p>${"Update Value:"} <input type="text" style="width:10%" id="upd" placeholder="Enter Value">  <button type="submit" onclick="UpdateValue()">Click</button></p>
				<!-- Other relevant data -->
				</div>
				`;

				// Create a new card element and append it to the card container
				const cardContainer = document.getElementById("card-container");
				const cardElement = document.createElement("div");
				cardElement.innerHTML = cardTemplate;
				cardContainer.appendChild(cardElement);
			})
		}
		else{
			alert(" Acesss Denied, Enter Correct Password  ");
		}
	})
}
 

// -------------------------------------------------REGISTER LAND ASSETS---------------------------------
const create_asset = async () => {
  var form_account=document.getElementById("account_no_asset").value;
  var form_location=document.getElementById("Location").value;
  var form_district=document.getElementById("District").value;
  var form_plot=document.getElementById("Plot_no").value;
  var form_area=document.getElementById("Area").value;
  var form_asset=document.getElementById("Assest_value").value;
  console.log(form_account, form_location,form_district,form_plot,form_area,form_asset);
  contract.methods.add_asset(form_account, form_location,form_district,form_plot,form_area,form_asset).send({
    from: form_account,
     gas: 4700000,
     gasPrice: '2000000000'
  });
  alert("Asset created successfully.");
}
const UpdateValue = async () => {
	var account=document.getElementById("login_account_no").value;
  	var value=document.getElementById("upd").value;
  	contract.methods.change_assetValue(account, value).send({
    	from: account,
     	gas: 4700000,
     	gasPrice: '2000000000'
  	});
  	alert("Value update successfully.");
  }


// -------------------------------------------------SEARCH RECORD DETAILS---------------------------------
function displaydata(){
  var form_account=document.getElementById("search_no").value;          
  contract.methods.get_user(form_account).call().then((response) => {
    document.getElementById('search_name').innerHTML = response[0]
    document.getElementById("search_gender").innerHTML =response[1]
    document.getElementById("search_address").innerHTML=response[2]
    document.getElementById("search_phone").innerHTML=response[3]
  })
  contract.methods.get_asset(form_account).call().then((response) => {
    document.getElementById("search_location").innerHTML=response[0]
    document.getElementById("search_district").innerHTML=response[1]
    document.getElementById("search_plotno").innerHTML=response[2]
    document.getElementById("search_area").innerHTML=response[3]
    document.getElementById("search_assetvalue").innerHTML=(response[4])
  })
}



// -------------------------------------------------RECORD DETAILS LIST---------------------------------
async function fetch_data() {
	var web3 = new Web3("http://localhost:7545");
	var accounts = await web3.eth.getAccounts()	 
	var n = (accounts.length)
	for (let i = 0; i < n; i++) {
		func(accounts[i])
	}
}

async function func(form_account) {
	var fetch_name;
	var fetch_gender;
	var fetch_address;
	var fetch_phone;
	var fetch_plotarea;
	var fetch_plotdistrict;
	var fetch_plotlocation;
	var fetch_plotno;
	var fetch_plotprice;
	var data1 = await contract.methods.get_user(form_account).call()
	var data2 = await contract.methods.get_asset(form_account).call()

	if (data1[0] == "Not Found") {
		return
	}
	var table = document.getElementById("myytab");
	var row = table.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	var cell9 = row.insertCell(8);
	var cell10 = row.insertCell(9);

	cell1.innerHTML = form_account;
	cell2.innerHTML = data1[0];
	cell3.innerHTML = data1[1];
	cell4.innerHTML = data1[2];
	cell5.innerHTML = data2[0];
	cell6.innerHTML = data2[1];
	cell7.innerHTML = data2[2];
	cell8.innerHTML = data2[3];
	cell9.innerHTML = data2[4];
	cell10.innerHTML = data1[3];
}

function displayrecords() {
	// Get the table element
	var ctable = document.getElementById("myytab");
	// Get the number of rows in the table
	var numRows = ctable.rows.length;
	// Loop through all rows of the table and remove them one by one
	for (var i = numRows - 1; i > 0; i--) {
		ctable.deleteRow(i);
	}

	fetch_data()
	var x = document.getElementById("tableshow");
	x.style.display = "block";
}



// -------------------------------------------------MUTATION OF OWNERSHIP----------------------------------
function details(){
	var form_account1=document.getElementById("buyer_account_no").value;
	contract.methods.get_user(form_account1).call().then((response) => {
		document.getElementById("buyer_name").innerHTML=response[0]
		document.getElementById("buyer_phone").innerHTML=response[3]
	})
	contract.methods.get_asset(form_account1).call().then((response) => {
		document.getElementById("buyer_location").innerHTML=response[0]
		document.getElementById("buyer_district").innerHTML=response[1]
		document.getElementById("buyer_plotno").innerHTML=response[2]
		document.getElementById("buyer_plotarea").innerHTML=response[3]
		document.getElementById("buyer_plotprice").innerHTML=(response[4])
	})
	var form_account2=document.getElementById("vendor_account_no").value;          
	contract.methods.get_user(form_account2).call().then((response) => {
		document.getElementById("owner_name").innerHTML=response[0]
		document.getElementById("owner_phone").innerHTML=response[3]
	})
	contract.methods.get_asset(form_account2).call().then((response) => {
		document.getElementById("owner_location").innerHTML=response[0]
		document.getElementById("owner_district").innerHTML=response[1]
		document.getElementById("owner_plotno").innerHTML=response[2]
		document.getElementById("owner_plotarea").innerHTML=response[3]
		document.getElementById("owner_plotprice").innerHTML=(response[4])
	})
}
function displayDetails() {
	details()
	var x = document.getElementById("search_container_vendor");
	x.style.display = "block";
}

var bstatus=false;
function verifyBuyer() {
	var form_buyer_account=document.getElementById("buyer_account_no").value;
  	var buyer_password=document.getElementById("buyer_password").value;
	contract.methods.get_user(form_buyer_account).call().then((response) => {
		if (buyer_password==response[4]){
			bstatus=true;
			document.getElementById("buyer_account_no").readOnly = true;
			document.getElementById("buyer_password").style.display="none";
			var x = document.getElementById("verifybuyer");
			x.style.display = "none";
			document.getElementById("send_account_no").style.display="block";
			document.getElementById("SendRequest").style.display="block";
		}
		else{
			alert(" Acesss Denied, Enter Correct Password  ");
		}
	})
}
function sendRequest() {
	var send_account_no=document.getElementById("send_account_no").value;
	document.getElementById("vendor_account_no").value=send_account_no;
	document.getElementById("vendor_account_no").readOnly=true;
	document.getElementById("send_account_no").style.display="none";
	document.getElementById("SendRequest").style.display="none";
}
function verifySeller() {
	var form_seller_account=document.getElementById("vendor_account_no").value;
  	var vendor_password=document.getElementById("vendor_password").value;
	contract.methods.get_user(form_seller_account).call().then((response) => {
		if (vendor_password==response[4]){
			document.getElementById("vendor_account_no").readOnly = true;
			document.getElementById("vendor_password").style.display="none"
			document.getElementById("verifyseller").style.display = "none";
			if(bstatus==true){
				document.getElementById("transferlnd").style.display = "block";
			}else{
				alert("You don't have any request from buyers.");
			}
		}
		else{
			alert(" Acesss Denied, Enter Correct Password  ");
		}
	})
}

function makePayment(){
  var form_seller_account=document.getElementById("vendor_account_no").value;
  var form_buyer_account=document.getElementById("buyer_account_no").value;
//   var buyer_password=document.getElementById("buyer_password").value;
  
  let valu=document.getElementById("owner_plotprice").innerHTML;
  valu=valu/150000
  contract.methods.transferlnd(form_seller_account, valu).send({
    from:form_buyer_account,
    gas: 4700000,
    value: Web3.utils.toWei(valu.toString(), 'ether'),
    gasPrice: '2000000000'
    }).then((response) => {
      alert("Money Transferred Sucessfully")
  })
  var y = document.getElementById("makepayment");
  y.style.display = "none";
}
function transferLnd(){
	makePayment()
	var y = document.getElementById("transferlnd");
	y.style.display = "none";
	displayDetails()
  }