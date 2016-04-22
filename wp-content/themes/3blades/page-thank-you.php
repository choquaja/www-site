<?php
/**
 * Template Name: Sign Up Form
 */

$file = 'log.txt';
$fp = fopen( $file, 'a' ) or die( 'fail' );
fwrite( $fp, $_GET['__s'] . "\r\n" );
fclose( $fp );
$total_registrations = count( file( $file ) ) + 325;

add_filter( 'hide_sidebar', '__return_true' );

get_header();

if ( have_posts() ) {
	while ( have_posts() ) {
		the_post();
?>
		<div id="thank-you" class="post">
	            	<h1 style="margin-top: -60px;" id="thank-you-title">Thank You</h1>
					<p id="thank-you-text">You're #<?php echo $total_registrations; ?> in line for access. <br> You will receive an email with your early access information soon.</p>
					
					<p id="thank-you-text-2">Meanwhile, you can share this personal link with your friends <br> so they can get early access too:</p>
					
					<div id="thank-you-link-wrapper">
						<span id="thank-you-link">http://3blades.io/sign-up-form.html?r=<?php echo $_GET['__s']; ?></span>
					</div>
					
					<div id="twitter-btn">
						<a href="https://twitter.com/share" class="twitter-share-button" data-url="http://3blades.io/sign-up-form.html?r=<?php echo $_GET['__s']; ?>" data-text="Get Early Access to 3Blades" data-via="3Bladesio">Tweet</a>
						<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
					</div>
					<div id="facebook-btn">
						<div class="fb-share-button" data-href="http://3blades.io/sign-up-form.html?r=<?php echo $_GET['__s']; ?>" data-layout="button"></div>
					</div>
		</div>
<?php
	}
}

get_footer();