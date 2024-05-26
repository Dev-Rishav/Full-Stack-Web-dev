let p=document.querySelectorAll('p')

p.forEach(function(para){
    if(para.textContent.includes('the'))
        para.remove();
})