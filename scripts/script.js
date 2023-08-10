

let container = {}
// console.log(`containsers length = ${container.num}`);

function conMeasure(){
    const containers = document.querySelectorAll('.sticky-container');
    container.num = containers.length;
    for(let i = 1; i <=container.num; i++){
        let key = i;
        container[key] = {
            showing :false,
            div : containers[i],
            top : containers[i-1].getBoundingClientRect().top + window.scrollY,
            bot : containers[i-1].getBoundingClientRect().bottom + window.scrollY,
        }
        container[key].height = container[key].bot - container[key].top;
        // console.log(`i = ${i}`);
        // console.log(`key = ${key}`);
        // console.log(`container.${key}.bot = ${container[key].bot}`);    
    }
    // console.log(container);
}
conMeasure();

function splitText(){
    const textBox = document.querySelector('.page1 .text');
    const originalText = '스크롤에\n따라\n한 글자씩\n나타나는\n인터렉션\n효과';
    const originTextArr = Array.from(originalText);
    let textArr = [];

    function transferTextArr(arr, originVal, changeVal){
        let idx;
        while(idx !== -1){
            idx = arr.indexOf(originVal);
            arr[idx] = changeVal;
        }
        return arr;
    }
    textArr = transferTextArr(originTextArr, '\n', '<br/>');
    for(let i = 0; i<=originTextArr.length; i++){
            textBox.innerHTML += `<span class='tbox'>${originTextArr[i]}<span>`;
    }
    container[1].divisionHeight = (container[1].height-1000) / textArr.length;    
}
splitText();

//scroll event
const tbox = document.querySelectorAll('span.tbox');
let lastST = 0;
let direction = '';
document.addEventListener('scroll',(e)=>{
    let nowST = window.scrollY;
    const targetIndex = Math.round((nowST - container[1].top) / container[1].divisionHeight);
    if(nowST > container[1].bot) return;
    // console.log(`targetIndex = ${targetIndex}`);
    if(lastST < nowST){
        direction = 'down'
        if(targetIndex > -1 && targetIndex <= 25){
            for(let i = 0; i <= targetIndex; i++){
                tbox[i].style.opacity = '1';
            }
        }else if(targetIndex >= 26){
            for(let i = 0; i < 26; i++){
                tbox[i].style.opacity = '1';
            }
        }
    }
    else{
        direction = 'up'
        if(targetIndex > -1 && targetIndex <= 25){
            for(let i = 26; i >= targetIndex; i--){
                tbox[i].style.opacity = '0'
            }
        }
    }
    lastST = nowST <= 0 ? 0 : nowST;
});
