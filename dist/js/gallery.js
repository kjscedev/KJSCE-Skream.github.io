var Gallery = (function($){

	var prevImg;
	var nextImg;
	var currentImg;
	var imgThumbnail;
	var thumbnailContainer;
	var test;
	var carousel;
	function init(){
		cacheDOM();
		//swipeSupport();
		return "Masti";
	}

	function cacheDOM(){
		// prevImgThumb = $("#prev");
		// nextImgThumb = $("#next");
		// thumbnailContainer = $(".cover-card");
		// thumbnailContainer.on("click",HandleImageClick);
		Carousel = $("myGallery");


	}
	function HandleImageClick(e){
		var imageNo= e.currentTarget.childNodes[1].id
		imageNo = imageNo.match(/\d+$/)[0];
		AdjacentImages(parseInt(imageNo));
		var prevSrc = prevImg.attr("src");
		var nextSrc = nextImg.attr("src");
		changeThumbnail(prevSrc,nextSrc);

		
		//console.log(e.currentTarget;

	}
	function swipeSupport(){
		$(document).ready(function() {  
   Carousel.swiperight(function() {  
      Carousel.carousel('prev');  
    });  
   Carousel.swipeleft(function() {  
      Carousel.carousel('next');  
   });  
});  
	}
	function changeThumbnail(pSrc,nSrc){
		prevImgThumb.attr("src",pSrc);
		nextImgThumb.attr("src",nSrc);
		return;
	}

	function AdjacentImages(imageNo){
		var PrevTag = "#img-"+ (imageNo-1);
		var NextTag = "#img-" + (imageNo+1);
		prevImg = $(PrevTag).children().children();
		nextImg = $(NextTag).children().children();

		return;

	}
	function returntest(){
		return test;
	}

	return{
		init_gallery: init,
		t: returntest,
	}


})(jQuery);
Gallery.init_gallery();	