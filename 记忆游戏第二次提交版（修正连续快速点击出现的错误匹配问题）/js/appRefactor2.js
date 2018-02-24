
'use strict';//使用严格模式是为了用let,const定义变量和常量
$(document).ready(function(){//文档就绪函数
let card = ['<li class="card "><i class="fa fa-diamond"></i></li>',
            '<li class="card "><i class="fa fa-diamond"></i></li>',
            '<li class="card "><i class="fa fa-paper-plane-o"></i></li>',
            '<li class="card "><i class="fa fa-paper-plane-o"></i></li>',
            '<li class="card "><i class="fa fa-anchor"></i></li>',
            '<li class="card "><i class="fa fa-anchor"></i></li>',
            '<li class="card "><i class="fa fa-bolt"></i></li>',
            '<li class="card "><i class="fa fa-bolt"></i></li>',
            '<li class="card "><i class="fa fa-cube"></i></li>',
            '<li class="card "><i class="fa fa-cube"></i></li>',
            '<li class="card "><i class="fa fa-leaf"></i></li>',
            '<li class="card "><i class="fa fa-leaf"></i></li>',
            '<li class="card "><i class="fa fa-bicycle"></i></li>',
            '<li class="card "><i class="fa fa-bicycle"></i></li>',
            '<li class="card "><i class="fa fa-bomb"></i></li>',
            '<li class="card "><i class="fa fa-bomb"></i></li>'];
// 洗牌函数来自于 http://stackoverflow.com/a/2450976
const shu = function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
let openCard = [];
let matchedCard = [];
let counter = 0;//为计步用的变量赋值
let recard = shu(card);
// 加载完成即刷新　初始化
$(window).on("load", function() {
    $("li").remove(".card");
    $(".deck").append(recard[0],recard[1],recard[2],recard[3],recard[4],recard[5],recard[6],recard[7],recard[8],recard[9],recard[10],recard[11],recard[12],recard[13],recard[14],recard[15]);
})
// 刷新
$(".restart").mouseup(function(){
    location.reload(true);//重新加载页面。括号里面为：true（从服务器重新加载），默认为false（从缓存加载）
})


// 计步函数
const actionCounter = function(){
      counter++;
      // setTimeout(myFunction, 500);// 设定延时，保证在匹配期间openCard数组有两个元素，进而保证点击翻拍的条件不能被满足
          // function myFunction(){
              openCard.splice(0,2);
      // 　　}
      //因为计步函数最后被调用，所以在此清空openCard数组最为合适
      document.querySelector('.moves').innerHTML = counter;//原生js的方法实现步数的动态显示
      if(counter >= 14 && counter <= 20){
          $(".stars>li").eq(2).remove();
              if(matchedCard.length === 16){
                  document.getElementById("sta").innerHTML = 2;//实现向结果页面传递代表游水平的星星数量的变量
                }
     }else if (counter > 20) {
          $(".stars>li").eq(1).remove();
              if(matchedCard.length === 16){
                  document.getElementById("sta").innerHTML = 1;//实现向结果页面传递代表游水平的星星数量的变量
                }
      }else if (counter < 14 && matchedCard.length === 16) {
          document.getElementById("sta").innerHTML = 3;//实现向结果页面传递代表游水平的星星数量的变量
      }

      if(matchedCard.length === 16){
          document.getElementById("coun").innerHTML = counter;//实现向结果页面传递代表游戏步骤数量的变量
      }　//if语句的尾巴　
}
//匹配函数
const matchingCard = function(){// 比对两张牌的类的值是否匹配，匹配则保持翻开状态，否则继续隐藏。  　　　　　
    if((openCard.length === 2) && (openCard[0] === openCard[1])){
        $(".card").addClass("disabled");
        $(".card.open").addClass("match");
        matchedCard.push(openCard[0]);
        matchedCard.push(openCard[1]);
        setTimeout(myFunction, 200);// 设定延时函数，不能刚一不匹配就关闭，给视觉反应时间
            function myFunction(){
                $(".card").removeClass("disabled");
        　　}
    }else if((openCard.length === 2) && (openCard[0] !== openCard[1])) {
        $(".card").addClass("disabled");
    　  setTimeout(myFunction, 500);// 设定延时函数，不能刚一不匹配就关闭，给视觉反应时间
        function myFunction(){
            $(".card").removeClass("open show disabled");
    　　}
　　}
}
//再次游戏函数
const playAgain = function(){
    $(".rebutton").click(function(){
        $(".result").remove();//清除该轮成绩
        location.reload(true);//重新加载页面。括号里面为：true（从服务器重新加载），默认为false（从缓存加载）
  　})//play again按钮侦听器的尾巴
}
//匹配成功函数
const matchSccess = function(){
    if(matchedCard.length === 16){
        $('.container').hide();
        let htmlResult = '<div class="result"></div>';
        let htmlCongra = '<p class="rewon">Congratulations! You Won!</p>';
        // 借鉴优达论坛上别人的代码，特别是字符实体这块的内容，原本已经忘光了
        let htmlHonour = '<p class="removes">With&nbsp;<span id="coun"></span>&nbsp;Moves&nbsp;&nbsp;,&nbsp;&nbsp;<span id="sec"></span>&nbsp;seconds&nbsp;and&nbsp;<span id="sta"></span>&nbsp;Stars</p>';
        let htmlWoo = '<p class="woo">Woooooo!</p>';
        let htmlPlay = '<p class="rebutton">Play again!</p>';
        $("body").append(htmlResult);
        $(".result").append(htmlCongra,htmlHonour,htmlWoo,htmlPlay);
        playAgain();// 调用再次游戏函数
    }//游戏完成函数的尾巴
}

// 翻拍后显示图像 事件委托的代码原型最初是在简书上查到的，但已经改的面目全非了
$('.deck').on('click', 'li', function(ev) {　　　//如果没有翻面所需的类，就添加。如果已经存在，就禁止添加。
    if(($(this).hasClass("open show")===false) && (openCard.length < 2) && ($(this).hasClass("match")===false)){// 每次点击事件仅对未打开且未匹配的卡牌起作用
        $(this).toggleClass("open show");
        let op = $(this).find("i").attr("class");// 提取图片的类的属性到数组
        openCard.push(op);
　　 };//翻页函数的尾巴
    matchingCard();
    matchSccess();
    if(openCard.length === 2){
        actionCounter();//计步函数
    }
})

$(".deck").one("click",function(){// 只能点击一次的计时器，关于one的使用参考了，优达论坛导师给别人的回答
    const myVar = setInterval(myTimer, 1000);
    let t = 1;
    function myTimer(){
        $(".timer span").text(t);
        if(matchedCard.length===16){
            clearInterval(myVar);//停止计时器
            let sec = t-1;//实际中有一秒的不明原因的延迟，故减去一秒。
            document.getElementById("sec").innerHTML = sec;//实现向结果页面传递代表游戏时间的变量
        }//停止计时函数的尾巴
    t++;//注意位置，否则会跳过第一秒，直接显示２。
  }//计时器函数的尾巴
})//只能单词点击的计时函数的尾巴

})//文档就绪函数的尾巴
