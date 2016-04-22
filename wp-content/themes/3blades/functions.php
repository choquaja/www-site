<?php
/* -------------------------------------------------------------
 * - Post Thumbnails -
 * ------------------------------------------------------------- */
 
/** Add Theme Support */
add_theme_support( 'post-thumbnails' );

/** Add Image Sizes */
add_image_size( 'archive', 850, 400, true );
add_image_size( 'single', 850 );
add_image_size( 'recent-posts', 90, 90, true );


/* -------------------------------------------------------------
 * - Dynamic Sidebars (Widgets) -
 * ------------------------------------------------------------- */

/** Register Sidebar */
register_sidebar( array(
	'id' => 'main',
	'name' => __( 'Main', 'theme' ),
	'description' => __( 'Main sidebar', 'theme' ),
) );

/** Register Widgets */
function theme_register_widgets() {
	register_widget( 'ThemeCategories' );
	register_widget( 'ThemeRecentPosts' );
}

add_action( 'widgets_init', 'theme_register_widgets' );

/** ThemeCategories Widget */
class ThemeCategories extends WP_Widget {

	function __construct() {
		parent::__construct(
			// Base ID of your widget
			'theme_categories', 

			// Widget name will appear in UI
			__('Theme Categories', 'theme'), 

			// Widget description
			array( 'description' => __( 'Categories cloud', 'theme' ), ) 
		);
	}

	// Creating widget front-end
	// This is where the action happens
	public function widget( $args, $instance ) {
		echo '<li class="widget">';
			$categories = get_terms( 'category', array(
				'hide_empty' => false,
			) );
			
			echo '<h3>' . __( 'Categories', 'theme' ) . ':</h3>';
			
			foreach ( $categories as $category ) {
				echo '<a class="category-cloud-item"
							href="' . get_term_link( $category, 'category' ) . '">'
							. $category->name . '</a> ';
			}
			
		echo '</li>';
	}

	// Widget Backend 
	public function form( $instance ) {
		if ( isset( $instance[ 'title' ] ) ) {
			$title = $instance[ 'title' ];
		}
		else {
			$title = __( 'New title', 'wpb_widget_domain' );
		}
		// Widget admin form
		?>
		<p>
		<label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title:' ); ?></label> 
		<input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" />
		</p>
		<?php 
	}
	
	// Updating widget replacing old instances with new
	public function update( $new_instance, $old_instance ) {
		$instance = array();
		$instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
		return $instance;
	}
}

/** ThemeRecentPosts Widget */
class ThemeRecentPosts extends WP_Widget {

	function __construct() {
		parent::__construct(
			// Base ID of your widget
			'theme_recentposts',

			// Widget name will appear in UI
			__('Theme Recent Posts', 'theme'), 

			// Widget description
			array( 'description' => __( 'Recent posts', 'theme' ), ) 
		);
	}

	// Creating widget front-end
	// This is where the action happens
	public function widget( $args, $instance ) {
		echo '<li class="widget">';
			echo '<h3>' . __( 'May Be of Interest To You', 'theme' ) . ':</h3>';
			
			$entries = new WP_Query( array( 
				'posts_per_page' => 5,
			) );
			
			if ( $entries->have_posts() ) {
				while ( $entries->have_posts() ) {
					$entries->the_post();
				?>
					<div class="recent-post">
						<?php the_post_thumbnail( 'recent-posts', 'class=recent-post-thumb' ); ?>
						<h2 class="post-title recent-post-title">
							<a class="post-title-link" href="<?php the_permalink(); ?>">
								<?php the_title(); ?>
							</a>
						</h2>
						<div class="recent-post-meta">
							<span class="post-date"><?php echo get_the_date( 'F d, Y' ); ?></span><br>
							<span class="post-categories"><?php the_category( ', ' ); ?></span>
						</div>
					</div>
				<?php
				}
			} else {
			?>
				<p>No results were found</p>
			<?php
			}
		echo '</li>';
	}

	// Widget Backend 
	public function form( $instance ) {
		if ( isset( $instance[ 'title' ] ) ) {
			$title = $instance[ 'title' ];
		}
		else {
			$title = __( 'New title', 'wpb_widget_domain' );
		}
		// Widget admin form
		?>
		<p>
		<label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title:' ); ?></label> 
		<input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" />
		</p>
		<?php 
	}
	
	// Updating widget replacing old instances with new
	public function update( $new_instance, $old_instance ) {
		$instance = array();
		$instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
		return $instance;
	}
}