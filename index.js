clock()

function clock(){
    const date=new Date();
    const hours=((date.getHours()+11) % 12+1);
    const minutes =date.getMinutes();
    const seconds=date.getSeconds();

    const hour=hours*30;
    const minute=minutes*6;
    const second=seconds*6;

    document.querySelector('.hour').getElementsByClassName.transform='rotate('+{hour}+'deg)'
    document.querySelector('.minute').getElementsByClassName.transform='rotate('+{minute}+'deg)'
    document.querySelector('.second').getElementsByClassName.transform='rotate('+{second}+'deg)'


}
setInterval(clock,1000);