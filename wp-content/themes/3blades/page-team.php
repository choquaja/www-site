<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title><?php wp_title(); ?></title>

	<?php
	/* -------------------------------------------------------------
	 * # CSS #
	 * ============================================================= */
	?><style type="text/css">
	html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}*:before,*:after{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:rgba(0,0,0,0)}body{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857143;color:#333;background-color:#fff}input,button,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#337ab7;text-decoration:none}a:hover,a:focus{color:#23527c;text-decoration:underline}a:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}figure{margin:0}img{vertical-align:middle}.img-responsive{display:block;max-width:100%;height:auto}.img-rounded{border-radius:6px}.img-thumbnail{padding:4px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:4px;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;display:inline-block;max-width:100%;height:auto}.img-circle{border-radius:50%}hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}.sr-only{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}[role="button"]{cursor:pointer}.container{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}@media (min-width:768px){.container{width:750px}}@media (min-width:992px){.container{width:970px}}@media (min-width:1200px){.container{width:1170px}}.container-fluid{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}.row{margin-left:-15px;margin-right:-15px}.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12{position:relative;min-height:1px;padding-left:15px;padding-right:15px}.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12{float:left}.col-xs-12{width:100%}.col-xs-11{width:91.66666667%}.col-xs-10{width:83.33333333%}.col-xs-9{width:75%}.col-xs-8{width:66.66666667%}.col-xs-7{width:58.33333333%}.col-xs-6{width:50%}.col-xs-5{width:41.66666667%}.col-xs-4{width:33.33333333%}.col-xs-3{width:25%}.col-xs-2{width:16.66666667%}.col-xs-1{width:8.33333333%}.col-xs-pull-12{right:100%}.col-xs-pull-11{right:91.66666667%}.col-xs-pull-10{right:83.33333333%}.col-xs-pull-9{right:75%}.col-xs-pull-8{right:66.66666667%}.col-xs-pull-7{right:58.33333333%}.col-xs-pull-6{right:50%}.col-xs-pull-5{right:41.66666667%}.col-xs-pull-4{right:33.33333333%}.col-xs-pull-3{right:25%}.col-xs-pull-2{right:16.66666667%}.col-xs-pull-1{right:8.33333333%}.col-xs-pull-0{right:auto}.col-xs-push-12{left:100%}.col-xs-push-11{left:91.66666667%}.col-xs-push-10{left:83.33333333%}.col-xs-push-9{left:75%}.col-xs-push-8{left:66.66666667%}.col-xs-push-7{left:58.33333333%}.col-xs-push-6{left:50%}.col-xs-push-5{left:41.66666667%}.col-xs-push-4{left:33.33333333%}.col-xs-push-3{left:25%}.col-xs-push-2{left:16.66666667%}.col-xs-push-1{left:8.33333333%}.col-xs-push-0{left:auto}.col-xs-offset-12{margin-left:100%}.col-xs-offset-11{margin-left:91.66666667%}.col-xs-offset-10{margin-left:83.33333333%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-8{margin-left:66.66666667%}.col-xs-offset-7{margin-left:58.33333333%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-5{margin-left:41.66666667%}.col-xs-offset-4{margin-left:33.33333333%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-2{margin-left:16.66666667%}.col-xs-offset-1{margin-left:8.33333333%}.col-xs-offset-0{margin-left:0}@media (min-width:768px){.col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12{float:left}.col-sm-12{width:100%}.col-sm-11{width:91.66666667%}.col-sm-10{width:83.33333333%}.col-sm-9{width:75%}.col-sm-8{width:66.66666667%}.col-sm-7{width:58.33333333%}.col-sm-6{width:50%}.col-sm-5{width:41.66666667%}.col-sm-4{width:33.33333333%}.col-sm-3{width:25%}.col-sm-2{width:16.66666667%}.col-sm-1{width:8.33333333%}.col-sm-pull-12{right:100%}.col-sm-pull-11{right:91.66666667%}.col-sm-pull-10{right:83.33333333%}.col-sm-pull-9{right:75%}.col-sm-pull-8{right:66.66666667%}.col-sm-pull-7{right:58.33333333%}.col-sm-pull-6{right:50%}.col-sm-pull-5{right:41.66666667%}.col-sm-pull-4{right:33.33333333%}.col-sm-pull-3{right:25%}.col-sm-pull-2{right:16.66666667%}.col-sm-pull-1{right:8.33333333%}.col-sm-pull-0{right:auto}.col-sm-push-12{left:100%}.col-sm-push-11{left:91.66666667%}.col-sm-push-10{left:83.33333333%}.col-sm-push-9{left:75%}.col-sm-push-8{left:66.66666667%}.col-sm-push-7{left:58.33333333%}.col-sm-push-6{left:50%}.col-sm-push-5{left:41.66666667%}.col-sm-push-4{left:33.33333333%}.col-sm-push-3{left:25%}.col-sm-push-2{left:16.66666667%}.col-sm-push-1{left:8.33333333%}.col-sm-push-0{left:auto}.col-sm-offset-12{margin-left:100%}.col-sm-offset-11{margin-left:91.66666667%}.col-sm-offset-10{margin-left:83.33333333%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-8{margin-left:66.66666667%}.col-sm-offset-7{margin-left:58.33333333%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-5{margin-left:41.66666667%}.col-sm-offset-4{margin-left:33.33333333%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-2{margin-left:16.66666667%}.col-sm-offset-1{margin-left:8.33333333%}.col-sm-offset-0{margin-left:0}}@media (min-width:992px){.col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12{float:left}.col-md-12{width:100%}.col-md-11{width:91.66666667%}.col-md-10{width:83.33333333%}.col-md-9{width:75%}.col-md-8{width:66.66666667%}.col-md-7{width:58.33333333%}.col-md-6{width:50%}.col-md-5{width:41.66666667%}.col-md-4{width:33.33333333%}.col-md-3{width:25%}.col-md-2{width:16.66666667%}.col-md-1{width:8.33333333%}.col-md-pull-12{right:100%}.col-md-pull-11{right:91.66666667%}.col-md-pull-10{right:83.33333333%}.col-md-pull-9{right:75%}.col-md-pull-8{right:66.66666667%}.col-md-pull-7{right:58.33333333%}.col-md-pull-6{right:50%}.col-md-pull-5{right:41.66666667%}.col-md-pull-4{right:33.33333333%}.col-md-pull-3{right:25%}.col-md-pull-2{right:16.66666667%}.col-md-pull-1{right:8.33333333%}.col-md-pull-0{right:auto}.col-md-push-12{left:100%}.col-md-push-11{left:91.66666667%}.col-md-push-10{left:83.33333333%}.col-md-push-9{left:75%}.col-md-push-8{left:66.66666667%}.col-md-push-7{left:58.33333333%}.col-md-push-6{left:50%}.col-md-push-5{left:41.66666667%}.col-md-push-4{left:33.33333333%}.col-md-push-3{left:25%}.col-md-push-2{left:16.66666667%}.col-md-push-1{left:8.33333333%}.col-md-push-0{left:auto}.col-md-offset-12{margin-left:100%}.col-md-offset-11{margin-left:91.66666667%}.col-md-offset-10{margin-left:83.33333333%}.col-md-offset-9{margin-left:75%}.col-md-offset-8{margin-left:66.66666667%}.col-md-offset-7{margin-left:58.33333333%}.col-md-offset-6{margin-left:50%}.col-md-offset-5{margin-left:41.66666667%}.col-md-offset-4{margin-left:33.33333333%}.col-md-offset-3{margin-left:25%}.col-md-offset-2{margin-left:16.66666667%}.col-md-offset-1{margin-left:8.33333333%}.col-md-offset-0{margin-left:0}}@media (min-width:1200px){.col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12{float:left}.col-lg-12{width:100%}.col-lg-11{width:91.66666667%}.col-lg-10{width:83.33333333%}.col-lg-9{width:75%}.col-lg-8{width:66.66666667%}.col-lg-7{width:58.33333333%}.col-lg-6{width:50%}.col-lg-5{width:41.66666667%}.col-lg-4{width:33.33333333%}.col-lg-3{width:25%}.col-lg-2{width:16.66666667%}.col-lg-1{width:8.33333333%}.col-lg-pull-12{right:100%}.col-lg-pull-11{right:91.66666667%}.col-lg-pull-10{right:83.33333333%}.col-lg-pull-9{right:75%}.col-lg-pull-8{right:66.66666667%}.col-lg-pull-7{right:58.33333333%}.col-lg-pull-6{right:50%}.col-lg-pull-5{right:41.66666667%}.col-lg-pull-4{right:33.33333333%}.col-lg-pull-3{right:25%}.col-lg-pull-2{right:16.66666667%}.col-lg-pull-1{right:8.33333333%}.col-lg-pull-0{right:auto}.col-lg-push-12{left:100%}.col-lg-push-11{left:91.66666667%}.col-lg-push-10{left:83.33333333%}.col-lg-push-9{left:75%}.col-lg-push-8{left:66.66666667%}.col-lg-push-7{left:58.33333333%}.col-lg-push-6{left:50%}.col-lg-push-5{left:41.66666667%}.col-lg-push-4{left:33.33333333%}.col-lg-push-3{left:25%}.col-lg-push-2{left:16.66666667%}.col-lg-push-1{left:8.33333333%}.col-lg-push-0{left:auto}.col-lg-offset-12{margin-left:100%}.col-lg-offset-11{margin-left:91.66666667%}.col-lg-offset-10{margin-left:83.33333333%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-8{margin-left:66.66666667%}.col-lg-offset-7{margin-left:58.33333333%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-5{margin-left:41.66666667%}.col-lg-offset-4{margin-left:33.33333333%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-2{margin-left:16.66666667%}.col-lg-offset-1{margin-left:8.33333333%}.col-lg-offset-0{margin-left:0}}.clearfix:before,.clearfix:after,.container:before,.container:after,.container-fluid:before,.container-fluid:after,.row:before,.row:after{content:" ";display:table}.clearfix:after,.container:after,.container-fluid:after,.row:after{clear:both}.center-block{display:block;margin-left:auto;margin-right:auto}.pull-right{float:right !important}.pull-left{float:left !important}.hide{display:none !important}.show{display:block !important}.invisible{visibility:hidden}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.hidden{display:none !important}.affix{position:fixed}
	/* -------------------------------------------------------------
	 * - Document -
	 * ------------------------------------------------------------- */
	body{
		font: 18px/1.5 'Roboto', sans-serif !important;
		color: #424242 !important;
		text-align: center;
	}
	em{
		font-style: normal;
		color: #3EAD2C;
	}
	/** Small Devices */
	@media( min-width: 768px ) {
		p{
			text-align: inherit;
		}
	}
	/* -------------------------------------------------------------
	 * - Links -
	 * ------------------------------------------------------------- */
	#body a{
		color: #3EAD2C;
	}
	#body a:hover,
	#body a:focus{
		color: #133359;
		text-decoration: none;
	}
	/* -------------------------------------------------------------
	 * - Titles -
	 * ------------------------------------------------------------- */
	h1, h2, h3, h4, h5{
		font-weight: 400;
		text-align: inherit;
	}
	h3{
		font-size: 20px;
	}
	#body h1 a,
	#body h2 a,
	#body h3 a,
	#body h4 a,
	#body h5 a{
		color: inherit;
	}
	#body h1 a:hover, #body h1 a:focus,
	#body h2 a:hover, #body h2 a:focus,
	#body h3 a:hover, #body h3 a:focus,
	#body h4 a:hover, #body h4 a:focus,
	#body h5 a:hover, #body h5 a:focus{
		text-decoration: none;
		color: #3EAD2C;
	}
	/** Large Devices */
	@media( min-width: 1200px ) {
		h2{
			font-size: 36px;
		}
		h3{
			font-size: 22px;
		}
	}
	/* -------------------------------------------------------------
	 * - Images -
	 * ------------------------------------------------------------- */
	img{
		display:inline-block;
		max-width:100%; height:auto;
	}
	/* -------------------------------------------------------------
	 * - Buttons -
	 * ------------------------------------------------------------- */
	button,
	input[type="submit"]{
		border: none;
	}
	.btn{
		display: inline-block;
		padding: 10px 15px;
		color: #FFF !important;
		font-weight: 700 !important;
		background: #133359;
		-webkit-border-radius: 2px;
		-moz-border-radius: 2px;
		border-radius: 2px;
	}
	.btn:hover,
	.btn:focus{
		text-decoration: none;
		background: #0A1A2E;
	}
	.btn-cta{
		background: #0AAD2C;
	}
	.btn-cta:hover,
	.btn-cta:focus{
		background: #077D21;
	}
	.btn-cta2{
		background: #2196F3;
	}
	.btn-cta2:hover,
	.btn-cta2:focus{
		background: #0A6CBD;
	}
	/* -------------------------------------------------------------
	 * - Header -
	 * ------------------------------------------------------------- */
	header{
		z-index: 2;
		position: fixed;
		padding: 15px 0;
		background: #FFF;
		border-bottom: 1px solid #EAEAEA;
		-webkit-box-shadow: 0px 0px 10px 0px rgba(234,234,234,1);
		-moz-box-shadow: 0px 0px 10px 0px rgba(234,234,234,1);
		box-shadow: 0px 0px 10px 0px rgba(234,234,234,1);
	}
	#body{
		padding-top: 100px !important;
	}
	/** Small Devices */
	@media( min-width: 768px ) {
		header{
			width: 100%;
		}
		#body{
			padding-top: 150px !important;
		}
	}
	/** Medium Devices */
	@media( min-width: 992px ) {
		#body{
			padding-top: 120px !important;
		}
	}
	/* -------------------------------------------------------------
	 * - Logo -
	 * ------------------------------------------------------------- */
	#logo-link{
		display: inline-block;
	}
	/** Small Devices */
	@media( min-width: 768px ) {
		#logo{
			padding-top: 20px;
			text-align: left;
		}
	}
	/** Medium Devices */
	@media( min-width: 992px ) {
		#logo{
			padding-top: 5px;
		}
	}
	/** Large Devices */
	@media( min-width: 1200px ) {
		#logo{
			padding-top: 10px;
		}
	}
	/* -------------------------------------------------------------
	 * - Menu Toggle -
	 * ------------------------------------------------------------- */
	#menu-toggle .btn{
		padding: 5px 20px;
	}
	/* -------------------------------------------------------------
	 * - Menu -
	 * ------------------------------------------------------------- */
	.menu-list{
		margin: 0; padding: 0;
		list-style: none;
	}
	.menu-item{
		margin: 10px 0;
	}
	.menu-link{
		display: inline-block;
		font-weight: 500; font-size: 16px;
		color: #292D2E;
	}
	.menu-link:hover,
	.menu-link:focus{
		color: #0AAD2C;
		text-decoration: none;
	}
	/** Small Devices */
	@media( min-width: 768px ) {
		#menu{
			display: block !important;
		}
		#feat-menu-list{
			padding-top: 10px;
		}
		.menu-list{
			float: right;
			text-align: right;
		}
		.menu-item{
			float: left;
			margin: 0 0 0 10px;
		}
		#login-btn{
			clear: left;
		}
	}
	/** Medium Devices */
	@media( min-width: 992px ) {
		#menu{
			padding-top: 5px;
			text-align: right;
		}
		#feat-menu-list{
			padding-top: 0;
		}
		.menu-list{
			float: none;
			display: inline-block;
		}
		.menu-link{
			padding: 0;
			line-height: 42px;
		}
		.menu-link.btn{
			padding: 0 10px;
		}
	}
	/** Large Devices */
	@media( min-width: 1200px ) {
		.menu-link{
			margin-left: 15px;
			font-size: 18px; line-height: 52px;
		}
		.menu-link.btn{
			margin-left: 5px; padding: 0 20px;
		}
	}
	/* -------------------------------------------------------------
	 * - Body -
	 * ------------------------------------------------------------- */
	#body{
		padding: 30px 0;
	}
	/** Small Devices */
	@media( min-width: 768px ) {
		#body{
			padding: 30px 0;
			text-align: left;
		}
	}
	/* -------------------------------------------------------------
	 * - Post -
	 * ------------------------------------------------------------- */
	.post{
		padding-bottom: 10px;
		text-align: left;
	}
	.post-title{
		margin: 20px 0 10px;
		font-weight: 700; font-size: 28px; line-height: 1.1;
		color: #000;
	}
	h1.post-title{
		margin-bottom: 30px;
		font-size: 48px;
	}
	.post-meta{
		margin-bottom: 10px;
		font-size: 13px;
	}
	.single-post-meta{
		margin-top: 30px;
	}
	.post-excerpt p{
		margin: 0 0 20px;
	}
	.post img{
		-webkit-border-radius: 3px;
		-moz-border-radius: 3px;
		border-radius: 3px;
	}
	.post h2{
		font-size: 24px;
	}
	.post li{
		margin-bottom: 20px;
	}
	/** Small Devices */
	@media( min-width: 768px ) and (max-width: 991px ){
		#s,
		#searchsubmit{
			width: 100%;
		}
		#searchsubmit{
			margin-top: 5px;
		}
		.category-cloud-item{
			font-size: 11px;
		}
		.recent-post{
			padding: 0;
		}
		.recent-post-thumb{
			position: relative;
			max-width: 100%;
			margin-bottom: 5px;
		}
	}

	
	/** Sidebar */
	.dynamic-sidebar{
		padding: 0;
		list-style: none;
	}

	.widget{
		overflow: hidden;
		margin: 0 !important; padding: 10px 0;
		border-radius: 0;
		text-align: left;
	}

	.widget:first-child{
		margin-top: 0; padding-top: 0;
	}

	.widget label,
	.widget h3{
		display: block;
		margin-bottom: 15px;
		font-size: 18px; line-height: 1; font-weight: 400;
		color: #000;
	}

	.widgettitle{
		margin: 0;
		font-size: 22px;
		color: #676A6C;
	}

	#s{
		float: left;
		margin: 0; padding: 0 10px;
		width: 60%;
		line-height: 38px; font-size: 12px;
		border: 1px solid #DDD;
	}

	#searchsubmit{
		float: right;
		margin: 0; padding: 0 20px;
		width: 38%;
		font: 14px/40px "Montserrat",sans-serif;
		text-transform: uppercase;
		color: #FFF;
		background: #42A52E;
		border: none;
		-webkit-border-radius: 3px;
		-moz-border-radius: 3px;
		border-radius: 3px;
	}

	#searchsubmit:hover{
		background: #133359;
	}

	.category-cloud-item{
		display: inline-block;
		margin: 3px 3px 3px 0; padding: 7px 15px;
		font: 14px/1.5 "Montserrat",sans-serif;
		text-transform: uppercase;
		color: #FFF !important;
		background: #42A52E;
		-webkit-border-radius: 3px;
		-moz-border-radius: 3px;
		border-radius: 3px;
	}

	.category-cloud-item:hover,
	.category-cloud-item:focus{
		color: #FFF;
		background: #133359;
	}

	.recent-post{
		position: relative;
		margin-bottom: 30px; padding-left: 100px;
		min-height: 90px;
	}

	.recent-post-thumb{
		position: absolute; top: 0; left: 0;
		margin-right: 10px;
		border: 1px solid #CCC;
		-webkit-border-bottom-right-radius: 10px;
		-moz-border-radius-bottomright: 10px;
		border-bottom-right-radius: 10px;
	}

	.recent-post-title{
		margin: 0;
		font-size: 18px; font-weight: 400;
	}

	.old-post{
		margin-bottom: 15px;
	}

	.post-date{
		font-size: 13px;
		color: #42A52E !important;
	}
	
	.old-post:last-child a{
		font-size: 18px;
		color: #676A6C !important;
	}
	.old-post:last-child a:hover,
	.old-post:last-child a:focus{
		color: #0AAD2C !important;
	}
	</style>
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
</head>
<?php
/* -------------------------------------------------------------
 * # HTML #
 * ============================================================= */
?>
<body>
	<header>
		<div class="container">
			<div class="row">
				<?php
				/* -------------------------------------------------------------
				 * - Logo -
				 * ------------------------------------------------------------- */
				?><div id="logo" class="col-lg-3 col-sm-4 col-xs-8">
					<a id="logo-link" class="img-responsive" href="/">
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
							<li class="menu-item"><a class="menu-link" href="#">HOME</a></li>
							<li class="menu-item"><a class="menu-link" href="#">FEATURES</a></li>
							<li class="menu-item"><a class="menu-link" href="#">TEAM</a></li>
							<li class="menu-item"><a class="menu-link" href="#">CONTACT</a></li>
							<li class="menu-item"><a class="menu-link" href="#">BLOG</a></li>
						</ul>
						<ul id="feat-menu-list" class="menu-list">
							<li class="menu-item"><a class="menu-link btn" href="#">SIGN IN</a></li>
							<li class="menu-item"><a class="menu-link btn btn-cta" href="#">GET EARLY ACCESS</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</header>
	
	<div id="body">
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
<div class="gray-section">
	<?php
	/* -------------------------------------------------------------
	 * - Our team -
	 * ------------------------------------------------------------- */
	?><div id="team" class="container">
		<h2>Our Team</h2>
		<div class="row">
			<div class="team col-sm-3 col-xs-6">
				<img src="img/3blades-team-greg-werner.jpg" alt="Greg Werner (Co-Founder)">
				<h3 class="team-name">Gren Werner <br> Co-Founder</h3>
			</div>
			<div class="team col-sm-3 col-xs-6">
				<img src="img/3blades-team-roger-werner.jpg" alt="Roger Werner (Co-Founder)">
				<h3 class="team-name">Roger Werner <br> Co-Founder</h3>
			</div>
			<div class="team col-sm-3 col-xs-6">
				<img src="img/3blades-team-samuel-noriega.jpg" alt="Samuel Noriega (Marketing)">
				<h3 class="team-name">Samuel Noriega <br> Marketing</h3>
			</div>
			<div class="team col-sm-3 col-xs-6">
				<img src="img/3blades-team-enrique-shadah.jpg" alt="Enrique Shadah (Advisor)">
				<h3 class="team-name">Enrique Shadah <br> Advisor</h3>
			</div>
		</div>
	</div>
</div>
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
			<a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
			<a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
			<a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
		</div>
		Copyright &copy; 2015-2016 3BLades.io,
		Made with <i class="fa fa-heart" aria-hidden="true"></i> in Atlanta
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
		loadStyle( 'bootstrap', '<?php echo get_stylesheet_directory_uri(); ?>/libraries/bootstrap/css/bootstrap.min.css' );
		loadStyle( 'main', '<?php echo get_stylesheet_directory_uri(); ?>/style.css' );
		loadStyle( 'google-fonts', 'https://fonts.googleapis.com/css?family=Roboto:400,500,700' );
		loadStyle( 'font-awesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' );
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
</body>
</html>