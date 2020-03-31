// 목표 날짜 설정
var dDay1 = new Date(2020,4,13,0,0,0,0);
var dDay2 = new Date(2020,11,03,0,0,0,0);
var dDay3 = new Date(2020,10,27,0,0,0,0);
var dDay4 = new Date(2021,2,23,0,0,0,0);

//DDay 계산 후 출력 값 Return
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

// 출력 형식 
function description(time){
    var text = `${time[0]}개월 ${time[1]}주 // ${time[2]}일 ${time[3]}시간 ${time[4]}분 ${time[5]}`;
    var endText1 = `.0${time[6]}초`;
    var endText2 = `.${time[6]}초`;

    if (time[6]<10){
        return text + endText1;
    }
    else{
        return text + endText2;
    }
}

// HTML innerHTML 수정
function wirteTime(){
    document.getElementById("social_output").innerHTML = description(calcResult(dDay1));

    document.getElementById("SAT_output").innerHTML = description(calcResult(dDay2));

    document.getElementById("social_output_s").innerHTML = description(calcResult(dDay3));

    document.getElementById("social_output_h").innerHTML = description(calcResult(dDay4));
}

// 1/100 초마다 wirteTime 함수 Call
setInterval(wirteTime,10);