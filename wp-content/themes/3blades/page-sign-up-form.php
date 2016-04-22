<?php
/**
 * Template Name: Sign Up Form
 */

add_filter( 'hide_sidebar', '__return_true' );

get_header();

if ( have_posts() ) {
	while ( have_posts() ) {
		the_post();
?>
		<div class="post">
			<h1 class="post-title"><?php the_title(); ?></h1>
			
                	<form id="sign-up-form" autocomplete="on" action="https://www.getdrip.com/forms/1219271/submissions" method="POST" data-drip-embedded-form="1219271">
								<div class="col-md-12">
									<span id="sign-up-text">Save time and money by streamlining your data science projects. Sign up today for private Beta access.</span>
								</div>
      							<div class="col-md-12">
      								<label for="fname">Name *</label>
      							</div>
										<div class="col-md-6">
											<div id="fname-field" class="input-group">
																								<input
													class="field-element field-control" name="fields[name]" 
													x-autocompletetype="given-name" type="text" 
													spellcheck="false" maxlength="30" 
													data-title="First" placeholder="First Name">
											</div>
										</div>
										<div class="col-md-6">
											<div class="input-group">
																								<input
													class="field-element field-control" name="fields[last_name]" 
													x-autocompletetype="given-name" type="text" 
													spellcheck="false" maxlength="30" data-title="First" 
													placeholder="Last Name">
											</div>
										</div>
										<div class="col-md-12 email-form">
											<label for="email">Email *</label>
											<br>
																						<input 
												class="field-element" name="fields[email]" x-autocompletetype="email" 
												type="text" spellcheck="false" 
												id="email-yui_3_17_2_1_1433219632866_7325-field" 
												placeholder="Email">
										</div>
										<div class="col-md-12">
											<button class="btn btn-lg btn-primary btn-submit" type="submit">
												SUBMIT
											</button>
										</div>
      						</form>
		</div>
<?php
	}
}

get_footer();