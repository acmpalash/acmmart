$(()=>{
    //Ad Slider
    $('.carousel').flickity({
        //Option
        cellAlign:'left',
        contain: true,
        freeScroll: false,
        autoPlay: 1300,
        pageDots: false
    })


    //Category Slider
    $('.category-flick .carousel').flickity({
      //Option
      cellAlign:'left',
      contain: true,
      freeScroll: true     
  })
    
    $('.category-flick .carousel').each(function() {
        if ($(this).find('div.carousel-cell').length >= 1) {
          $(this).find('button.flickity-prev-next-button.previous, button.flickity-prev-next-button.next, ol.flickity-page-dots').hide();
        }
      });
      $('.cat-prev').on('click', function(){
        $('.category-flick .carousel').flickity('previous')
      })
      $('.cat-next').on('click', function(){
        $('.category-flick .carousel').flickity('next')
      })
      
       //Brand Slider
    $('.brand-flick .carousel').flickity({
      //Option
      cellAlign:'left',
      contain: true,
      freeScroll: true     
  })
    
    $('.brand-flick .carousel').each(function() {
        if ($(this).find('div.carousel-cell').length >= 1) {
          $(this).find('button.flickity-prev-next-button.previous, button.flickity-prev-next-button.next, ol.flickity-page-dots').hide();
        }
      });
      $('.brand-prev').on('click', function(){
        $('.brand-flick .carousel').flickity('previous')
      })
      $('.brand-next').on('click', function(){
        $('.brand-flick .carousel').flickity('next')
      })
    // Popular Product Slider
    $('.pop-flick .carousel').flickity({
      //Option
      cellAlign:'left',
      contain: true,
      freeScroll: true     
  })
    
    $('.pop-flick .carousel').each(function() {
        if ($(this).find('div.carousel-cell').length >= 1) {
          $(this).find('button.flickity-prev-next-button.previous, button.flickity-prev-next-button.next, ol.flickity-page-dots').hide();
        }
      });
      $('.pop-prev').on('click', function(){
        $('.pop-flick .carousel').flickity('previous')
      })
      $('.pop-next').on('click', function(){
        $('.pop-flick .carousel').flickity('next')
      }) 
      // Back to Top Button 
      $(window).scroll(()=>
      {
        if($(this).scrollTop())
        {
          $('.backtotop').fadeIn()
        }
        else
        {
          $('.backtotop').fadeOut()
        }
      })
      $('.backtotop').click(()=>
      {
        $('html, body').animate(
          {
            scrollTop:0
          },1000
        )
      })
})
