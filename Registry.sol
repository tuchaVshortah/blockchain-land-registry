// SPDX-License-Identifier: MIT
pragma solidity >= 0.5.0 < 0.9.0;

// Creating a Smart Contract
contract Registry {

  struct users {
    address Account;
    string name;
    string gender;
    string Address;
    string phone;
    string password;
  }

  struct asset {
    address Account;
    string Location;
    string District;
    string plot_no;
    string area;
    int asset_value;
  }

  mapping(string => address[]) Khatiyan;
  address[] temp;
  users[] usr;
  mapping(string => asset[]) all_asts;
  asset[] ast;

//   address  put this in account input datatype    

  function add_user(address Account, string memory name, string memory gender, string memory Address, string memory phone, string memory password) public {
    users memory e = users(Account, name, gender, Address, phone, password);
    usr.push(e);
  }


  function get_user(address Account) public view returns(string memory, string memory, string memory, string memory, string memory) {
    uint i;
    for (i = 0; i < usr.length; i++) {
      users memory e = usr[i];
      if (e.Account == Account) {
        return (e.name, e.gender, e.Address, e.phone, e.password);
      }
    }
    return ("Not Found", "Not Found", "Not Found", "Not Found", "");
  }


//   -----------------------Asset wala kaam yahan se suru hai------------------------------------

  function add_asset(address Account, string memory Location, string memory District, string memory plot_no, string memory area, int value) public {
    asset memory a = asset(Account, Location, District, plot_no, area, value);
    ast.push(a);
  }

  function change_assetValue(address account, int value) public{
    uint i;
    for (i = 0; i < ast.length; i++) {
      asset memory a = ast[i];
      if (a.Account == account) {
        ast[i].asset_value = value;
      }
    }
  }
  function get_asset(address Account) public view returns(string memory, string memory, string memory, string memory, int) {
    uint i;
    for (i = 0; i < ast.length; i++) {
      asset memory a = ast[i];
      if (a.Account == Account) {
        return (a.Location, a.District, a.plot_no, a.area, a.asset_value);
      }
    }
    return ("Not Found", "Not Found", "Not Found", "Not Found", 0);
  }


//   -----------------------Asset transfer wala kaam yahan se suru hai------------------------------------

  function get_array() public view returns( asset[] memory){
      return(ast);
  }
  
  function transferlnd(address payable sellerAddress, uint values) payable public {
    uint pay=msg.value + values;
    sellerAddress.transfer(pay);
    uint i;
    for (i = 0; i < ast.length; i++) {
      asset memory a = ast[i];
      if (a.Account == sellerAddress) {
        ast[i].Account=msg.sender;
      }
    }
  }
}
