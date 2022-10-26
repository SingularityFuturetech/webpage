module.exports = () => `
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Products and Services</title>
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
      <!-------------Google font------------->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Hahmlet:wght@900&family=JetBrains+Mono&display=swap" rel="stylesheet">
      <!-- jQuery library -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <!-------------Owl Carousel Js file------------->
      <script src="js/owl.carousel.min.js" type="text/javascript"></script>  
      <!-------------Magnific popup Js file------------->
      <script src="js/jquery.magnific-popup.min.js" type="text/javascript"></script>
      <!-- Latest compiled JavaScript -->
      <script src="js/bootstrap.min.js" type="text/javascript"></script>
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
   <nav class="navbar navbar-default navbar-fixed-top" id="navbar" role="navigation">
      <div class="container">
         <div class="navbar-header">
            <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse" role="button">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            </button>
            <a href="/" class="navbar-brand" id="logo"> <img src="img/logo.png" alt="" class="logo" style="width: 202px; height: 45px; margin-top:-13px;" ></a>
         </div>
         <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right js-nav">
               <li><a href="/about" class="hover-underline-animation">ABOUT US</a></li>
               <li><a href="/service" class="hover-underline-animation">PRODUCT & SERVICES</a></li>
               <li><a href="/team" class="hover-underline-animation">TEAM</a></li>
               <li><a href="/news" class="hover-underline-animation">NEWS</a></li>
               <li><a href="/contact" class="hover-underline-animation">CONTACT US</a></li>
               <li><a href="https://www.thorminers.com/" class="contact">THOR MINER</a></li>
            </ul>
         </div>
      </div>
   </nav>
   <div class="product-head-overlay">
   <div class="product-head">
      <div class="col-xs-12">
            <h2>Just Everything You Need</h2>
      </div>
   </div>
   </div>
   <h2 class="product-h2">Our Services</h2>
   <section class="service-area" id="services" >
         <div class="container">
            <div class="row">
               <div class="col-md-4 col-sm-6 col-xs-12">
                  <div class="service-wrap text-center">
                     <div class="service-icon">
                        <i class="fa fa-coins"></i>
                     </div>
                     <h3>Thor Miner</h3>
                     <p>
                        ASIC Certified, world leading crypto mining technology. 
                     </p>
                  </div>
               </div>
               <div class="col-md-4 col-sm-6 col-xs-12">
                  <div class="service-wrap text-center">
                     <div class="service-icon">
                        <i class="fab fa-bitcoin"></i>
                     </div>
                     <h3>Ming Pool</h3>
                     <p>
                     Earn Bitcoin without doing your own mining.                     </p>
                  </div>
               </div>
               <div class="col-md-4 col-sm-6 col-xs-12">
                  <div class="service-wrap text-center">
                     <div class="service-icon">
                        <i class="fa fa-server"></i>
                     </div>
                     <h3>Mining Farm</h3>
                     <p>quickly improved the practitioners' professional expertise.</p>
               </div>
            </div>
         </div>
      </section>
      <section class="background" id="team">
         <div>
         <h2 class="product-h2" style="margin-top:100px">Our BTC Miners</h2>
         <div class="container-product">
           <div class="panel pricing-table">
             <div class="pricing-plan">
               <img src="img/miner01.png" alt="" class="pricing-img">
               <h2 class="pricing-header">S99 Max</h2>
               <ul class="pricing-features">
                 <li class="pricing-features-item">113th/s Hash Rate</li>
                 <li class="pricing-features-item">3400w Power Consumption</li>
                 <li class="pricing-features-item">30j/t Power Efficiency</li>
               </ul>
             </div>
             <div class="pricing-plan">
               <img src="img/miner02.png" alt="" class="pricing-img">
               <h2 class="pricing-header">S99 Pro</h2>
               <ul class="pricing-features">
               <li class="pricing-features-item">98th/s Hash Rate</li>
                 <li class="pricing-features-item">3400w Power Consumption</li>
                 <li class="pricing-features-item">34j/t Power Efficiency</li>
               </ul>
             </div>
             
             <div class="pricing-plan">
               <img src="img/miner03.png" alt="" class="pricing-img">
               <h2 class="pricing-header">S99</h2>
               <ul class="pricing-features">
               <li class="pricing-features-item">92th/s Hash Rate</li>
               <li class="pricing-features-item">3400w Power Consumption</li>
               <li class="pricing-features-item">37j/t Power Efficiency</li>
               </ul>
             </div>
           </div>
           <a href="mailto:inquiry@singularity.us"><h4 style="text-align:center;margin-top:100px">Please contact us for inqury</h4></a>
           
         </div>
       </div>
         <br>
      </div>
      </section>
      <!------------Counter Starts-------------> 
      <section class="stat " id="stats">
         <div class="section-title text-center wow zoomIn" data-wow-duration=".2s" data-wow-delay=".2s">
            <h2><b>ACHIEVEMENT</b></h2>
         </div>
         <div class="content-box">
            <br><br>
            <div class="container">
               <div class="row text-center">
                  <div class="col-md-4 wow fadeInLeft" data-wow-duration=".3s" data-wow-delay=".3s">
                     <div class="stat-items">
                        <i class="fa fa-globe-africa"></i>
                        <h2><span class="counter text-center ">50</span> <span>STATES</span></h2>
                        <p>SERVICE AREA</p>
                     </div>
                  </div>
                  <div class="col-md-4 wow fadeInLeft" data-wow-duration=".6s" data-wow-delay=".6s">
                     <div class="stat-items">
                        <i class="fa fa-chart-line"></i>
                        <h2><span class="counter text-center">1840</span> <span>PH</span></h2>
                        <p>HASH RATE</p>
                     </div>
                  </div>
                  <!-- <div class="col-md-3 wow fadeInLeft" data-wow-duration=".9s" data-wow-delay=".9s"> 
                     <div class="stat-items">
                         <i class="fa fa-money-bill-wave"></i>
                         <h2><span class="counter text-center">7289</span> <span>+</span></h2>
                         <p>PROFIT</p>
                     </div>
                     
                     </div> -->
                  <div class="col-md-4 wow fadeInLeft"  data-wow-duration="1.2s" data-wow-delay="1.2s">
                     <div class="stat-items">
                        <i class="fa fa-dollar-sign"></i>
                        <h2><span class="counter text-center">20000</span> <span>+</span></h2>
                        <p>SALE MINERS</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-------------Footer markups--------------->
      <div class="column-12 column-xs-12 column-sm-12 tab">
      <footer class="footer">
         <div class="footer__addr">
            <h1 class="footer__logo"><img src="img/logo2.png" class="logo" style="width: 202px; height: 50px;"></h1>
            <h2>Contact</h2>
            <address>
               98 Cuttermill Road,
               Great Neck Plaza, New York 11021<br>
               <a class="footer__btn" href="mailto:inquiry@singularity.us">Email Us</a>
            </address>
         </div>
         <ul class="footer__nav">
            <li class="nav__item nav__item--extra">
               <ul class="nav__ul nav__ul--extra">
               <h2 class="nav__title">Know us more</h2>
                  <li>
                     <a href="/service">Product and Services</a>
                  </li>
                  <li>
                     <a href="/team">Team</a>
                  </li>
                  <li>
                     <a href="/contact">Contact Us</a>
                  </li>
               </ul>
            </li>
            <li class="nav__item">
               <ul class="nav__ul">
               <h2 class="nav__title">Legal</h2>
                  <li>
                     <a href="/privacypolicy">Privacy Policy</a>
                  </li>
                  <li>
                  <a href="/terms">Terms of Use</a>
               </li>
               </ul>
            </li>
         </ul>
         <div class="legal">
            <p>&copy; 2022 Singularity Future Technology Ltd. All rights reserved.</p>
         </div>
      </footer>
      </div>      <script src="js/jquery.ripples-min.js" type="text/javascript"></script>  
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
