var contract;
const CB = "0x803AD8DaBf3906D2FABeAdD04A92E8f00d706361";
async function isLocal(){
	// Récupérer l'adresse publique
	var verif;
	const accounts = await ethereum.request({ method: 'eth_accounts' });
	var acc = accounts[0];
	if(acc!=null){
	contract.methods.isLocal(acc).call().then(function(bool){
		verif=bool;	
		
		if (!verif) {
			pagecontent.style.display = "none";
			inscription.style.display = "block";
		  }
		if(verif){
			pagecontent.style.display = "block";
			inscription.style.display = "none";
		}

		
	})
	

	
	// Si elle existe :
	// Appelle le smart contract isLocal()
	// Si true, ne rien faire
	// Si false, cache pagecontent, décache inscription
}}
$(document).ready(function()
{
	
    var web3=new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/caef7ce620e040a19bcf5e52f4dfcf1c"));

var address = "0x50E68515F8bFAEDdc3DAd1eb4101Fb3E8D3Dc682";


		var abi=[
			{
				"constant": false,
				"inputs": [
					{
						"name": "_spender",
						"type": "address"
					},
					{
						"name": "_value",
						"type": "uint256"
					}
				],
				"name": "approve",
				"outputs": [
					{
						"name": "success",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "user",
						"type": "address"
					}
				],
				"name": "approveLocal",
				"outputs": [
					{
						"name": "success",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_to",
						"type": "address"
					},
					{
						"name": "_value",
						"type": "uint256"
					}
				],
				"name": "transfer",
				"outputs": [
					{
						"name": "success",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_from",
						"type": "address"
					},
					{
						"name": "_to",
						"type": "address"
					},
					{
						"name": "_value",
						"type": "uint256"
					}
				],
				"name": "transferFrom",
				"outputs": [
					{
						"name": "success",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "_from",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "_to",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "_value",
						"type": "uint256"
					}
				],
				"name": "Transfer",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "_owner",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "_spender",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "_value",
						"type": "uint256"
					}
				],
				"name": "Approval",
				"type": "event"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_owner",
						"type": "address"
					},
					{
						"name": "_spender",
						"type": "address"
					}
				],
				"name": "allowance",
				"outputs": [
					{
						"name": "remaining",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_addr",
						"type": "address"
					}
				],
				"name": "balanceOf",
				"outputs": [
					{
						"name": "balance",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "balanceOfSender",
				"outputs": [
					{
						"name": "balance",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "decimals",
				"outputs": [
					{
						"name": "",
						"type": "uint8"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "getOwnerAddress",
				"outputs": [
					{
						"name": "ownad",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "addr",
						"type": "address"
					}
				],
				"name": "isLocal",
				"outputs": [
					{
						"name": "islocal",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "name",
				"outputs": [
					{
						"name": "",
						"type": "string"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "symbol",
				"outputs": [
					{
						"name": "",
						"type": "string"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "totalSupply",
				"outputs": [
					{
						"name": "_totalSupply",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			}
		];
        contract=new web3.eth.Contract(abi, address);
		let pagecontent=document.getElementById('pagecontent');
		let inscription = document.getElementById('inscription');
		let autorisation = document.getElementById('autorisation');
		//let connect=document.getElementById('connectButton');
        const pay = document.getElementById('pay');
		const solde = document.getElementById('solde');
		var amountEURXCN = document.getElementById('amountEURXCN');
		const withdrawXCN = document.getElementById('withdrawXCN');
		const amountXCNEUR = document.getElementById('amountXCNEUR');
		const payXCN = document.getElementById('payXCN');
		var amount = document.getElementById('amount');
		var destination = document.getElementById('destination');
		var pseudo = document.getElementById('pseudo');
		const transfer = document.getElementById('transfer');
		var acc;
		
		
		// Créer une fonction on click de autorisation
		autorisation.addEventListener('click', async () => {
			const autorisationFunction = contract.methods.approveLocal(acc);
			const gas = await autorisationFunction.estimateGas({from: acc});
			const gasPrice = await web3.eth.getGasPrice();
			const data = autorisationFunction.encodeABI();
			const nonce = await web3.eth.getTransactionCount(acc);
			const transactionParameters = {
				nonce: nonce.toString(), // ignored by MetaMask
				gasPrice: gasPrice, // customizable by user during MetaMask confirmation.
				gas: gas.toString(), // customizable by user during MetaMask confirmation.
				to: address, // Required except during contract publications.
				from: acc, // must match user's active address.
				//value: '0x00', // Only required to send ether to the recipient from the initiating external account.
				data:data // Optional, but used for defining smart contract creation and interaction.
			  };
			  
			  // txHash is a hex string
			  // As with any RPC call, it may throw an error
			  const txHash = await ethereum.request({
				method: 'eth_sendTransaction',
				params: [transactionParameters],
			  });
			  // Enregistre le pseudo et l'adresse publique dans la base de données PHP
			  $.ajax({
				url : 'traitementinscription.php',
				type : 'POST',
				data : 'pseudo=' + pseudo.value + '&adresse=' + acc,
				dataType : 'html'
			  })
			pagecontent.style.display = "block";
			inscription.style.display = "none";
		})
		// Appelle le smart contract approveLocal
		
		isLocal();
		async function comptes(){
			const accounts = await ethereum.request({ method: 'eth_accounts' });
			acc = accounts[0];
			contract.methods.balanceOf(acc).call().then(function(tot){
				solde.innerHTML = tot + " XCN";
			})
		}
	
		comptes();
		
        pay.addEventListener('click', async () => {
            const accounts = await ethereum.request({ method: 'eth_accounts' });
			var owner = await contract.methods.getOwnerAddress().call();
            var amt=0;
            amt=parseInt(amountEURXCN.value);
            var acc = accounts[0];
			const approveFunction = contract.methods.approve(acc,amt);
			const gas = await approveFunction.estimateGas({from: acc});
			const gasPrice = await web3.eth.getGasPrice();
			const data = approveFunction.encodeABI();
			const nonce = await web3.eth.getTransactionCount(acc);
			const transactionParameters = {
				nonce: nonce.toString(), // ignored by MetaMask
				gasPrice: gasPrice, // customizable by user during MetaMask confirmation.
				gas: gas.toString(), // customizable by user during MetaMask confirmation.
				to: address, // Required except during contract publications.
				from: acc, // must match user's active address.
				//value: '0x00', // Only required to send ether to the recipient from the initiating external account.
				data:data // Optional, but used for defining smart contract creation and interaction.
			  };
			  
			  // txHash is a hex string
			  // As with any RPC call, it may throw an error
			  const txHash = await ethereum.request({
				method: 'eth_sendTransaction',
				params: [transactionParameters],
			  });
		})
		withdrawXCN.addEventListener('click', async () => {	
			const accounts = await ethereum.request({ method: 'eth_accounts' });
			var amt=0;
            amt=parseInt(amountEURXCN.value);
			var owner = await contract.methods.getOwnerAddress().call();
			var acc = accounts[0];
			  const transferFromFunction = contract.methods.transferFrom(owner,acc,amt);
			  const gas = await transferFromFunction.estimateGas({from: acc});
			  const gasPrice2 = await web3.eth.getGasPrice();
			  const data2 = transferFromFunction.encodeABI();
			  const nonce2 = await web3.eth.getTransactionCount(acc);
			  const transactionParameters2 = {
				  nonce: nonce2.toString(), // ignored by MetaMask
				  gasPrice: gasPrice2, // customizable by user during MetaMask confirmation.
				  gas: gas.toString(), // customizable by user during MetaMask confirmation.
				  to: address, // Required except during contract publications.
				  from: acc, // must match user's active address.
				  //value: '0x00', // Only required to send ether to the recipient from the initiating external account.
				  data:data2 // Optional, but used for defining smart contract creation and interaction.
				};
			
				// txHash is a hex string
				// As with any RPC call, it may throw an error
				const txHash2 = await ethereum.request({
				  method: 'eth_sendTransaction',
				  params: [transactionParameters2],
				});
    })
	payXCN.addEventListener('click', async () => {	
		var owner = await contract.methods.getOwnerAddress().call();
		const accounts = await ethereum.request({ method: 'eth_accounts' });
		var amt=0;
		amt=parseInt(amountXCNEUR.value);
		var acc = accounts[0];
		const XCNtoEUR = contract.methods.transfer(owner,amt);
		const gas = await XCNtoEUR.estimateGas({from: acc});
		const gasPrice = await web3.eth.getGasPrice();
		const data = XCNtoEUR.encodeABI();
		const nonce = await web3.eth.getTransactionCount(acc);
		const transactionParameters = {
			nonce: nonce.toString(), // ignored by MetaMask
			gasPrice: gasPrice, // customizable by user during MetaMask confirmation.
			gas: gas.toString(), // customizable by user during MetaMask confirmation.
			to: address, // Required except during contract publications.
			from: acc, // must match user's active address.
			//value: '0x00', // Only required to send ether to the recipient from the initiating external account.
			data:data // Optional, but used for defining smart contract creation and interaction.
			};
			
			// txHash is a hex string
			// As with any RPC call, it may throw an error
			const txHash = await ethereum.request({
			method: 'eth_sendTransaction',
			params: [transactionParameters],
			});
	})

	transfer.addEventListener('click', async () => {
		const accounts = await ethereum.request({ method: 'eth_accounts' });
		var amt=0;
		amt=parseInt(amount.value);
		dest = destination.value;
		var acc = accounts[0];
		const tr = contract.methods.transfer(dest,amt);
		const gas = await tr.estimateGas({from: acc});
		const gasPrice = await web3.eth.getGasPrice();
		const data = tr.encodeABI();
		const nonce = await web3.eth.getTransactionCount(acc);
		const transactionParameters = {
			nonce: nonce.toString(), // ignored by MetaMask
			gasPrice: gasPrice, // customizable by user during MetaMask confirmation.
			gas: gas.toString(), // customizable by user during MetaMask confirmation.
			to: address, // Required except during contract publications.
			from: acc, // must match user's active address.
			//value: '0x00', // Only required to send ether to the recipient from the initiating external account.
			data:data // Optional, but used for defining smart contract creation and interaction.
			};
			
			// txHash is a hex string
			// As with any RPC call, it may throw an error
			const txHash = await ethereum.request({
			method: 'eth_sendTransaction',
			params: [transactionParameters],
			});
	})
	

		})

		const forwarderOrigin = 'http://localhost:9010'

		const initialize = () => {
		   
		  //Basic Actions Section
		  window.onload=function(){
		  const onboardButton = document.getElementById('connectButton');
		
		  //Created check function to see if the MetaMask extension is installed
			const isMetaMaskInstalled = () => {
			//Have to check the ethereum binding on the window object to see if it's installed
				const { ethereum } = window;
				return Boolean(ethereum && ethereum.isMetaMask);
			};
		
			const onClickConnect = async () => {
			  try {
				// Will open the MetaMask UI
				// You should disable this button while the request is pending!
				await ethereum.request({ method: 'eth_requestAccounts' });
				isLocal();
			  } catch (error) {
				console.error(error);
			  }
			};
		  
			const MetaMaskClientCheck = () => {
			  //Now we check to see if MetaMask is installed
				if (!isMetaMaskInstalled()) {
					window.alert("Installe Metamask !");
				} else {
					//If it is installed we change our button text
					onboardButton.innerText = 'Connect';
					//When the button is clicked we call this function to connect the users MetaMask Wallet
					onboardButton.onclick = onClickConnect;
					//The button is now disabled
					onboardButton.disabled = false;
				}
			};
			MetaMaskClientCheck();
		  };
		  };
		window.addEventListener('DOMContentLoaded', initialize)