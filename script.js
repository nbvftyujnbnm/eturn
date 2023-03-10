function eturn(){
    const base = 4551211676647;
    const from = new Date("2016/11/15");
    var now = new Date();
    var ms = now - from.getTime();
    var days = Math.floor(ms / (1000*60*60*24));
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var millisec = now.getMilliseconds();
    console.log(days);
    console.log(hour,min,sec,millisec);

    //方程式に代入
    var eturn = base + days + (hour*3600*1000 + min*60*1000 + sec*1000 + millisec)/(86400*1000);
    console.log(eturn);
    return eturn;
};
