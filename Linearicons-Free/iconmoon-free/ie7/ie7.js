/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-home': '&#xe900;',
		'icon-star-empty': '&#xe9d7;',
		'icon-play2': '&#xea15;',
		'icon-arrow-right2': '&#xea3c;',
		'icon-ctrl1': '&#xea51;',
		'icon-ctrl': '&#xea50;',
		'icon-facebook': '&#xea90;',
		'icon-instagram': '&#x1f326;',
		'icon-twitter': '&#xea96;',
		'icon-dribbble': '&#xeaa7;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
