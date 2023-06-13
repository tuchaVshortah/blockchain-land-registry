// active/current tab function
var pages = document.getElementsByClassName('page');
var tabs = document.getElementsByClassName('tab');

for(j = 0; j < tabs.length; j++) {
  // attach event listener to all tabs
  tabs[j].addEventListener('click', clickTab)
}

// event listener function
function clickTab (e) {
  var tabID = e.currentTarget.id
  var pageID = tabID.replace('t','p')

  for (i = 0; i < pages.length; i++) {
    // deactivate all tabs
    tabs[i].classList.remove('active')
    // hide all pages
    pages[i].classList.remove('active')
  }
  // activate current tab
  e.currentTarget.classList.add('active')
  // show current page
  var currentPage = document.querySelector('#'+pageID)
  currentPage.classList.add('active')
}


function cp1(){
  var x = document.getElementById("lg1");
	x.style.display = "none";
  document.getElementById("account_no").value="";
  document.getElementById("name").value="";
  document.getElementById("Gender").value="";
  document.getElementById("Address").value="";
  document.getElementById("phone").value="";
  document.getElementById("password").value="";
  var y = document.getElementById("cp1");
	y.style.display = "block";
}
function lg1(){
  var x = document.getElementById("cp1");
	x.style.display = "none";
  var y = document.getElementById("lg1");
	y.style.display = "block";
}
function lgout(){
  var x = document.getElementById("userpage");
	x.style.display = "none";
  document.getElementById("login_account_no").value="";
  document.getElementById("login_password").value="";
  var y = document.getElementById("lg1");
	y.style.display = "block";
}
