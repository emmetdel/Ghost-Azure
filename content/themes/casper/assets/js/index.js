
$(".search-results").addClass("results-hide");
$("#search-field").ghostHunter({
    results: "#search-results",
    onKeyUp: true,
    displaySearchInfo: true,
    result_template : "<a href='{{link}}'><h4>{{title}}</h4><p>{{description}}</p></a>",
    before: function(){ 
        $(".search-results").removeClass("results-hide");
    }
}); 


$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});