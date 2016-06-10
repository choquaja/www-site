<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="3Blades.io">
	<title><?php wp_title(); ?></title>
	
		<link href="<?php echo get_stylesheet_directory_uri(); ?>/libraries/bootstrap/css/bootstrap.min.css" rel="stylesheet">
		<link href="<?php echo get_stylesheet_uri(); ?>" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet">
		<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet">
		<link href="<?php echo get_stylesheet_directory_uri(); ?>/libraries/owl-carousel/owl.carousel.css" rel="stylesheet">
		<link href="<?php echo get_stylesheet_directory_uri(); ?>/libraries/owl-carousel/theme.default.min.css" rel="stylesheet">
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
    <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-63775134-2', 'auto');
  ga('send', 'pageview');

</script>
<!-- Start of 3blades Zendesk Widget script -->
 <script>/*<![CDATA[*/window.zEmbed||function(e,t){var n,o,d,i,s,a=[],r=document.createElement("iframe");window.zEmbed=function(){a.push(arguments)},window.zE=window.zE||window.zEmbed,r.src="javascript:false",r.title="",r.role="presentation",(r.frameElement||r).style.cssText="display: none",d=document.getElementsByTagName("script"),d=d[d.length-1],d.parentNode.insertBefore(r,d),i=r.contentWindow,s=i.document;try{o=s}catch(c){n=document.domain,r.src='javascript:var d=document.open();d.domain="'+n+'";void(0);',o=s}o.open()._l=function(){var o=this.createElement("script");n&&(this.domain=n),o.id="js-iframe-async",o.src=e,this.t=+new Date,this.zendeskHost=t,this.zEQueue=a,this.body.appendChild(o)},o.write('<body onload="document._l();">'),o.close()}("//assets.zendesk.com/embeddable_framework/main.js","3blades.zendesk.com");/*]]>*/</script>
 <!-- End of 3blades Zendesk Widget script -->
 <!-- start Mixpanel -->
 <script type="text/javascript">(function(f,b){if(!b.__SV){var a,e,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!==typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=f.createElement("script");a.type="text/javascript";a.async=!0;a.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";e=f.getElementsByTagName("script")[0];e.parentNode.insertBefore(a,e)}})(document,window.mixpanel||[]);
mixpanel.init("9d2c05e8495d88b2836b61fe3938dbca");
</script>
 <!-- end Mixpanel -->
 <script type="text/javascript">
 mixpanel.track("Home Page Load");
 </script>
	<script type="text/javascript" async defer
  	src="https://apis.google.com/js/platform.js?publisherid=117513563939799403950">
	</script>
<script>
  !function(g,s,q,r,d){r=g[r]=g[r]||function(){(r.q=r.q||[]).push(
  arguments)};d=s.createElement(q);q=s.getElementsByTagName(q)[0];
  d.src='//d1l6p2sc9645hc.cloudfront.net/tracker.js';q.parentNode.
  insertBefore(d,q)}(window,document,'script','_gs');

  _gs('GSN-577359-N');
</script>
	<?php wp_head(); ?>
</head>
<body id="front-page">
	<header>
		<div class="container">
			<div class="row">
				<div id="logo" class="col-lg-3 col-sm-4 col-xs-12">
					<a id="logo-link" class="img-responsive" href="<?php echo site_url(); ?>">
						<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/logo-3blades.png" alt="3Blades">
					</a>
				</div>
				<div class="col-xs-12 visible-xs">
					<div id="menu-toggle">
						<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#menu" aria-expanded="false" aria-controls="menu">
						  <i class="fa fa-bars"></i> Menu
						</button>
					</div>
				</div>
				<div class="col-lg-9 col-sm-8 col-xs-12">
					<nav id="menu" class="collapse">
						<ul class="menu-list">
							<li class="menu-item"><a class="menu-link" href="<?php echo site_url(); ?>#body">Home</a></li>
							<li class="menu-item"><a class="menu-link" href="<?php echo site_url(); ?>#features">Features</a></li>
							<li class="menu-item"><a class="menu-link" href="<?php echo site_url(); ?>#contact">Contact</a></li>
                            <li class="menu-item"><a class="menu-link" href="http://support.3blades.io/hc/en-us" rel="nofollow">Support</a>
							<li class="menu-item"><a class="menu-link" href="<?php echo site_url(); ?>/blog/">Blog</a></li>
						</ul>
						<ul id="feat-menu-list" class="menu-list">
							<li class="menu-item"><a class="menu-link btn" href="https://go.3blades.io/">Sign In</a></li>
							<li class="menu-item"><a class="menu-link btn btn-cta" href="<?php echo site_url(); ?>/sign-up-form/">Get Early Access</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</header>
	
	<div id="body">
		<div id="newsletter">
			<div class="container">
				<h1 id="newsletter-title">Build and Share Your Data Science Projects With Ease</h1>
				<h2 id="newsletter-subtitle">We help data scientists achieve maximum productivity</h2>
				<span id="newsletter-label">Join The Community</span>
				<form id="newsletter-form" method="post">
					<input class="text-field" type="text" placeholder="Your Name">
					<input class="text-field" type="email" placeholder="Your Email">
					<input class="btn btn-cta" type="submit" value="I'M READY">
				</form>
			</div>
		</div>
		
		<div class="container">
			<div id="about">
				<h2>3Blades offers a cloud based development environment <br> to build and share data science projects.</h2>
				<span id="about-text">Synchronize your files with best in class cloud storage services or use RESTful API to synch objects with on premise storage solutions.</span>
				<div id="features">
					<img id="features-img" src="<?php echo get_stylesheet_directory_uri(); ?>/img/3blades-features.png" alt="3Blades Features">
					
					<ul id="features-list">
						<li id="features-item-1" class="features-item">CODE SYNC SERVICES</li>
						<li id="features-item-2" class="features-item features-item-left">DATA SCIENTIST</li>
						<li id="features-item-3" class="features-item features-item-left">EXTERNAL DATA SOURCES</li>
						<li id="features-item-4" class="features-item features-item-left">SHARING SERVICES</li>
						<li id="features-item-5" class="features-item features-item-right">DEVELOPMENT ENVIRONMENTS</li>
						<li id="features-item-6" class="features-item features-item-right">AUTHENTICATION SERVICES</li>
						<li id="features-item-7" class="features-item features-item-right">API SERVICES</li>
					</ul>
				</div>
				<div id="features2" class="row">
					<div id="on-the-go" class="feature2 col-sm-4">
						<h3 class="feature2-title">On the go?</h3>
						<p class="feature2-description">Access workspace environments remotely from mobile devices or tablets.</p>
					</div>
					<div id="share-projects" class="feature2 col-sm-4">
						<h3 class="feature2-title">Share Projects</h3>
						<p class="feature2-description">Instantly share private or public projects with one click.</p>
					</div>
					<div id="control" class="feature2 col-sm-4">
						<h3 class="feature2-title">Control</h3>
						<p class="feature2-description">Create and manage projects and files with other members using granular roles.</p>
					</div>
				</div>
			</div>
		</div>
		
		<div class="gray-section">
			<div class="container">
				<div id="mission-section-content" class="section-content">
					<div id="mission" class="row">
						<div class="col-lg-5 col-lg-offset-1 col-md-3 col-md-offset-1 col-sm-4">
							<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/our-mission.png" alt="Our Mission">
						</div>
						<div id="mission-content" class="col-lg-6 col-md-7 col-sm-8">
							<h2>Our Mission</h2>
							<p>Our team of data scientists continued mission is to improve the overall experience to create and maintain data science projects.</p>
							<a class="btn btn-cta" href="/sign-up-form.html">GET EARLY ACCESS</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="container">
			<div id="benefits">
				<div id="environments-section-content" class="section-content"><a id="features"></a>
					<h2>Features and Benefits</h2>
					<div id="benefits-content">
						<div class="benefit row">
							<div class="col-lg-5 col-sm-6">
								<h3>Run multiple workspace environments</h3>
								<p>3Blades gives you the option to choose which workspace environment to
								run when developing your data science projects. Choose multiple versions
								of Jupyter, RStudio, among others.</p>
							</div>
							<div class="col-lg-offset-1 col-sm-6">
								<img class="align-left" alt="Multiple Environments"
									src="<?php echo get_stylesheet_directory_uri(); ?>/img/benefits-multiple-environments.png">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="gray-section">
			<div class="container">
				<div id="services-section-content" class="section-content">
					<div class="benefit row">
						<div class="col-lg-4 col-lg-push-7 col-sm-6 col-sm-push-6">
							<h3>Sync resources from external services</h3>
							<p>Import folders and files directly from GitHub, AWS,
							S3 and Google Drive.</p>
						</div>
						<div id="benefits-external-services-img-wrapper" class="col-lg-pull-4 col-sm-6 col-sm-pull-6">
							<img class="align-right" alt="External Services"
								src="<?php echo get_stylesheet_directory_uri(); ?>/img/benefits-external-services.png">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div id="collaboration-section-content" class="section-content">
				<div class="benefit row">
					<div class="col-lg-5 col-sm-7">
						<h3>Collaboration</h3>
						<p>Create data science projects for personal or team use. For teams,
						control access using role based groups. Comment and share your
						projects quickly to improve productivity</p>
					</div>
					<div class="col-lg-offset-2 col-sm-5">
						<img class="align-left" alt="Collaboration"
							src="<?php echo get_stylesheet_directory_uri(); ?>/img/benefits-collaboration.png">
					</div>
				</div>
			</div>
		</div>
		<div class="gray-section">
			<div class="container">
				<div id="models-section-content" class="section-content">
					<div class="benefit row">
						<div id="benefits-trained-models-text-wrapper" class="col-lg-push-7 col-lg-3 col-sm-7 col-sm-push-5">
							<h3>Publish Trained Models</h3>
							<p>Publish trained models with custom instance types as RESTful either
							for development or production</p>
						</div>
						<div class="col-lg-pull-3 col-sm-5 col-sm-pull-7">
							<img class="align-right" alt="Trained Models"
								src="<?php echo get_stylesheet_directory_uri(); ?>/img/benefits-trained-models.png">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="text-benefit col-sm-6">
					<h3 class="text-benefit-title">Use your preferred data science language</h3>
					<p>Data scientists in many cases don't work with the best data
					science language (which is the subject of some lengthy debates),
					but with the language they know best.</p>
								
					<p>In other cases, one language may be particularly good at one set of
					tasks and another may be better at others. So in order to be productive,
					it is essential to provide many language options.</p>
								
					<p>Some of the language options included with 3Blades are: Python 2.7.x,
					Python 3.4.x, R, Ruby, Scala, Julia, Haskell and Bash.</p>
				</div>
				<div class="text-benefit col-sm-6">
					<h3 class="text-benefit-title">Instantly deploy to staging and production environments</h3>
					<p>Do you have a small project that you wish to test with real time
					streaming data? Or perhaps you are a member or a data science team that
					constantly iterates and tweaks machine learning algorithms.</p>
								
					<p>It's essential to deploy quickly and safely in order to obtain
					competitive advantages without the need for always-busy IT personnel.</p>
								
					<p>3Blades provides out of the box integrations with common third party
					Big Data services along with and intuitive API for custom environments
					so that you no longer have to struggle with deployment headaches.</p>
				</div>
			</div>
			<div class="row">
				<div class="text-benefit col-sm-6">
					<h3 class="text-benefit-title">Collaborate with ease</h3>
					<p>Data science teams are frequently physically separated and as such
					instant collaboration becomes important to avoid time wasters, such
					as sending files via email, downloading and re uploading files with Git
					repositories, etc.</p>
								
					<p>3Blades collaboration engine uses proven techniques to instantly
					update team members on project updates and enable real time collaboration
					on your data science files.</p>
				</div>
				<div class="text-benefit col-sm-6">
					<h3 class="text-benefit-title">Rest easy with secure storage</h3>
					<p>It goes without saying that secure storage with 100% reliability is a
					must. 3Blades has multiple file synchronization options for you to store
					your data, such as GitHub, Google Drive and Dropbox.</p>
								
					<p>You can also use 3Blades's native file storage services based on
					Amazon S3. Not only is your data guaranteed to be available (even in
					case of disasters) but is also encrypted with military grade ciphers.</p>
				</div>
			</div>
		</div>
	</div>
</div>

		
		<div id="testimonials" class="container">
			<h2>What People Say About 3Blades</h2>
			<div class="row">
				<div class="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
					<div class="owl-carousel">
						<div class="testimonial">
							<img class="testimonial-img" alt="Brian Watters"
								src="<?php echo get_stylesheet_directory_uri(); ?>/img/testimonial-brian-watters.jpg">
							<p>Before I started using 3Blades, I would struggle to get my data science
							projects completed in a timely manner due to SysAdmin issues. 3Blades
							eliminates the obstacles completely.</p>
							<p>- Briand Watters - Freelance Data Scientist</p>
						</div>
						<div class="testimonial">
							<img class="testimonial-img" alt="Brian Watters"
								src="<?php echo get_stylesheet_directory_uri(); ?>/img/testimonial-brian-watters.jpg">
							<p>The 3Blades team has helped us obtain strict data analysis deadlines
							by offering an easy to use web based service.</p>
							<p>- Andrés Pineda, Reachcore</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="newsletter2">
			<div class="container">
				<div class="col-sm-10 col-sm-offset-1">
					<h2 id="newsletter2-title">Subscribe to our newsletter</h2>
					<span id="newsletter2-label">We will send you Data Science, Machine Learning,
					Data Mining, Data Visualisation news and tips on how to build and share data
					science projects with 3Blades.</span>
					<form id="newsletter2-form" method="post">
						<input class="text-field" type="email" placeholder="Enter your e-mail here">
						<input class="btn btn-cta2" type="submit" value="SUBSCRIBE NOW">
					</form>
				</div>
			</div>
		</div>
		<div id="contact" class="container">
			<div class="row">
				<div class="col-lg-4 col-lg-offset-2 col-sm-5 col-sm-offset-1">
					<h2>Contact Info</h2>
					<p>Now, with a few clicks data scientists can obtain a full featured
					environment to run, save and share their projects securely and
					effectively.</p>
					
					<p>3Blades,<br>
					3423 Piedmont Road NE<br>
					Atlanta, Georgia 30305<br>
					Email: contact@3blades.io</p>
					
					<p><a class="contact-link" href="http://3blades.io/blog/legal/privacy-policy/">Privacy Policy</a>
					&nbsp;&nbsp;&nbsp;
					<a class="contact-link" href="http://3blades.io/blog/legal/terms-and-conditions/">Terms and Conditions</a></p>
				</div>
				<div class="col-lg-4 col-lg-offset-1 col-sm-5">
					<h2>Contact Us</h2>
					<?php echo do_shortcode( '[contact-form-7 id="222" title="Contact form 1"]' ); ?>
				</div>
			</div>
		</div>
	</div>
	
	<footer>
		<div>
			<a href="https://twitter.com/3Bladesio"><i class="fa fa-twitter" aria-hidden="true"></i></a>
			<a href="https://www.facebook.com/3bladesio"><i class="fa fa-facebook" aria-hidden="true"></i></a>
			<a href="https://www.linkedin.com/company/3blades"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
		</div>
		Copyright &copy; 2015-2016 3Blades.io,
		Made with <i class="fa fa-heart" aria-hidden="true"></i> in Atlanta
	</footer>

	<script type="text/javascript">
	var loadedScripts = [],
		loadedStyles = [];
	
	function isLoadedStyle( handle ) {
		return ( 'undefined' !== typeof loadedStyles[ handle ] );
	}
	
	function loadStyle( handle, url, callback ) {
		if ( ! isLoadedStyle( handle ) ) {
			var link = document.createElement( 'link' ),
				head = document.getElementsByTagName( 'head' )[0];
			link.addEventListener( 'load', function(){
				loadedStyles[ handle ] = true;
				if ( 'undefined' !== typeof callback ) {
					callback.call();
				}
			});
			link.rel = 'stylesheet';
			link.href = url;
			head.appendChild( link, head );
		}
	}
	
	function isLoadedScript( handle ) {
		return ( 'undefined' !== typeof loadedScripts[ handle ] );
	}
	
	function loadScript( handle, url, callback ) {
		if ( ! isLoadedScript( handle ) ) {
			var script = document.createElement( 'script' ),
				head = document.getElementsByTagName( 'head' )[0];
			script.addEventListener( 'load', function(){
				loadedScripts[ handle ] = true;
				if ( 'undefined' !== typeof callback ) {
					callback.call();
				}
			});
			script.src = url;
			head.appendChild( script, head );
		}
	}
	
	var cb = function() {
		loadScript( 'jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js', function(){
			loadScript( 'bootstrap', '<?php echo get_stylesheet_directory_uri(); ?>/libraries/bootstrap/js/bootstrap.min.js' );
			loadScript( 'particles', '<?php echo get_stylesheet_directory_uri(); ?>/libraries/particles/particles.min.js', function() {
				particlesJS.load('newsletter', '<?php echo get_stylesheet_directory_uri(); ?>/libraries/particles/particlesjs-config.json', function(){
				} );
				particlesJS.load('newsletter2', '<?php echo get_stylesheet_directory_uri(); ?>/libraries/particles/particlesjs-config.json', function(){
				} );
			} );
			loadScript( 'owl-carousel', '<?php echo get_stylesheet_directory_uri(); ?>/libraries/owl-carousel/owl.carousel.min.js', function() {
				$(".owl-carousel").owlCarousel({
					items: 1,
					dots: true,
				});
			} );
		});
	};
	
	var raf = requestAnimationFrame || mozRequestAnimationFrame ||
	webkitRequestAnimationFrame || msRequestAnimationFrame;
	if (raf) raf(cb);
	else window.addEventListener('load', cb);
	</script>
<!-- Drip -->
<script type="text/javascript">
  var _dcq = _dcq || [];
  var _dcs = _dcs || {}; 
  _dcs.account = '2514871';
  
  (function() {
    var dc = document.createElement('script');
    dc.type = 'text/javascript'; dc.async = true; 
    dc.src = '//tag.getdrip.com/2514871.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(dc, s);
  })();
</script>
	<?php wp_footer(); ?>
</body>
</html>
