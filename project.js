const body=document.querySelector('body');
const button=document.querySelector('button');
const colors=['blue','red','green','yellow','brown','pink','orange','black'];

body.style.backgroundColor='blue';

button.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*colors.length);
    body.style.backgroundColor=colors[colorIndex];
})