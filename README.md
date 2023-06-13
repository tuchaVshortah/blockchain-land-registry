# Project description:
Blockchain Land Registry is a decentralized platform that utilizes blockchain technology to provide a secure, transparent, and immutable land registry system. The traditional land registry system suffers from inefficiencies, errors, and fraud, but our system ensures trust and accuracy using decentralized ledger technology. It is built on Ethereum, Solidity, and IPFS, making it efficient, scalable, and cost-effective. It allows anyone, anywhere in the world, to access the land registry records and verify their ownership without intermediaries. Our project is currently in development.
##Tech Stack Used:
**Frontend:**
* Javascript
* HTML
* CSS
* Metamask Chrome Extension

**Backend:**
* Ethereum Blockchain (Truffle Suite)
* Solidity
* Ganache

**Important Tools/Libraries:**
* VS-Code
* NodeJS (npm)
* Web3JS

# Installation instructions:
Step-by-step instructions on how to install and set up your project.

## VS Code:
Visual Studio Code (VS Code) is a popular open-source code editor developed by Microsoft. It provides a wide range of features and extensions that make it easy for developers to write code, debug applications, and collaborate with others. VS Code is available for Windows, macOS, and Linux operating systems.

**To install VS Code on your computer, follow these steps:**

1. Go to the official website of VS Code at https://code.visualstudio.com/.
2. Click on the "Download" button for your operating system (Windows, macOS, or Linux).
3. Once the download is complete, run the installer file. The installer will guide you through the installation process.
4. You can choose the default settings or customize the installation as per your requirement.
5. Once the installation is complete, launch VS Code from the Start menu or the desktop shortcut.

Now that you have VS Code installed, you can use it to write code in a wide range of programming languages, including JavaScript, Python, C++, and more.

## NodeJS:
Node.js is a popular open-source, cross-platform, back-end JavaScript runtime environment that enables developers to build server-side applications with JavaScript. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, allowing it to handle large-scale, real-time applications.

**To install Node.js on your computer, follow these steps:**

1. Go to the official website of Node.js at https://nodejs.org/en/.
2. Click on the "Download" button for the LTS (Long-Term Support) version, which is recommended for most users.
3. Choose the installer package for your operating system (Windows, macOS, or Linux).
4. Run the installer file and follow the instructions to complete the installation process. You can choose the default settings or customize the installation as per your requirement.
5. Once the installation is complete, open your command prompt or terminal and type node -v to check if Node.js is installed correctly. It should display the version number if it's installed.

Now that you have Node.js installed, you can use it to build server-side applications, create command-line tools, and run JavaScript scripts on your computer. Some of the popular use cases of Node.js include building web applications with frameworks like Express.js, creating real-time applications with Socket.IO, and automating tasks with Node.js scripts.

## Web3JS:
Web3.js is a JavaScript library that enables developers to interact with the Ethereum blockchain and build decentralized applications (DApps). It provides a simple and convenient way to connect to the Ethereum network, send transactions, and interact with smart contracts. Web3.js is widely used in the Ethereum development community and is supported by most Ethereum clients and frameworks.

**To install Web3.js on your project, you can use a package manager like npm or yarn. Here's how to install Web3.js using npm:**

1. Open your command prompt or terminal and navigate to your project directory.
2. Type 'npm install web3' and press Enter. This will install the latest version of Web3.js and its dependencies in your project.
3. Once the installation is complete, you can import Web3.js into your project using the require statement.

Web3.js can also be used to send transactions, interact with smart contracts, and listen for events on the Ethereum network. It provides a wide range of methods and features that make it easy to build robust and reliable DApps on Ethereum.

## Ganache:
Ganache is a personal blockchain for Ethereum development that enables developers to test and deploy smart contracts locally. It provides a simple and convenient way to test and debug Ethereum applications without needing to connect to the main Ethereum network. Ganache provides a graphical user interface (GUI) and a command-line interface (CLI) that developers can use to interact with the blockchain and simulate different network conditions.

**To install Ganache on your computer, follow these steps:**

1. Go to the official website of Ganache at https://www.trufflesuite.com/ganache.
2. Click on the "Download" button to download the installer package for your operating system (Windows, macOS, or Linux).
3. Run the installer file and follow the instructions to complete the installation process. You can choose the default settings or customize the installation as per your requirement.
4. Once the installation is complete, launch Ganache from the Start menu or the desktop shortcut.

Now that you have Ganache installed, you can use it to test and deploy Ethereum applications locally. Some of the popular use cases of Ganache include testing smart contracts, interacting with the blockchain using the GUI or CLI, and simulating different network conditions to see how your application behaves under different scenarios. Ganache also integrates with popular development tools like Truffle, Remix, and MetaMask, making it easy to develop, test, and deploy Ethereum applications.

# Steps to run Project:
Instructions on how to use this project, including any command-line arguments or configuration options.
1. Clone the github repository and cd to the folder
2. Install the Web3JS using npm https://web3js.readthedocs.io/en/v1.10.0/getting-started.html
3. Open Ganache and keep it running in the Background
4. Install the Metamask chrome extension, choose the local network (Ganache) and import the accounts
5. Go to web Remix ide (https://remix.ethereum.org) Create Registry.sol file in contracts folder and compile the Registry contract Copy the ABI of contract
6. After deploy the contract with **Injected Provider-Mestamask** when transaction will be confirm then copy the contract address
7. Copy contract address and ABI as seen in the image below and paste in variable contractAddress located in the file ./LandChain/src/index.js
    ```const Deploy = async () => {   
	const Address="0x2fF0.......";
	const ABI=[.....] ;
  	window.web3 = await new Web3(window.ethereum);
  	window.contract = await new window.web3.eth.Contract( ABI, Address);
};```
8. Open new terminal and Start the server : **node server.js**

# Code examples:
Examples of how to use your project's code, with sample code snippets or links to sample projects.

# Contribution guidelines:
Information on how others can contribute to your project, including how to submit bug reports, feature requests, and pull requests.

# License:
A statement of the license under which your project is released.

# Credits:
Acknowledgements of any libraries, tools, or people who helped you in creating the project.

# Contact information:
Information on how to contact you, such as your email address or social media handles.

# FAQ:
Frequently asked questions about your project and its use.
