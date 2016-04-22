<form role="search" method="get" id="searchform" class="searchform" action="<?php echo site_url(); ?>">
	<div>
		<label class="screen-reader-text" for="s">Search for:</label>
		<input type="text" value="" name="s" id="s" placeholder="<?php _e( 'Search in 3Blades', 'theme' ); ?>" />
		<input type="submit" id="searchsubmit" value="Search" />
	</div>
</form>