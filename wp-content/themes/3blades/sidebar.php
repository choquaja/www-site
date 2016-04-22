<ul class="dynamic-sidebar">
	<?php dynamic_sidebar( 'main' ); ?>
	<li class="widget">
		<?php
		$entries = new WP_Query( array(
			'posts_per_page' => 5,
			'paged' => 2,
		) );
		
		if ( $entries->have_posts() ) {
			while ( $entries->have_posts() ) {
				$entries->the_post();
		?>
				<div class="old-post">
					<h2 class="post-title recent-post-title"><a class="post-title-link" href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
				</div>
		<?php
			}
		}
		
		$entries = new WP_Query( array(
			'posts_per_page' => 5,
			'paged' => 3,
		) );
		
		if ( $entries->have_posts() ) {
			while ( $entries->have_posts() ) {
				$entries->the_post();
		?>
				<div class="old-post">
					<h2 class="post-title recent-post-title"><a class="post-title-link" href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
				</div>
		<?php
			}
		}
		?>
			<div class="old-post">
				<a class="post-title-link" href="<?php echo site_url(); ?>/blog-archive/">View all posts</a>
			</div>
	</li>
</ul>