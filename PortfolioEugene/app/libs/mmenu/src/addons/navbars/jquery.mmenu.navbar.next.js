/*
 * jQuery mmenu navbar add-on next content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */

(function( $ ) {

	var _PLUGIN_ 	= 'mmenu',
		_ADDON_  	= 'navbars',
		_CONTENT_	= 'next';

	$[ _PLUGIN_ ].addons[ _ADDON_ ][ _CONTENT_ ] = function( $navbar, opts )
	{
		//	Get vars
		var _c = $[ _PLUGIN_ ]._c;


		//	Add content
		var $next = $('<a class="' + _c.next + ' ' + _c.btn + '" href="#" />')
			.appendTo( $navbar );


		//	Update to opened panel
		var $org;
		var _url, _txt;


		this.bind( 'openPanel:start',
			function( $panel )
			{
				$org = $panel.find( '.' + this.conf.classNames[ _ADDON_ ].panelNext );

				_url = $org.attr( 'href' );
				_txt = $org.html();

				$next[ _url ? 'attr' : 'removeAttr' ]( 'href', _url );
				$next[ _url || _txt ? 'removeClass' : 'addClass' ]( _c.hidden );
				$next.html( _txt );
			}
		);


		//	Add screenreader / aria support
		this.bind( 'openPanel:start:sr-aria',
			function( $panel )
			{
				this.__sr_aria( $next, 'hidden', $next.hasClass( _c.hidden ) );
				this.__sr_aria( $next, 'owns', ( $next.attr( 'href' ) || '' ).slice( 1 ) );
			}
		);

		//	Detract content count
		return -1;
	};

	$[ _PLUGIN_ ].configuration.classNames[ _ADDON_ ].panelNext	= 'Next';

})( jQuery );
