

let container = {}
// console.log(`containsers length = ${container.num}`);

function conMeasure(){
    const containers = document.querySelectorAll('.sticky-container');
    container.num = containers.length;
    for(let i = 1; i <=container.num; i++){
        let key = i;
        container[key] = {
            div : containers[i],
            top : containers[i-1].getBoundingClientRect().top,
            bot : containers[i-1].getBoundingClientRect().bottom,
        }
        container[key].height = container[key].bot - container[key].top;
        // console.log(`i = ${i}`);
        // console.log(`key = ${key}`);
        // console.log(`container.${key}.bot = ${container[key].bot}`);    
    }
    // console.log(container);
}
conMeasure();

const textAni = {
    init(){
        // this.splitText();
        this.io();
    },
    splitText(){
        const originalText = '스크롤에\n따라\n한 글자씩\n나타나는\n인터렉션\n효과';
        const originTextArr = Array.from(originalText);

        function transferTextArr(arr){
            let idx;
            while(idx !== -1){
                idx = originTextArr.indexOf('\n');
                console.log(idx);
                arr[idx] = '<br/>'
            }
        }
        transferTextArr(originTextArr);
        

        const textBox = document.querySelector('.page1 .text');
        let delay = 0;
        for(let i = 0; i<originTextArr.length; i++){
            delay += 200;
            setTimeout(async()=>{
                textBox.innerHTML += `${originTextArr[i]}`;
            },delay);
        }
        // setInterval(()=>{
        //     let i = 0;
        //     // textBox.innerHTML(originTextArr[i])
        //     i++
        //     console.log(originTextArr.length)
        //     if (i > originTextArr.length ) return;
        // },200);
    },

};

textAni.init();
