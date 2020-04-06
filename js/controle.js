
var myFullpage = new fullpage('#fullpage', {
    anchors: ['Home', 'Sobre', 'trabalhos','Contato'],
    sectionsColor: ['#1F1F1F', '#1F1F1F', '#1F1F1F', '#1F1F1F'],
    sectionsColor: false,
    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: ['Home', 'Sobre', 'Portfólio', 'Contato'],
    responsiveWidth: 900,
    afterResponsive: function(isResponsive){

    }

});

var $w = $(window);

$w.on("scroll", function () {
  var banner = $('#barra');
  
  setInterval(function () {
    if ($w.anchors() > 50) {
        banner.addClass('hide');
        console.log('ok');
    }
  }, 1000);
});
