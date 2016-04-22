<?php
get_header();

if ( have_posts() ) {

	if ( ! function_exists( 'new_excerpt_more' ) ) {
		function new_excerpt_more( $more ) {
			return ' ... <a class="read-more" href="' . get_permalink( get_the_ID() ) . '">' . __( 'Read More', 'theme' ) . '</a>';
		}
	}
	
	add_filter( 'excerpt_more', 'new_excerpt_more' );

	while ( have_posts() ) {
		the_post();
?>
		<div class="post">
			<?php the_post_thumbnail( 'archive', 'class=img-responsive' ); ?>
			<h2 class="post-title">
				<a class="post-title-link" href="<?php the_permalink(); ?>">
					<?php the_title(); ?>
				</a>
			</h2>
			
			<div class="post-meta">
				Published on <em><?php echo get_the_date( 'F d, Y' ); ?></em> in <span class="post-categories"><?php the_category( ', ' ); ?></span>
			</div>
			
			<div class="post-excerpt">
				<?php the_excerpt(); ?>
			</div>
		</div>
<?php
	}
	
	global $wp_query;
	
	echo paginate_links( array(
		'base' => site_url() . '/%_%',
		'format' => 'page/%#%/',
		'total' => $wp_query->max_num_pages,
		'current' => ( $wp_query->query_vars['paged'] ) ? $wp_query->query_vars['paged'] : 1,
		
	) );
} else {
	echo '<h2>' . __( 'No posts were found', 'theme' ) . '</h2>';
}
get_footer();