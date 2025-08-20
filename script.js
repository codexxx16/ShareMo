```javascript
function sendFile() {
  alert("Send feature is under development.");
}

function receiveFile() {
  alert("Receive feature is under development.");
}

function connectBluetooth() {
  alert("Bluetooth connection not implemented in web version.");
}

function updateStorage() {
  const used = Math.floor(Math.random() * 50) + 10;
  const total = 128;
  const free = total - used;
  document.getElementById("storage").innerText = `Used: used GB / Free:{free} GB`;
}

window.onload = updateStorage;
```
