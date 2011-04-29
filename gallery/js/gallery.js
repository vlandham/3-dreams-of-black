var GALLERY = function() {

  var gallery = $('#gallery');
  var galleryInner = $('#gallery .inner');
  var maxWidthCSS = gallery.css('max-width');

  var maxWidth = parseInt(maxWidthCSS.replace('px', ''));
  var objectWidth = $('div.object').outerWidth();

  window.addEventListener('resize', onWindowResize, false)
  onWindowResize();

  function onWindowResize() {
    
      var newWidth;
      if (window.innerWidth < maxWidth) {
        newWidth = objectWidth * 3;
      } else {
        newWidth = maxWidth;
      }
      galleryInner.width(newWidth);
  }

  $('.upvote').click(function() {

    if ( GALLERY.onupvote( $(this).index('.upvote') ) ) {
      $(this).next().removeClass('selected');
      $(this).addClass('selected');
    }
    
    return false;

  });

  $('.downvote').click(function() {

    if ( GALLERY.ondownvote( $(this).index('.downvote') ) ) {
      $(this).prev().removeClass('selected');
      $(this).addClass('selected');
    }

    return false;

  });

};