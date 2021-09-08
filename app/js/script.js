const shareButton = document.getElementById('icons')
function showTooltip() {
	if (shareButton.style.display == '' || shareButton.style.display == 'none') {
		shareButton.style.display = 'flex'
	} else {
		shareButton.style.display = 'none'
	}
}

