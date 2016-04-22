<?php
get_header();

if ( have_posts() ) {
	while ( have_posts() ) {
		the_post();
?>
		<div class="post">
			<h1 class="post-title"><?php the_title(); ?></h1>
			
			<?php the_post_thumbnail( 'archive', 'class=img-responsive' ); ?>
			
			<div class="single-post-meta post-meta">
				<div>
					Published on <span class="post-date"><?php echo get_the_date( 'F d, Y' ); ?></span>
					in <span class="post-terms"><?php the_category( ', ' ); ?></span> 
					<span class="post-terms"><?php the_tags( '<i class="fa fa-tags"></i> Tags: ', ', ' ); ?></span>
				</div>
			</div>
			
			<div class="post-content">
				<?php the_content(); ?>
				<a href="https://twitter.com/share" class="twitter-share-button" data-via="3Bladesio">Tweet</a>
				<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
				
				<a href="https://twitter.com/3Bladesio" class="twitter-follow-button" data-show-count="false">Follow @3Bladesio</a>
				<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
			</div>
		</div>
		
		<div id="post-author">
			<?php
			$author = get_the_author_meta( 'user_login' );
			
			if ( '3blades' == $author ) {
				$author_img = 'Greg-Werner';
				$author_name = 'Greg Werner';
				$author_description = "<p>Over 15 years of experience in Information Technology. Specialty in Software as a Service (SaaS) delivery models. View <a href=\"https://www.linkedin.com/pub/greg-werner/4/a25/736\" target=\"_blank\">Greg Werner's LinkedIn profile</a>.</p>";
			} else {
				$author_img = 'Samuel-Noriega';
				$author_name = 'Samuel Noriega';
				$author_description = "<p>Over 10 years of experience in IT and digital marketing. Proud dad, entrepreneur and technology enthusiast. Let's connect on <a href=\"    https://www.linkedin.com/in/samuelnoriega\" target=\"_blank\">LinkedIn!</a></p>";
			}
			?>
			<div class="row">
				<div class="col-sm-3 col-md-2">
					<img src="/img/landing/<?php echo $author_img; ?>.jpg" alt="<?php echo $author_name; ?>" class="img-responsive img-circle">
				</div>
				<div class="col-sm-9 col-md-10">
					<p id="post-author-name"><strong><?php echo $author_name; ?></strong></p>
					<?php echo $author_description; ?>
				</div>
			</div>
		</div>
		<br />
	       <section id="disqus_thread"></section><!-- /#disqus_thread -->
<?php
	}
} else {
	echo '<h2>' . __( 'No posts were found', 'theme' ) . '</h2>';
}

get_footer();