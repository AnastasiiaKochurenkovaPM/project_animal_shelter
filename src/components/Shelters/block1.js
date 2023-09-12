;(function($D){
    var $button    = $D.querySelector('.js-button'),
        $container = $D.querySelector('.js-container');
  
    $button.addEventListener('click', function(e){
      var data = e.target.dataset,
          toggleText = $button.innerHTML,
          isVisible = $container.style.display == 'block';
      
      $button.innerHTML = data.toggleText;
      data.toggleText = toggleText;
      
      $container.style.display = isVisible ? 'none' : 'block';
    });
})(document);