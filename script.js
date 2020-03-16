var dDay1 = new Date(2020,4,13,0,0,0,0);
var dDay2 = new Date(2020,10,19,0,0,0,0);

function calcResult(t){
   var arr = new Array(7);
   var now = new Date();
   var gap = t.getTime() - now.getTime();
   var step;

   arr[0] = Math.floor(t.getMonth() - now.getMonth());
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

    if (time1[6] < 10){
        document.getElementById("social_output").innerHTML = `${time1[0]}개월 ${time1[1]}주 // ${time1[2]}일 ${time1[3]}시간 ${time1[4]}분 ${time1[5]}.0${time1[6]}초`;
    }
    else{
        document.getElementById("social_output").innerHTML = `${time1[0]}개월 ${time1[1]}주 // ${time1[2]}일 ${time1[3]}시간 ${time1[4]}분 ${time1[5]}.${time1[6]}초`;
    }

    var time2 = calcResult(dDay2);

    if (time2[6] < 10){
        document.getElementById("SAT_output").innerHTML = `${time2[0]}개월 ${time2[1]}주 // ${time2[2]}일 ${time2[3]}시간 ${time2[4]}분 ${time2[5]}.0${time2[6]}초`;
    }
    else{
        document.getElementById("SAT_output").innerHTML = `${time2[0]}개월 ${time2[1]}주 // ${time2[2]}일 ${time2[3]}시간 ${time2[4]}분 ${time2[5]}.${time2[6]}초`;
    }
}

setInterval(wirteTime,10);