var img = new Image()
img.src = 'trees.jpg';

var titulo = 1;
$('#main2').fadeOut(1)
$('#nav-conteudo-text2').hide(1);

var circle;
var button;
var signIn;
var loader;
var x;
var y;


function showCadastro(){
  $('#main1, #main2').toggle(10);
  $('#nav-conteudo-text1, #nav-conteudo-text2').toggle(1)
}

