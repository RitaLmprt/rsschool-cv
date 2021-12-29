$("#imgSmall").click(function(){		                                        
	$("#imgBig").attr("src","img/krys.jpg");
    $("#overlay").show();
    $("#overlayContent").show();
});



$("#imgSmallest").click(function(){		 

	$("#imgBig").attr("src","img/beautiful-03.jpg");
    $("#overlay").show();
    $("#overlayContent").show();
});

$("#imgSmaller").click(function(){		 

	$("#imgBig").attr("src","img/drink.jpg");
    $("#overlay").show();
    $("#overlayContent").show();
});

$("#imgBig").click(function(){
    $("#imgBig").attr("src", "");
    $("#overlay").hide();
    $("#coursera").hide();
 
});
