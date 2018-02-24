/*
 * 创建一个包含所有卡片的数组
 */
// var cards = ["fa-diamond","fa-diamond",
//     "fa-paper-plane-o","fa-paper-plane-o",
//     "fa-anchor","fa-anchor",
//     "fa-bolt","fa-bolt",
//     "fa-cube","fa-cube",
//     "fa-leaf","fa-leaf",
//     "fa-bicycle","fa-bicycle",
//     "fa-bomb","fa-bomb"];
var card = ['<li class="card "><i class="fa fa-diamond"></i></li>',
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
var openCard = [];
var matchedCard = [];
/*
 * 显示页面上的卡片
 *   - 使用下面提供的 "shuffle" 方法对数组中的卡片进行洗牌
 *   - 循环遍历每张卡片，创建其 HTML
 *   - 将每张卡的 HTML 添加到页面
 */

// 洗牌函数来自于 http://stackoverflow.com/a/2450976
var shu = function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// shu(card);
// 加载完成即刷新　初始化
var recard = shu(card);
$(window).on("load", function() {
    // ...
    $("li").remove(".card");

    $(".deck").append(recard[0],recard[1],recard[2],recard[3],recard[4],recard[5],recard[6],recard[7],recard[8],recard[9],recard[10],recard[11],recard[12],recard[13],recard[14],recard[15]);
});

// 重置
$(".restart").mousedown(function(){
        $("li").remove(".card");
    });

$(".restart").mouseup(function(){
        // 每次刷新清空已打开的卡片的数组
        $(".timer span").text(0);//计时器归零
        // clearInterval(myVar);//停止计时器
        // $(".deck").off("click");
        // $(".deck").trigger("one");
        location.reload(true);//重新加载页面。括号里面为：true（从服务器重新加载），默认为false（从缓存加载）

        openCard.splice(0,2);
        var recard = shu(card);
        $(".deck").append(recard[0],recard[1],recard[2],recard[3],recard[4],recard[5],recard[6],recard[7],recard[8],recard[9],recard[10],recard[11],recard[12],recard[13],recard[14],recard[15]);
    });




// 计步函数
var actionCounter = function(){
      var counter = 0;
      if(openCard.length === 2){

      counter+=1;
      return counter;
    };

};

$(".card").click(function(){
      var cou = counter;
      actionCounter();
// function actionCounter(){
      //   var counter = 0;
      // if(openCard.length === 2){
      //
      //   counter+=1;
      //   // return counter;
      // };
    // };
      $(".moves").text(counter);
      if(matchedCard.length === 16){
      setTimeout(myFunction, 2000);
      function myFunction(){

                  document.getElementById("cou").innerHTML = cou;//实现向结果页面传递代表游戏步骤数量的变量

                };//延时函数的尾巴
　　　　};　//if语句的尾巴　
          // counter++;
        });//招式计数器的尾巴
// 翻拍后显示图像 事件委托　自己拷贝的，还未完全理解。
// 翻拍后显示图像 事件委托　自己拷贝的，还未完全理解。
$('.deck').on('click', 'li', function(ev) {　　　//核心主函数　事件委托函数

  //招式计数器，每点击两张卡片为一招


        // this 指向委托的对象 li
// 如果没有翻面所需的类，就添加。如果已经存在，就禁止添加。
     if(($(this).hasClass("open show")===false) && (openCard.length < 2) && ($(this).hasClass("match")===false)){// 每次点击事件仅对未打开且未匹配的卡牌起作用
        $(this).toggleClass("open show");
        // 找到父级 ul#wrap
        $(ev.delegateTarget).toggleClass("open show");
// 提取图片的类的属性到数组
        var op = $(this).find("i").attr("class");
        openCard.push(op);
 };//翻页函数的尾巴
// 比对两张牌的类的值是否匹配，匹配则保持翻开状态，否则继续隐藏。
    if((openCard.length === 2) && (openCard[0] === openCard[1])){
      // $(".open,.show").removeClass("open show");
      $(".card.open").addClass("match");

      // 　　　var ma = $(".match").find("i").attr("class");
           matchedCard.push(openCard[0]);
           matchedCard.push(openCard[1]);
           openCard.splice(0,2);
    }else if((openCard.length === 2) && (openCard[0] !== openCard[1])) {
                    // 设定延时函数
                    setTimeout(myFunction, 500);
                    function myFunction(){
                    $(".card,.open,.show").removeClass("open show");
                    // 清空已打开的卡片的数组
                    openCard.splice(0,2);
                                         };
                                       };

    if(matchedCard.length === 16){
      var counter,second,startum;
      $('.container').hide();
      var htmlResult = '<div class="result"></div>';
      var htmlCongra = '<p class="rewon">Congratulations! You Won!</p>';
      var htmlHonour = '<p class="removes">With&nbsp;<span id="cou"></span>&nbsp;Moves&nbsp;&nbsp;,&nbsp;&nbsp;<span id="sec"></span>&nbsp;and&nbsp;seconds&nbsp;</p>';
      // var htmlHonour = '<p class="removes">With&nbsp;'+counter+'&nbsp;Moves&nbsp;&nbsp;,&nbsp;&nbsp;'+second+'&nbsp;seconds&nbsp;&nbsp;and&nbsp;&nbsp;'+startnum+'&nbsp;Stars. </p>';
      var htmlWoo = '<p class="woo">Woooooo!</p>';
      var htmlPlay = '<p class="rebutton">Play again!</p>';
      // var html = htmlResult + htmlCongra + htmlHonour + htmlWoo + htmlPlay;
      $("body").append(htmlResult);
      $(".result").append(htmlCongra,htmlHonour,htmlWoo,htmlPlay);
      // play again
      $(".rebutton").click(function(){
        $(".result").remove();//清除该轮成绩
        $('.container').show();//解除隐藏的游戏页面，为下一轮准备
        $(".timer span").text(0);//计时器归零
        // $(".deck").triggerHandler("one");
        location.reload(true);//重新加载页面。括号里面为：true（从服务器重新加载），默认为false（从缓存加载）


        $("li").remove(".card");

        var recard = shu(card);
        $(".deck").append(recard[0],recard[1],recard[2],recard[3],recard[4],recard[5],recard[6],recard[7],recard[8],recard[9],recard[10],recard[11],recard[12],recard[13],recard[14],recard[15]);
        // matchedCard.splice(0,16);

        // 延时清空已经匹配的数组
        setTimeout(myFunction, 500);
        function myFunction(){
        matchedCard.splice(0,16);


      };//清空匹配数组的函数的尾巴

    　　　　　　　　　　　　　　　　　　　　});//play again按钮函数的尾巴
  };//游戏完成函数的尾巴



});//核心主函数　事件委托函数的尾巴

                  // 只能点击一次的计时器
            $(".deck").one("click",function(){
                var myVar = setInterval(myTimer, 1000);
                var t = 1;
                function myTimer(){
                      // $(".timer span").text("t");
                  　   $(".timer span").text(t);
                  // 　   $(".removes").text(t);
                      // function myFunction() {

                         // }

                  // 　   $(".removes").append(&nbsp;'+t+'&nbsp;seconds&nbsp;);//相对于text,append奇怪会慢两三秒
                      // $("<span>"t"</span>").insertAfter(".removes p");
                      // $(".removes p").text(t);
    // $(".removes p").append('<p class="re-moves">With&nbsp;'+0+'&nbsp;Moves&nbsp;&nbsp;,&nbsp;&nbsp;'+t+'&nbsp;seconds&nbsp;&nbsp;and&nbsp;&nbsp;'+0+'&nbsp;Stars. </p>');
                   　
                      // $(".timer span").text("")append(t);
                      $(".restart").click(function(){//刷新时也要停止计时器
                                clearInterval(myVar);
                                                    });

                      if(matchedCard.length===16){
                        // $(".deck").off("click");
                        // myVar = setInterval(function, milliseconds);
                  　   clearInterval(myVar);//停止计时器
                       var sec = t-1;//实际中有一秒的不明原因的延迟，故减去一秒。
                       document.getElementById("sec").innerHTML = sec;//实现向结果页面传递代表游戏时间的变量
                        };//停止计时函数的尾巴
                        t++;//注意位置，否则会跳过第一秒，直接显示２。
              };//计时器函数的尾巴

          });//只能单词点击停止计时函数的尾巴

          // 招式计数器，每点击两张卡片为一招
          // var counter = 1;
          // if(matchedCard.length === 2){
          //   counter++;
          // };
          // $(".card").click(function(){
          //       var cou = counter;
          //       // var counter = 1;
          //       $(".moves").text(counter);
          //       if(matchedCard.length === 16){
          //       setTimeout(myFunction, 2000);
          //       function myFunction(){
          //
          //                   document.getElementById("cou").innerHTML = cou;//实现向结果页面传递代表游戏步骤数量的变量
          //
          //                 };//延时函数的尾巴
          // 　　　　};　//if语句的尾巴　
          //
          //
          //
          //         });//招式计数器的尾巴


// 结果页面
// function addMessage(counter,startnum,second) {
//     $(".container").remove();
//     var html = $('<div class="result"></div>');
//     let info1 = $('<p class="re-won">Congratulations! You Won!</p>');
//     let info2 = $('<p class="re-moves">With&nbsp;'+counter+'&nbsp;Moves&nbsp;&nbsp;,&nbsp;&nbsp;'+second+'&nbsp;seconds&nbsp;&nbsp;and&nbsp;&nbsp;'+startnum+'&nbsp;Stars. </p>');
//     let info3 = $('<p class="re-moves">Woooooo!</p>');
//     let button = $('<p class="re-button">Play again!</p>');
//     html.append(info1,info2,info3,button);
//     $(document.body).append(html);
//     restart('.re-button');
// }
            /*
             * 设置一张卡片的事件监听器。 如果该卡片被点击：
             *  - 显示卡片的符号（将这个功能放在你从这个函数中调用的另一个函数中）
             *  - 将卡片添加到状态为 “open” 的 *数组* 中（将这个功能放在你从这个函数中调用的另一个函数中）
             *  - 如果数组中已有另一张卡，请检查两张卡片是否匹配
             *    + 如果卡片匹配，将卡片锁定为 "open" 状态（将这个功能放在你从这个函数中调用的另一个函数中）
             *    + 如果卡片不匹配，请将卡片从数组中移除并隐藏卡片的符号（将这个功能放在你从这个函数中调用的另一个函数中）
             *    + 增加移动计数器并将其显示在页面上（将这个功能放在你从这个函数中调用的另一个函数中）
             *    + 如果所有卡都匹配，则显示带有最终分数的消息（将这个功能放在你从这个函数中调用的另一个函数中）
             */
      // .addClass("match")
      // 清空已打开的卡片的数组
      // openCard.splice(0,2);
          // if(openCard[0]===$(".card").find("i").attr("class")){
          // var test1=openCard[0];
          //   $("i").find("[class=test1]").addClass("match");
          //
          //   setTimeout(myFunction, 3000);
          //   function myFunction(){
            // $(".card,.open,.show").removeClass("open show");
            // 清空已打开的卡片的数组

                                 // };
            // openCard.splice(0,2);
                                                              // }
      // var ma = $(".match").find("i").attr("class");

      // matchedCard.push(ma);



//
// console.log(openCard);　

// $('.card').on('click', 'i', function(ev) {
//         // this 指向委托的对象 li
//         $(this).css();
//
//         // 找到父级 ul#wrap
//         $(ev.delegateTarget).toggleClass();
//
//         // if($(".card").css()===){};
//     });

// $(document).ready(function(){
    // $("li").click(function(){
    //     $(this).toggleClass("open show");
    // });
// });
//选中之后的样子
// $(document).ready(function(){
//     $("li").click(function(){
//         $(this).toggleClass("match");
//     });
// });
// $(document).ready(function(){
//     $("div").click(function(){
//         $("div").hide();
//     });
// });
// $(document).ready(function(){
//     $("li").click(function(){
//         $(this).hide();
//     });
// });
