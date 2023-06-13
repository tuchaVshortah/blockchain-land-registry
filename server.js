// const fs = require('fs');
// const solc = require('solc');
// function generateAbi(contractFilePath, outputAbiPath) {
//   try {
//     // Read the contract file
//     const contractCode = fs.readFileSync(contractFilePath, 'utf8');

//     // Compile the contract
//     const input = {
//       language: 'Solidity',
//       sources: {
//         contract: {
//           content: contractCode,
//         },
//       },
//       settings: {
//         outputSelection: {
//           '*': {
//             '*': ['abi'],
//           },
//         },
//       },
//     };
//     const compiledContract = JSON.parse(solc.compile(JSON.stringify(input)));

//     // Get the ABI
//     const abi = compiledContract.contracts.contract[Object.keys(compiledContract.contracts.contract)[0]].abi;

//     // Write the ABI to the output file
//     fs.writeFileSync(outputAbiPath, JSON.stringify(abi, null, 2));
//     content = outputAbiPath.trim();

//     console.log('ABI file generated successfully!');
//   } catch (error) {
//     console.error('Error generating ABI:', error);
//   }
// }
// // Usage example
// const contractFilePath = 'Mytruffle/contracts/Registry.sol';
// const outputAbiPath = 'Mytruffle/contracts/RegistryAbi.txt';
// generateAbi(contractFilePath, outputAbiPath);


const express = require("express");
const { use } = require("express/lib/application");
const path = require("path");
const app = express();
const staticpath=path.join(__dirname + "/src");
app.use(express.static(staticpath));
app.get("/", (req, res) => {
    Connect();
    res.sendFile(staticpath);
})

const server = app.listen(9696);
const portNumber = server.address().port;
console.log(`Open on localhost:${portNumber}`);