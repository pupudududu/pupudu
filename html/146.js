var words=[
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
'生日快乐',
];
function randomNum(min,max){
var num=(Math.random() * (max - min +1) + min).toFixed(2);
return num;
}
function init(){
var container=document.querySelector('.container');
var f=document.createDocumentFragment();
words.forEach(w=>{
var word_box=document.createElement('div');
var word=document.createElement('div');

word.innerText=w;
word.classList.add('word');
var hue=randomNum(0,240);
word.style.color='hsl('+hue+',100%,65%)';
word_box.classList.add('word-box');
word_box.style.setProperty('--margin-top',randomNum(-40,20)+'vh');
word_box.style.setProperty('--margin-left',randomNum(6,35)+'vw');
word_box.style.setProperty('--animation-duration',randomNum(8,20)+'s');
word_box.style.setProperty('--animation-delay',randomNum(-20,0)+'s');


word_box.appendChild(word);
f.appendChild(word_box);
})
container.appendChild(f);
}
window.addEventListener('load',init);