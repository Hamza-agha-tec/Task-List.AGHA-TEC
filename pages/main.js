	document.getElementById("copy-button").addEventListener("click", function() {
	  var copyText = document.getElementById("text-to-copy");
	  copyText.select();
	  copyText.setSelectionRange(0, 99999); // For mobile devices
	  document.execCommand("copy");
	  alert("Acount Number Copied : " + copyText.value);
	});