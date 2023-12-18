// Function to simulate a click on the "Add a new address" button
function clickAddAddressButton() {
  var addButton = document.querySelector('.index_addressOptionsFooter__QgRGi span');
  if (addButton) {
    addButton.click();
  }
}

// Function to collect and display addresses in the console
function collectAddresses() {
  var addressElements = document.querySelectorAll('.index_address__n4AZx');
  var addresses = Array.from(addressElements).map(function (element) {
    return element.textContent.trim();
  });

  // Print all addresses except the first one
  for (var i = 1; i < addresses.length; i++) {
    console.log(addresses[i]);
  }
}

// Function to repeatedly click the button until there are 20 addresses
function clickButtonUntil20Addresses() {
  var intervalId = setInterval(function () {
    clickAddAddressButton();

    var addressElements = document.querySelectorAll('.index_address__n4AZx');
    if (addressElements.length >= 21) {
      clearInterval(intervalId); // Stop clicking once there are 20 addresses
      collectAddresses(); // Collect and display addresses in the console
    }
  }, 2000);
}

// Call the function to start the process
clickButtonUntil20Addresses();
