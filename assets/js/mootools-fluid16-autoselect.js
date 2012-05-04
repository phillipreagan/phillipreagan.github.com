window.addEvent('domready', function() {

	// Fluid 16-column Grid
	// Auto-Select Toggle Elements
	
	// Select all boxes with h2 anchor elements and toggle the next div
	// The toggle-ajax anchor is excluded or the AJAX content box won't work
	$$('.box span a[id!=toggle-ajax]').each(function(item) {
		item.setStyle('cursor', 'pointer');
		var elToHide = item.getParent('span').getNext('div');
		if (elToHide) {
			var mySlide = new Fx.Slide(elToHide);
			item.store('fx', mySlide);

			if (item.hasClass('hidden')){
				mySlide.hide();
			}
			item.addClass('visible');

			item.addEvent('click', function(e) {
				e.stop();
				var fx = this.retrieve('fx');
				fx.toggle();

				if (item.hasClass('hidden')){
					item.removeClass('hidden').addClass('visible');
				}
				else {
					item.removeClass('visible').addClass('hidden');
				} 
			});
		}
	});
	
	// Accordion Section Menu
	if ($('section-menu')) {
		var accordion = new Accordion('a.menuitem', 'ul.submenu', {
			opacity: false,
			onActive: function(toggler, element){
				toggler.addClass('current');
				element.addClass('current');
			},
			onBackground: function(toggler, element){
				toggler.removeClass('current');
				element.removeClass('current');
			}
		}, $('section-menu'));
	}

	// Accordion Content
	if ($('accordion')) {
		var accordion = new Accordion('h3.atStart', 'div.atStart', {
			opacity: false,
			onActive: function(toggler, element){
				toggler.setStyle('font-weight', 'bold');
				toggler.setStyle('background', '#fff');
			},
		 
			onBackground: function(toggler, element){
				toggler.setStyle('font-weight', 'normal');
				toggler.setStyle('background', '#eee');
			}
		}, $('accordion'));
	}

	// Toggle Grid
	if ($('toggle-grid')) {
		var grid = new Fx.Slide('grid').hide(); //creates new Fx.Slide object from grid div
		$('toggle-grid').addEvent('click', function(e) { //Adds an onClick event to toggle-grid div
			e = new Event(e);
				grid.toggle(); //toggles the div
			if ($('toggle-grid').hasClass('hidden')){
				$('toggle-grid').removeClass('hidden').addClass('visible');
			}
			else {
				$('toggle-grid').removeClass('visible').addClass('hidden');
			}
			e.stop(); //this makes sure that the user wont be sent to given url (or that the page refreshes when using dummy url like "#") if the clicked element was a link 
		});
	}
});