var canvas = new fabric.Canvas('myCanvas')
var altura = 30
var largura = 30
var  JX = 500
var JY = 300
var objeto = ''
var jogador = ''
function jogador() {
fabric.Image.fromURL('player.png',function(Img){
jogador=Img
jogador.scaleToWidth(150)
jogador.scaleToHeight(140)
jogador.set({
top:JY,
left:JX
})
})
canvas.add(jogador)
} 
function bloco(imgbloco) {
    fabric.Image.fromURL(imgbloco,function(Img){
    objeto=Img
    objeto.scaleToWidth(largura)
    objeto.scaleToHeight(altura)
    objeto.set({
    top:JY,
    left:JX
    })
    })
    canvas.add(objeto)
    } 
    function mykeydow(e){
var tecla = e.keyCode
console.log(tecla)
if(e.shiftKey==true&&tecla=='80'){
    console.log('shift+p')
    altura= altura + 10 
    largura = largura + 10
    document.getElementById('altura').innerHTML=altura
    document.getElementById('largura').innerHTML=largura


}
if(e.shiftKey==true&&tecla=='77'){
    console.log('shift+m')
    altura= altura - 10 
    largura = largura - 10
    document.getElementById('altura').innerHTML=altura
    document.getElementById('largura').innerHTML=largura}
    if(tecla=='87'){
        console.log('w')
        bloco('pr.png')
    }
    if(tecla=='71'){
        console.log('g')
        bloco('yr.png')
    }
    if(tecla=='68'){
        console.log('d')
        bloco('rr.jpg')
    }
    if(tecla=='76'){
        console.log('l')
        bloco('gr.png')
        
    }
    if(tecla=='84'){
        console.log('t')
        bloco('br.png')
       
    }
  
}
    window.addEventListener('keydown',mykeydow)