// const a = 10;
// function ans(){
//     const a = 20;
//     console.log(a)

// }
// ans()
// // console.log(a)
// console.log(a)
// const a = 100
//function mul(x,y){
//    return x*y
//}
//function add(x,y){
//    return x+y
//}
//console.log(mul(10,30))
//console.log(add("sdabvue",5))
//console.log(mul(true,2))
//console.log(add("kdasgfba",false))
//console.log(mul(false,false))

// arr = [1,2,3,4,5,6,7,8,9]
// // arr1.sort((item,index)=>{
// // console.log("items",item);
// // console.log("index",index);
// // })
//  arr1 = [1, 52, 63, 40, 59, 68, 37, 558, 129]
// // arr.sort(function(a, b){return a - b});
// // arr1 = arr.sort(function(a,b){return b-a})
// // console.log(arr)
// // console.log(arr1)
// // const filarr = arr.filter(ab40);

// // function ab40 (arrr){return arrr == 40}
// // console.log(filarr)
// arr.push(1000, 5678)
// arr.pop()
// console.log(arr)
// str = "It can also be a fun way to surprise others"
// console.log(str.toLowerCase())
// console.log(str.toUpperCase())
// console.log(str.charAt(15))
// console.log(str.split(" "))
// arr3 = arr.concat(arr1)
// console.log(arr3)
// const fn = function(a){
//     return function(){
//         console.log(a)
// //         a = 6;

// //     }
// // }
// // const newFn = fn(21)
// // newFn()
// // var x=12;
// // var y = 8;
// // var a = true+true+true*3;
// // console.log(a);
// const user =[{
//     name : "jhon",
//     rollno : 23,
//     age : 30,
// },{
//     name: "gokul",
//     rollno : 43,
//     age : 34
// },{
//     name: "mick",
//     rollno : 22,
//     age: 18
// }]
// user.map((user)=>{
//     console.log(user.rollno,user.name);
// })
// let newArray = user.filter(function (el) {
//     return el.age >= 20 && el.rollno > 20});

// console.log(newArray)

// var header = document.querySelector("h1");
// header.textContent = "new look of yesterday";
// header.textContent.toUpperCase()
// // header.classList.add("head");
// milli = 0;
// sec = 0 ;
// minute = 0;
// function startStop(){
//     if (!isrunning){
//         timer  =setInterval(() => {
//             milli++;
//             if (milli>=1000){
//                 sec ++
//                 milli = 0
//             }
//             if (sec >= 60){
//                 minute ++
//                 sec =0
//             }
            
//         }, interval)
//         let formattedtime = `${minute.toSting().pdstart(2,"0")}:${sec.toSting().pdstart(2,"0")}:${milli.toSting().pdstart(2,"0")}`;
//     }
// }
// var ddtt = document.getElementById("ddtt");
// ddtt.addEventListener("click",()=>{
//     ddtt.innerHTML="TO STOP"
//     ddtt.style.backgroundColor = "red"
//     ddtt.style.fontFamily = "times new roman"
//     ddtt.style.fontSize = "large"
//     ddtt.style.width = "100px"
// })

// timer =setTimeout(()=>(alert("time over")),4000)
// // setInterval(() => {alert("hi bro ")
    
// // }, 5000);
// setTimeout(()=>clearTimeout("first warning"),2000)
// clearTimeout(timer)
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let stopwatchInterval;

function startStopwatch() {
    stopwatchInterval = setInterval(() => {
        milliseconds += 10;
        if (milliseconds === 1000) {
            milliseconds = 0;
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
        }
        displayTime();
    }, 10);
}

function displayTime() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
    document.getElementById('stopwatch').innerHTML = `${h}:${m}:${s}:${ms}`;
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    stopStopwatch();
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTime();
}