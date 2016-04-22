<?php
/**
 * Template Name: Blog Archive
 */
get_header();


	$entries = new WP_Query( array(
		'posts_per_page' => -1,
	) );
	
	if ( $entries->have_posts() ) {
		$current_month = '';
	?>
			<?php
			while ( $entries->have_posts() ) {
			?>
				
					<?php
					$entries->the_post();
					
					$post_month = get_the_date( 'F Y' );
					
					if ( $current_month == '' ) {
					?>
						<p>Here you can view a list of all <?php echo $entries->found_posts; ?> articles that were added to this site, sorted from newest to oldest.</p>
						<?php echo $post_month; ?><ul>
					<?php
					}
					
					if ( $current_month != $post_month ) {
						if ( $current_month != '' ) {
					?>
							</ul><?php echo $post_month; ?><ul>
						<?php
						}
						
						$current_month = $post_month;
					}
					?>
					<li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
			<?php
			}
			?>
		</ul>
	<?php
	}

get_footer();