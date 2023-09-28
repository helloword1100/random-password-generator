const pass = document.getElementById('password');
const submit=document.getElementById('submit');

const length=12;

const upperCase="ABCDEFGHIJKLMNOPRSTUVWXYZ"
const lowerCase=upperCase.toLowerCase();
const number="0123456789";
const symbols="!@$%^&*()_+=-|\';/.,~}{#";

const allchars=upperCase+lowerCase+number+symbols;

function new_pass()
{
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];
   
    while(length>password.length)
    {
        password+=allchars[Math.floor(Math.random()*allchars.length)];
    }
    pass.value=password;
}

submit.addEventListener('click',new_pass);

function copydata()
{
    pass.select();
    document.execCommand('copy');
}

document.getElementById('copy').addEventListener('click',copydata);


let data = window.performance.getEntriesByType("navigation")[0].type;
if(data==='reload')
   {
  pass.value=''
   }