(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();


    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm bg-grey').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm bg-grey').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });
    
})(jQuery);

// function toggleChat() {
//     document.getElementById("chatbox").classList.toggle("hidden");
//   }
  
//   function sendMessage() {
//     const input = document.getElementById("user-input");
//     const msg = input.value.trim();
//     if (!msg) return;
  
//     displayMessage("You", msg);
//     input.value = "";
  
//     setTimeout(() => {
//       displayMessage("Bot", getBotResponse(msg));
//     }, 600);
//   }
  
//   function displayMessage(sender, text) {
//     const msgBox = document.createElement("div");
//     msgBox.innerHTML = `<strong>${sender}:</strong> ${text}`;
//     document.getElementById("chat-messages").appendChild(msgBox);
//     document.getElementById("chat-messages").scrollTop = document.getElementById("chat-messages").scrollHeight;
//   }
  
//   function getBotResponse(input) {
//     input = input.toLowerCase();
//     if (input.includes("admission")) return "You can apply online or visit our school office for admission.";
//     if (input.includes("fee") && input.includes("lkg")) return "The annual fee for LKG is ₹30,000.";
//     if (input.includes("timing") || input.includes("school hours")) return "Our school runs from 8:30 AM to 3:00 PM.";
//     return "I'm sorry, I didn’t understand that. Please ask about admissions, fees, or timings.";
//   }


