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
	var nowActived=document.querySelector('#menu .list-wrapper > li.active');
	var menuList=document.querySelectorAll('#menu .list-wrapper > li')

	if(nowPath=="" || nowPath=="index.html"){
		return;

	}else if(nowPath=='products-1.html' || nowPath=='products-2.html' || nowPath=='products-3.html'){
		nowActived.classList.remove('active');
		menuList[1].classList.add('active');

	}else if(nowPath=='product.html'){
		nowActived.classList.remove('active');
		menuList[2].classList.add('active');

	}else if(nowPath=='factory.html' || nowPath=='quality.html' || nowPath=='process.html'){
		nowActived.classList.remove('active');
		menuList[3].classList.add('active');

	}else if(nowPath=='profile.html' || nowPath=='message.html' || nowPath=='recruit.html'){
		nowActived.classList.remove('active');
		menuList[4].classList.add('active');
	}else if(nowPath=='contact.html'){
		nowActived.classList.remove('active');
		menuList[5].classList.add('active');
	}else {
		nowActived.classList.remove('active');

	}
}

// menu dropdown
function menuDropdown(){

	// PC menu dropdown
	if(window.innerWidth > 769){

		var menuChildHeads=document.querySelectorAll('.child-head span');

		for(i=0;i<menuChildHeads.length;i++){
			menuChildHeads[i].addEventListener('click', function(){
				var nowActived=document.querySelector('.child-menu.active');

				if(nowActived){
					nowActived.classList.remove("active");
				}

				if(nowActived==this.nextElementSibling){
					this.nextElementSibling.classList.remove("active");
				}else{
					this.nextElementSibling.classList.add("active");
				}
			})
		}

	}else{

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
}