<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="3Blades.io">
    <link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri() . '/'; ?>img/favico.ico" type="image/x-icon">
	<title><?php wp_title(); ?></title>
	
	<link href="<?php echo get_stylesheet_directory_uri(); ?>/libraries/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link href="<?php echo get_stylesheet_directory_uri(); ?>/style.css" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet">
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet">

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
<?php
/* -------------------------------------------------------------
 * # HTML #
 * ============================================================= */
?>
<body id="internal">
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '163512514007032',
      xfbml      : true,
      version    : 'v2.5'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
	<header>
		<div class="container">
			<div class="row">
				<?php
				/* -------------------------------------------------------------
				 * - Logo -
				 * ------------------------------------------------------------- */
				?><div id="logo" class="col-lg-3 col-sm-4 col-xs-8">
					<a id="logo-link" class="img-responsive" href="<?php echo site_url(); ?>">
						<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/logo-3blades.png" alt="3Blades">
					</a>
				</div>
				<div class="col-xs-4 visible-xs">
					<?php
					/* -------------------------------------------------------------
					 * - Menu Toggle -
					 * ------------------------------------------------------------- */
					?><div id="menu-toggle">
						<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#menu" aria-expanded="false" aria-controls="menu">
						  <i class="fa fa-bars"></i>
						</button>
					</div>
				</div>
				<div class="col-lg-9 col-sm-8 col-xs-12">
					<?php
					/* -------------------------------------------------------------
					 * - Menu -
					 * ------------------------------------------------------------- */
					?><nav id="menu" class="collapse">
						<ul class="menu-list">
							<li class="menu-item"><a class="menu-link" href="<?php echo site_url(); ?>">Home</a></li>
							<li class="menu-item"><a class="menu-link" href="<?php echo site_url(); ?>/#features">Features</a></li>
							<li class="menu-item"><a class="menu-link" href="<?php echo site_url(); ?>/#contact">Contact</a></li>
                            <li class="menu-item"><a class="menu-link" href="http://support.3blades.io/hc/en-us" rel="nofollow">Support</a>
							<li class="menu-item"><a class="menu-link" href="<?php echo site_url(); ?>/blog/">Blog</a></li>
						</ul>
						<ul id="feat-menu-list" class="menu-list">
							<li class="menu-item"><a class="menu-link btn" href="https://go.3blades.io/">SIGN IN</a></li>
							<li class="menu-item"><a class="menu-link btn btn-cta" href="<?php echo site_url(); ?>/sign-up-form/">GET EARLY ACCESS</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</header>
	
	<div id="body">
		<div class="container">
			<div class="row">
				<?php
				if ( apply_filters( 'hide_sidebar', false ) === true ) {
				?>
					<div class="col-sm-12">
				<?php
				} else {
				?>
					<div class="col-sm-9">
				<?php
				}
				?>