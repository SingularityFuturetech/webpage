module.exports = () => `
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Singularity Future Technology</title>
      <!------------Responsive css file------------->         
      <link href="css/responsive.css" rel="stylesheet" type="text/css">
      <!-------------Magnific popup css file------------->
      <link href="css/magnific-popup.css" rel="stylesheet" type="text/css">
      <!-------------Magnific popup css file------------->        
      <link href="css/owl.carousel.min.css" rel="stylesheet" type="text/css">
      <link href="css/owl.theme.default.min.css" rel="stylesheet" type="text/css">
      <!-------------Font Awesome cdn files------------->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
      <!-------------Font Awesome cdn ends------------->
      <!-- Latest compiled and minified CSS -->
      <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css">
      <!-------------Animate css file------------->
      <link href="css/animate.css" type="text/css" rel="stylesheet">
      <!-- jQuery library -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <!-------------Owl Carousel Js file------------->
      <script src="js/owl.carousel.min.js" type="text/javascript"></script>  
      <!-------------Magnific popup Js file------------->
      <script src="js/jquery.magnific-popup.min.js" type="text/javascript"></script>
      <!-- Latest compiled JavaScript -->
      <script src="js/bootstrap.min.js" type="text/javascript"></script>
      <!-- Start of Async Drift Code -->
      <script>
         "use strict";
         
         !function() {
           var t = window.driftt = window.drift = window.driftt || [];
           if (!t.init) {
             if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
             t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
             t.factory = function(e) {
               return function() {
                 var n = Array.prototype.slice.call(arguments);
                 return n.unshift(e), t.push(n), t;
               };
             }, t.methods.forEach(function(e) {
               t[e] = t.factory(e);
             }), t.load = function(t) {
               var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
               o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
               var i = document.getElementsByTagName("script")[0];
               i.parentNode.insertBefore(o, i);
             };
           }
         }();
         drift.SNIPPET_VERSION = '0.3.1';
         drift.load('4xdvnxpbgs9f');
      </script>
      <!-- End of Async Drift Code -->
      <script>
         function basicPopup(url) {
             popupWindow = window.open(url,'popUpWindow','height=800,width=700,left=500,top=50,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes')
         }
         
         function basicPopup1(url) {
             popupWindow = window.open(url,'popUpWindow','height=800,width=700,left=500,top=50,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes')
         }
         
         function basicPopup2(url) {
             popupWindow = window.open(url,'popUpWindow','height=800,width=700,left=500,top=50,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes')
         }
         
         function basicPopup3(url) {
             popupWindow = window.open(url,'popUpWindow','height=800,width=700,left=500,top=50,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes')
         }
      </script>
      <link rel="stylesheet" href="style.css">
      <link rel="shortcut icon" href="img/favicon.ico">
   </head>
   <body>
   <nav class="navbar navbar-inverse navbar-fixed-top ">
   <div class="container">
      <div class="navbar-header">
         <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navi">
         <span class="icon-bar"></span>
         <span class="icon-bar"></span>
         <span class="icon-bar"></span>
         </button>
         <a href="/" class="navbar-brand" id="logo"> <img src="img/logo2.png" alt="" class="logo" style="width: 202px; height: 50px;" ></a>
      </div>
      <div class="collapse navbar-collapse" id="navi">
         <ul class="nav navbar-nav navbar-right ">
            <li><a href="/">HOME</a></li>
            <li><a href="/service">PRODUCT & SERVICES</a></li>
            <li><a href="/news">NEWS</a></li>
            <li><a href="/contact">CONTACT US</a></li>
            <li><a href="/about">ABOUT US</a></li>
            <li><a href="https://thorminer.com/" class="contact">THOR MINER</a></li>
         </ul>
      </div>
   </div>
</nav>

      
      <section class="contact-area" id="contact">
      <div class="container-fluid">
         <div class="row">
            <div class="col-md-6 col-md-offset-3 text-center">
               <div class="section-heading wow fadeInUp" data-wow-duration=".2s" data-wow-delay=".2s">
                  <h2 class="section-title"><b>SEND MESSAGE</b></h2>
                  <div class="border-bottom-now"></div>
               </div>
            </div>
         </div>
         <br><br><br><br>
         <div class="row wow fadeInUp">
            <div class="col-md-8 col-md-offset-2">
               <form id="contactform" class="contact-form" action="https://formspree.io/f/xpzbpjrj"
                  method="POST">
                  <div class="row">
                     <div class="col-md-6"><input id="name" type="text" class="form-control" name="name" placeholder="Name" required></div>
                     <div class="col-md-6"><input id="email" class="form-control" type="email" name="Email" placeholder="Email" required></div>
                     <div class="col-md-12"><br>
                        <input type="text" id="subject" placeholder="Subject" class="form-control" name
                           ="name" required>
                     </div>
                     <div class="col-md-12"><br>
                        <textarea id="message" rows="5" class="form-control" placeholder="Message" required></textarea>                                  
                     </div>
                     <div class="col-md-12 text-center"><br><br>
                        <button class="btn" type="submit">Submit Message</button>                                    
                     </div>
                  </div>
               </form>
            </div>
         </div>
         <div class="row">
            <div class="contact-infos">
               <div class="col-md-4 text-center">
                  <div class="contact-item wow fadeInLeft" data-wow-duration=".3s" data-wow-delay=".3s">
                     <span class="contact-icon"><i class="fa fa-map-marker"></i></span>
                     <p class="contact-detail">
                        98 Cuttermill Road<br>
                        Great Neck Plaza, New York                                     
                     </p>
                  </div>
               </div>
               <div class="col-md-4 text-center">
                  <div class="contact-item wow fadeInLeft" data-wow-duration=".6s" data-wow-delay=".6s">
                     <span class="contact-icon"><i class="fa fa-envelope"></i></span>
                     <p class="contact-detail">
                        inquiry@singularity.us <br>
                        support@singularity.us                                 
                     </p>
                  </div>
               </div>
               <div class="col-md-4 text-center">
                  <div class="contact-item wow fadeInLeft" data-wow-duration=".9s" data-wow-delay=".9s">
                     <span class="contact-icon"><i class="fa fa-phone"></i></span>
                     <p class="contact-detail">
                        718-888-1814 - Central Office<br>
                        917-714-4331 - HQ <br>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
      <!-----------Markup for Maps----------------->
      <!-- <section class="maps wow fadeInUp" id="map">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115133.0101685027!2d85.07300236037258!3d25.608020764441754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29937c52d4f05%3A0x831a0e05f607b270!2sPatna%2C+Bihar!5e0!3m2!1sen!2sin!4v1515053726215" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
         
         </section> -->
      <!-------------Footer markups--------------->
      <footer class="footer">
         <div class="container">
            <div class="row">
               <div class="col-sm-12 text-center">
                  <div class="social-icon">
                  </div>
                  <br>
                  <div class="copyright">
                     <p class="footerlogo">
                        &copy; <img src="img/logo2.png" class="logo" style="width: 202px; height: 50px;">
                     </p>
                     <div class="bordernow"></div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
      
      <script src="js/jquery.ripples-min.js" type="text/javascript"></script>  
      <script src="js/typed.min.js" type="text/javascript"></script>
      <script src="js/jquery.waypoints.min.js" type="text/javascript"></script>
      <script src="js/jquery.counterup.min.js" type="text/javascript"></script>           
      <script src="js/main.js" type="text/javascript"></script>
      <script src="js/smoothscroll.js" type="text/javascript"></script>
      <script src="js/jquery.easing.1.3.js" type="text/javascript"></script>
      <script src="js/wow.min.js" type="text/javascript"></script>
   </body>
</html>
`;
