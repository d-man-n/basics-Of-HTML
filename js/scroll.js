const scrollLink = document.querySelectorAll('a');

for (let i = 0; i < scrollLink.length; i++) {
    if (scrollLink[i].hash) {
	scrollLink[i].addEventListener('click', function(ev) {
	    ev.preventDefault();
	    const blockID = this.hash;
	    document.querySelector(blockID).scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	    })
	});
    }
}
