var headerXhr=new XMLHttpRequest();

headerXhr.open('GET', 'header.html', true);
headerXhr.send();

headerXhr.onreadystatechange=function(){
	if(headerXhr.readyState==4 && headerXhr.status==200){

		header.innerHTML = headerXhr.responseText;


	}
};

// menu.html load
var menuXhr=new XMLHttpRequest();

menuXhr.open('GET', 'menu.html', true);
menuXhr.send();

menuXhr.onreadystatechange=function(){

	
	if(menuXhr.readyState==4 && menuXhr.status==200){

		menu.innerHTML = menuXhr.responseText;
		if(menuXhr.responseText){
			menuDropdown();
			menuHighlight();
		}

	}

};

//footer.html load
var footerXhr=new XMLHttpRequest();

footerXhr.open('GET', 'footer.html', true);
footerXhr.send();

footerXhr.onreadystatechange=function(){
	if(footerXhr.readyState==4 && footerXhr.status==200){

		footer.innerHTML = footerXhr.responseText;

	}
};

//menu highlight
var nowPath=location.pathname.split('/').pop();

function menuHighlight(){
	document.querySelector('a[href*="' + nowPath + '"]').closest('li').classList.add('active');
}

// menu dropdown
function menuDropdown(){

		//mobile menu dropdown
		document.body.addEventListener('touchstart', function(event){

			if(event.target.tagName=='BODY' && mobileMenu.classList.contains('opened')){
				document.body.classList.remove('mobile-menu-opened');
				mobileMenu.classList.remove('opened');
			}
		})

		const mobileMenuChildHeads=document.querySelectorAll('.mobile-child-head');

		for(i=0;i<mobileMenuChildHeads.length;i++){
			mobileMenuChildHeads[i].addEventListener('click', function(){
				this.classList.toggle('active');
				this.nextElementSibling.classList.toggle('opened');
			})
		}

}


if(nowPath=='about.html'){
	function initMap() {
		//tokyo office
		var tokyo = {lat: 35.5558912, lng: 139.7267339};
		var map = new google.maps.Map(document.getElementById('officeMap'), {
			zoom: 15,
			center: tokyo
		});
		var marker = new google.maps.Marker({
			position: tokyo,
			map: map
		});

	    //yaita factory
	    var yaita = {lat: 36.7966532, lng: 139.8886486};
	    var map = new google.maps.Map(document.getElementById('factoryMap'), {
	    	zoom: 12,
	    	center: yaita
	    });
	    var marker = new google.maps.Marker({
	    	position: yaita,
	    	map: map
	    });
	}
}else if(nowPath=='thailand.html'){
	function initMap() {
		//thailand factory
	    var thailand = {lat: 13.5689462, lng: 100.6816627};
	    var map = new google.maps.Map(document.getElementById('thailandMap'), {
	    	zoom: 12,
	    	center: thailand
	    });
	    var marker = new google.maps.Marker({
	    	position: thailand,
	    	map: map
	    });
	}

}