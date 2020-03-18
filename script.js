var dDay1 = new Date(2020,4,13,0,0,0,0);
var dDay2 = new Date(2020,10,19,0,0,0,0);
var dDay3 = new Date(2020,10,27,0,0,0,0);
var dDay4 = new Date(2021,2,23,0,0,0,0);

console.log(dDay4.getFullYear());

function calcResult(t){
   var arr = new Array(7);
   var now = new Date();
   var gap = t.getTime() - now.getTime();
   var step;

   if (t.getFullYear() - now.getFullYear() > 0){
       arr[0] = Math.floor(12 - (now.getMonth() - t.getMonth()));
   }else{
    arr[0] = Math.floor(t.getMonth() - now.getMonth());
   }

   arr[1] = Math.floor(gap / (1000*60*60*24*7));
   arr[2] = Math.floor(gap / (1000*60*60*24));
   arr[3] = Math.floor(gap / (1000*60*60) - (24 * arr[2]));
   arr[4] = Math.floor(gap / (1000*60) - (24*60*arr[2]) - (60*arr[3]));
   arr[5] = Math.floor(gap / (1000) - (24*60*60*arr[2]) - (60*60*arr[3]) - (60*arr[4]));
   arr[6] = Math.floor((gap / 10) - (24*60*60*100*arr[2]) - (60*60*100*arr[3]) - (60*100*arr[4]) - (100*arr[5]));
   
   return arr;
}

function wirteTime(){
    var time1 = calcResult(dDay1);

    var text1 = `${time1[0]}개월 ${time1[1]}주 // ${time1[2]}일 ${time1[3]}시간 ${time1[4]}분 ${time1[5]}`

    if (time1[6] < 10){
        text1 = text1 + `.0${time1[6]}초`
    }
    else{
        text1 = text1 + `.${time1[6]}초`;
    }
    document.getElementById("social_output").innerHTML = text1

    var time2 = calcResult(dDay2);
    var text2 = `${time2[0]}개월 ${time2[1]}주 // ${time2[2]}일 ${time2[3]}시간 ${time2[4]}분 ${time2[5]}`

    if (time2[6] < 10){
        text2 = text2 + `.0${time2[6]}초`;
    }
    else{
        text2 = text2 + `.${time2[6]}초`;
    }
    document.getElementById("SAT_output").innerHTML = text2

    var time3 = calcResult(dDay3);
    var text3 = `${time3[0]}개월 ${time3[1]}주 // ${time3[2]}일 ${time3[3]}시간 ${time3[4]}분 ${time3[5]}`

    if (time3[6] < 10){
        text3 = text3 + `.0${time3[6]}초`;
    }
    else{
        text3 = text3 + `.${time3[6]}초`;
    }
    document.getElementById("social_output_s").innerHTML = text3


    var time4 = calcResult(dDay4);
    var text4 = `${time4[0]}개월 ${time4[1]}주 // ${time4[2]}일 ${time4[3]}시간 ${time4[4]}분 ${time4[5]}`

    if (time4[6] < 10){
        text4 = text4 + `.0${time4[6]}초`;
    }
    else{
        text4 = text4 + `.${time4[6]}초`;
    }
    document.getElementById("social_output_h").innerHTML = text4
}

setInterval(wirteTime,10);