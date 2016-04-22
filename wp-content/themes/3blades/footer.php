				</div>
				<?php
				if ( apply_filters( 'hide_sidebar', false ) === false ) {
				?>
					<div class="col-sm-3">
						<?php get_sidebar(); ?>
					</div>
				<?php
				}
				?>
			</div>
		</div>
		<?php
		/* -------------------------------------------------------------
		 * - Contact -
		 * ------------------------------------------------------------- */
		?><div id="contact" class="container">
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
	</div><?php // /#body ?>
	
	<?php
	/* -------------------------------------------------------------
	 * - Footer -
	 * ------------------------------------------------------------- */
	?><footer>
		<div>
			<a href="https://twitter.com/3Bladesio"><i class="fa fa-twitter" aria-hidden="true"></i></a>
			<a href="https://www.facebook.com/3bladesio"><i class="fa fa-facebook" aria-hidden="true"></i></a>
			<a href="https://www.linkedin.com/company/3blades"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
		</div>
		Copyright &copy; 2015-2016 3Blades.io,
		Made with <i class="fa fa-heart" aria-hidden="true"></i> in Atlanta by <a href="https://www.shugert.com.mx">Shugert</a>
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
		});
	};
	
	var raf = requestAnimationFrame || mozRequestAnimationFrame ||
	webkitRequestAnimationFrame || msRequestAnimationFrame;
	if (raf) raf(cb);
	else window.addEventListener('load', cb);
	</script>
<?php
if ( is_single() ) {
?>
	<div id="disqus_thread"></div>
<script type="text/javascript">
    /* * * CONFIGURATION VARIABLES * * */
    var disqus_shortname = '3blades';
    
    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
<?php
}
?>
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