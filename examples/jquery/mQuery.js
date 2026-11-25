(function( window, undefined ) {
var
	// A central reference to the root jQuery(document)
	rootjQuery,

    // Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context, rootjQuery );
	},
    // Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	},

	// The ready event handler and self cleanup method
	completed = function() {
		document.removeEventListener( "DOMContentLoaded", completed, false );
		window.removeEventListener( "load", completed, false );
		jQuery.ready();
	};


jQuery.fn = jQuery.prototype = {
    // The current version of jQuery being used
    jquery: core_version,

    constructor: jQuery,
    init: function( selector, context, rootjQuery ) {

    }

};

// Give the init function the jQuery prototype for later instantiation
jQuery.fn.init.prototype = jQuery.fn;


// All jQuery objects should point back to these
rootjQuery = jQuery(document);



if ( typeof window === "object" && typeof window.document === "object" ) {
    window.jQuery = window.$ = jQuery;
}
})( window );