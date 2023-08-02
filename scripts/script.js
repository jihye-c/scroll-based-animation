

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
    console.log(container);
}
conMeasure();

document.addEventListener('scroll',(e)=>{
    console.log();            
});

const textAni = {
    init(){
        this.splitText();
    },
    splitText(){
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
        

        const textBox = document.querySelector('.page1 .text');
        let delay = 0;
        // for(let i = 0; i<originTextArr.length; i++){
        //     delay += 40;
        //     setTimeout(async()=>{
        //         textBox.innerHTML += `${originTextArr[i]}`;
        //     },delay);
        // }
        container[1].divideHeight = container[1].height / textArr.length;
        container[1]

    }
};

textAni.init();
