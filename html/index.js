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
         // setTimeout(() => window.open('Popit1.html','_blank'), 1000);
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
      <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet">
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
            <li><a href="/about" class="hover-underline-animation">ABOUT US</a></li>
            <li><a href="/service" class="hover-underline-animation">PRODUCT & SERVICES</a></li>
            <li><a href="/team" class="hover-underline-animation">TEAM</a></li>
            <li><a href="/contact" class="hover-underline-animation">CONTACT US</a></li>
            <li><a href="https://thorminer.com/" class="contact">THOR MINER</a></li>
         </ul>
      </div>
   </div>
</nav>
      <section class="slider text-center" id="slider">
         <div class="slider-overlay">
            <div id="video" >
            </div>
            <div class="slider-content">
               <br>
               <br>
               <div class = "title">
               <h1>WE MADE <span style="color:gold">CRYPTOCURRENCY</span> BETTER</h1>
               </div>
               <div class="cta-div">
                  <a href="/service" class="btn2">LEARN MORE</a>
               </div>
               <br><br>
            </div>
         </div>
      </section>
      <!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container">
  <div class="tradingview-widget-container__widget"></div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
  {
  "symbols": [
    {
      "proName": "BITSTAMP:BTCUSD",
      "title": "Bitcoin"
    },
    {
      "proName": "BITSTAMP:ETHUSD",
      "title": "Ethereum"
    },
    {
      "description": "Tether",
      "proName": "CRYPTOCAP:USDT"
    },
    {
      "description": "USD COIN",
      "proName": "CRYPTOCAP:USDC"
    },
    {
      "description": "BNB",
      "proName": "CRYPTOCAP:BNB"
    },
    {
      "description": "Binance USD",
      "proName": "BINANCE:BUSDTRY"
    },
    {
      "description": "XRP",
      "proName": "CRYPTOCAP:XRP"
    },
    {
      "description": "Solana",
      "proName": "CRYPTOCAP:SOL"
    },
    {
      "description": "dogecoin",
      "proName": "CRYPTOCAP:DOGE"
    },
    {
      "description": "polkadot",
      "proName": "CRYPTOCAP:DOT"
    },
    {
      "description": "polygon",
      "proName": "CRYPTOCAP:MATIC"
    }
  ],
  "showSymbolLogo": true,
  "colorTheme": "light",
  "isTransparent": false,
  "displayMode": "regular",
  "locale": "en"
}
  </script>
</div>
<!-- TradingView Widget END -->
      <section class="service-area" id="welcome">
      <div class="container">
      <div style="display:flex;justify-content: center;">
         <div class="mainpage_word">
            <div class="section-title text-center wow zoomIn" data-wow-duration=".15s" data-wow-delay=".15s">       
               <h1 style="color:#373C38">
               The future of cryto miner
               </h1>
               <h4 class="section-title text-center wow zoomIn" data-wow-duration=".65s" data-wow-delay=".65s" style="color:#999">We develops solutions for interconnected AI networks in the revolutionized AI and Blockchain supply management area and establishes crypto mining pools. </h4>
               <a href="/service" class="hover-underline-animation section-title text-center wow zoomIn" data-wow-duration=".65s" data-wow-delay=".65s" " style="text-decoration: none;">Checkout our latest miner</a>
            </div>
         </div>
      </div>
      <div class="video_bottom" >
               <!-- Video -->
               <video autoplay muted loop playsinline algin="center">
                  <source src="video.mp4" type="video/mp4" id="video">
               </video>
            </div>
      <br><br>
      <div style="margin-top:100px">
      
      <h1 class="hover-underline-animation section-title text-center wow zoomIn" data-wow-duration=".65s" data-wow-delay=".65s" " style="text-decoration: none;">Our Story</h1>
      <p class="my-4" id="secteam">  
      </div>
      <div class="row">
      <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="item-2">
          <a href="/about" class="card section-title text-center wow zoomIn" data-wow-duration=".65s" data-wow-delay=".65s"">
            <div class="thumb" style="background-image: url(https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2);"></div>
            <article>
              <span>About us</span>
            </article>
          </a>
            </div>
      </div>
      <div class="col-md-6 col-sm-6 col-xs-12">
    <div class="item-2">
    <a href="/team" class="card section-title text-center wow zoomIn" data-wow-duration=".75s" data-wow-delay=".75s"">
      <div class="thumb" style="background-image: url(https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2);"></div>
      <article>
        <span>Our Team</span>
      </article>
    </a>
   </div>
   </div>

  </div>    
   </section  >
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
            <h2 class="nav__title">Know us more</h2>
            <ul class="nav__ul nav__ul--extra">
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
            <h2 class="nav__title">Legal</h2>
            <ul class="nav__ul">
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
   </div>
      <script src="js/jquery.ripples-min.js" type="text/javascript"></script>  
      <script src="js/typed.min.js" type="text/javascript"></script>
      <script src="js/jquery.waypoints.min.js" type="text/javascript"></script>
      <script src="js/jquery.counterup.min.js" type="text/javascript"></script>           
      <script src="/js/main.js" type="text/javascript"></script>
      <script src="js/smoothscroll.js" type="text/javascript"></script>
      <script src="js/jquery.easing.1.3.js" type="text/javascript"></script>
      <script src="js/wow.min.js" type="text/javascript"></script>
   </body>
</html>
`;
