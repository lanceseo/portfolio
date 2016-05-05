$(document).ready(function(){
    // Initialize bootstrap tooltip
    $('[data-toggle="tooltip"]').tooltip(); 

    // Scroll page back to top
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {       
            $('#return-to-top').fadeIn(200);    
        } else {
            $('#return-to-top').fadeOut(200);   
        }
    });
    $('#return-to-top').click(function() {      
        $('body,html').animate({
            scrollTop : 0                     
        }, 500);
    });

    var clipboard = new Clipboard('.btn');
    clipboard.on('success', function(e) {
        console.log("Copied to clipboard");
    });
});