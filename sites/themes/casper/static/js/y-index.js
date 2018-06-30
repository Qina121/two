$(document).ready(function() {
  //定义变量
  var navItem = $(".nav_item");
  var header = $(".y-header");
  var applyBlock = $(".y-applys .block");
  var autoMarketing = $(".auto_marking");
  var win_state = true;
  var consult = $(".y-consult");
  var consultWin = $(".consult_win");
  var emailInput = $(".email");
  var phoneInput = $(".phone");
  var block = $(".y-applys .model .block");
  var functionBlock = $(".function_block");
  var matte = $(".matte");
  var yes = $(".yes");
  var childNav = $(".y-header .child_nav_2");
  var childNava = childNav.find("a");
  var yAbout = $(".y-about");
  var scaleItem = yAbout.find("li");
  var cardRight = $(".email-product .show-card .right");
  var cardLeft = $(".email-product .show-card .left");
  var emailInformation = $('.y-more-information .item');
  var applyH = $('.y-apply-h .block a');
  var titleProduct  = $('.provide-solution .title div');
  var contentSolution = $('.provide-solution .content .example');
  var solutionTriangle = $('.provide-solution .triangle');
  var solutionInfoText = $('.provide-solution .text div');
  var titleCase = $('.example-case .title .case');
  var contentExample = $('.example-case .content .block');
  var triangle = $('.example-case .triangle');
  var infoText = $('.example-case .print div');
  var Case_example = $('.example-case .Case_example');
  var provide_example = $('.provide-solution .solution_example');
  var url = location.search;
  var W = $(window).width() + "px";
  var H = $(window).height() + "px";
  var Width = $(window).width();
  var Height = $(window).height();
  var yesT = (Height - $(".yes").height()) / 2 + "px";
  var yesL = (Width - $(".yes").width()) / 2 + "px";
  var switchNum = 0;
  var timer = 0;

  
  //定义函数
  function slide() {
    applyBlock.stop().animate({ marginTop: "0" }, 600);
  }

  function imgScale(picture) {
    picture.css({ transform: "scale(1.1,1.1)", transition: "0.3s" });
  }
  function imgScale_samll(picture) {
    picture.css({ transform: "scale(1,1)", transition: "0.3s" });
  }

  function countDown() {
    //倒计时
    var endTime = new Date().getTime() + 60 * 1000;
    var timer = 0;

    timer = setInterval(function() {
      var start = new Date().getTime();
      var time = endTime - start;

      if (time <= 0) {
        time = 0;
        clearInterval(timer);
      }

      //秒：
      var s = parseInt((time % (60 * 1000)) / 1000);
      console.log(s);
      $(".code_button").html(s + "s");
      $(".code_button_mf").html(s + "s");
      if (s <= 1) {
        console.log(s);
        $(".code_button").removeAttr("disabled");
        $(".code_button").html("点击获取验证码");
        $(".code_button_mf").removeAttr("disabled");
        $(".code_button_mf").html("点击获取验证码");
      } else {
        $(".code_button").html(s + "s");
        $(".code_button").attr("disabled", "disabled");
        $(".code_button_mf").html(s + "s");
        $(".code_button_mf").attr("disabled", "disabled");
      }
    }, 1000);
  }

  //如果是当前的页面，导航下划线没有移出事件
  function current() {
    var url = window.location.pathname;
    //转换成字符串
    url = url.toString();
    var array = new Array(); //用来存放分分割后的字符串
    array = url.split("/");
    for (var i = 0; i < navItem.length; i++) {
      if (navItem.eq(i).attr("mark") == array[2]) {
        //移除mouselesve
        navItem.eq(i).mouseleave(function() {
          $(this)
            .find(".child_nav_2")
            .eq(0)
            .stop()
            .animate(
              { opacity: "0", height: "0", zIndex: "0" },
              100,
              function() {
                $(this).css("display", "none");
              }
            );
        });
        navItem
          .eq(i)
          .find(".line")
          .stop()
          .animate({ width: "100px", opacity: 1 }, 200);
        navItem
          .eq(i)
          .find(".scope")
          .css("color", "#2c9ab7");
      } else {
        navItem.eq(i).mouseleave(function() {
          $(this)
            .find(".line")
            .stop()
            .animate({ width: "0px", opacity: 0 }, 200);
          $(this)
            .find(".child_nav_2")
            .eq(0)
            .stop()
            .animate(
              { opacity: "0", height: "0", zIndex: "0" },
              100,
              function() {
                $(this).css("display", "none");
              }
            );
          $(this)
            .find(".scope")
            .css("color", "#666");
        });
      }
    }
  }

  function emailZe(s) {
    var val = s.val();
    var re = /(^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+)|(^$)/;
    if (re.test(val)) {
      s.css("border", "1px solid #ccc");
    } else {
      s.css("border", "1px solid red");
    }
  }

  function phoneZe(s) {
    var val = s.val();
    //console.log(val);
    if (val) {
      var t = /^1[345789]\d{9}$/;
      if (t.test(val)) {
        //console.log(11);
        s.css("border", "1px solid #ccc");
      } else {
        //console.log(222);
        s.css("border", "1px solid red");
      }
    }
  }

  function shadow(clock) {
    clock.mouseenter(function() {
      $(this).css("boxShadow", "0px 0px 10px #ccc");
    });
    clock.mouseleave(function() {
      $(this).css("boxShadow", "none");
    });
  }

  function show(item){
    item.mouseenter(function(){
      $(this).find(".information").css('display','flex');
    })
    item.mouseleave(function(){
      $(this).find(".information").css('display','none');
    })
  }
  
  
  //案例切换**
  // function exampleSwitch(title,content,mark,desc){
  //   title.on('click',function(){
  //     var index = $(this).index();
  //     for(var i=0;i<title.length;i++){
  //       title.eq(i).css({"color":"#e27a24","backgroundColor":"#fff"});
  //       content.eq(i).css('display','none');
  //       mark.eq(i).css('display','none');
  //       desc.eq(i).css('display','none');
  //     }
  //     title.eq(index).css({"color":"#fff","backgroundColor":"#e27a24"});
  //     content.eq(index).css('display','flex');
  //     mark.eq(index).css('display','block');
  //     desc.eq(index).css('display','block');
  //   })
  // }
  //** 

  
  function exampleSwitch(title,content,mark,desc){
    title.on('click',function(){
      var index = $(this).index();
      switchNum =index;
      for(var i=0;i<title.length;i++){
        title.eq(i).css({"color":"#e27a24","backgroundColor":"#fff"});
        // content.eq(i).css('display','none');
        mark.eq(i).css('display','none');
        desc.eq(i).css('display','none');
      }
      title.eq(switchNum).css({"color":"#fff","backgroundColor":"#e27a24"});
      // content.eq(switchNum).css('display','flex');
      content.stop().animate({ "marginLeft": -1080*switchNum+'px'}, 300);
      mark.eq(switchNum).css('display','block');
      desc.eq(switchNum).css('display','block');
    })
  }
  
  //案例切换轮播效果
  function autoSwitch(title,content,mark,desc){
    console.log(111)
    timer = setInterval(function(){
      
      console.log(switchNum)
      if(switchNum>=title.length-1){
        switchNum=0;
        content.stop().animate({ "marginLeft": -1080*title.length+'px'}, 300,function(){
          content.css("marginLeft",0+'px');
        });
      }else{
        switchNum++;
        content.stop().animate({ "marginLeft": -1080*switchNum+'px'}, 300);
        
      }
      for(var i=0;i<title.length;i++){
        title.eq(i).css({"color":"#e27a24","backgroundColor":"#fff"});
        mark.eq(i).css('display','none');
        desc.eq(i).css('display','none');
      }
      title.eq(switchNum).css({"color":"#fff","backgroundColor":"#e27a24"});
      // content.stop().animate({ "marginLeft": -1080*switchNum+'px'}, 300);
      
      mark.eq(switchNum).css('display','block');
      desc.eq(switchNum).css('display','block');
      
    },2500);
    
  }
  
  //判断表单内容是否有空值
  function cmd(formInput) {
    var ipt = formInput.find("input"); //查找divbox这个div里的所有文本框
   
    for (var i = 0; i < ipt.length; i++) {
      //循环
      if (ipt[i].value.length == 0) {
        //如果其中一个文本框没有填写
        //alert("请将表单填写完整"); //弹出提示
        ipt[i].focus();
        //ipt.eq(i).css("border","1px solid red") //定位到没有填写的文本框
        return false; //返回false
      }
    }
    return true; //都已经填写，返回true
  }

  //提交表单
  function test(formId) {
    //验证是否注册成功
    var form = new FormData(formId);
    //             var req = new XMLHttpRequest();
    //             req.open("post", "${pageContext.request.contextPath}/public/testupload", false);
    //             req.send(form);
    $.support.cors = true;
    $.ajax({
      url: "https://wellemail.com/Service/SolutionsConsulting",
      type: "post",
      data: form,
      processData: false,
      contentType: false,
      success: function(data) {
        console.log(data.Accepted);
        if (data.Accepted) {
          $(".matte").css("display", "block");
          var len = $(formId).find("input").length;
          for (var i = 0; i < len; i++) {
            $(formId)
              .find("input")
              .eq(i)
              .attr("value", "");
          }
        } else {
          alert("验证码错误或失败，请重新填写提交！");
        }
      },
      error: function(e) {
        alert("错误！！");
      }
    });
  }

  function random(formId) {
    //验证随机码是否正确
    var form = new FormData(formId);
    //随机码验证
    $.ajax({
      url: "https://wellemail.com/Service/SendMobileCode",
      type: "post",
      data: form,
      processData: false,
      contentType: false,
      success: function(data) {
        console.log("成功！！");
        console.log(data);
        if (data.Accepted) {
          console.log(1111);
          countDown(); //倒计时
        } else {
          alert("随机码输入错误！！！！！");
        }
      },
      error: function(e) {
        console.log(222222);
        alert("错误！！");
      }
    });
  }

  //调用函数

  // banner动画
  $(".carousel").carousel({
    interval: 2000
  });

  //分屏滚动
  // $(function() {
  //   $.scrollify({
  //     section: ".fixHeight",
  //     scrollSpeed: 800,
  //     before: function(i, sections) {
  //       // $(sections[i])
  //       //   .find(".text_color")
  //       //   .stop()
  //       //   .animate({ opacity: 1, scale: 1 }, 900, function() {
  //       //     $(sections[i])
  //       //       .find(".text_color")
  //       //       .css({ transform: "scale(1.1,1.1)", transition: "0.2s" });
  //       //   });
  //     },
  //     after: function(i, sections) {}
  //   });
  // });

  current();

  //每个导航栏的移入下划线

  navItem.mouseenter(function() {
    $(this)
      .find(".line")
      .stop()
      .animate({ width: "100px", opacity: "1" }, 300);
    $(this)
      .find(".child_nav_2")
      .css("display", "flex");
    $(this)
      .find(".child_nav_2")
      .eq(0)
      .stop()
      .animate({ opacity: "0.8", height: "90px", zIndex: "5" }, 300);
    $(this)
      .find(".scope")
      .css("color", "#2c9ab7");
  });

  //监测滚动条大于零时，导航添加下阴影
  $(window).scroll(function() {
    if ($(window).scrollTop() > 0) {
      header.css({ "box-shadow": "0px 0px 2px 2px #ccc" });
    } else {
      header.css({ "box-shadow": "none" });
    }
  });
  //页面加载之后执行三个小block下滑突出的效果
  slide();

  //block里的适用于是否显示
  autoMarketing.mouseenter(function() {
    $(this)
      .find(".auto_item")
      .stop()
      .animate({ opacity: "1", height: "160px" }, 300);
  });
  autoMarketing.mouseleave(function() {
    $(this)
      .find(".auto_item")
      .stop()
      .animate({ opacity: "0", height: "0" }, 300);
  });
  //首页的人工咨询
  consult.on("click", function(event) {
    if (win_state) {
      consultWin
        .stop()
        .animate({ opacity: "1", height: "344px", width: "270px" }, 300);
      win_state = false;
    } else {
      consultWin
        .stop()
        .animate({ opacity: "0", height: "0px", width: "0px" }, 300);
      win_state = true;
    }

    event.stopPropagation();
  });
  consultWin.on("click", function(event) {
    event.stopPropagation();
  });

  $(document).on("click", function() {
    consultWin
      .stop()
      .animate({ opacity: "0", height: "0px", width: "0px" }, 300);
    win_state = true;
  });

  //邮件正则
  emailInput.blur(function() {
    emailZe($(this));
  });
  //手机正则
  phoneInput.blur(function() {
    phoneZe($(this));
  });

  //apply移入效果
  block.mouseenter(function() {
    $(this)
      .find(".desc")
      .css({ display: "block", transition: "1s" });
    $(this)
      .find(".desc")
      .stop()
      .animate({ height: "80px", opacity: "1" }, 300);
    // $(this).css({ transform: "scale(1.1,1.1)", transition: "0.7s" });
  });
  block.mouseleave(function() {
    // $(this).css({ transform: "scale(1,1)", transition: "0.7s" });

    $(this)
      .find(".desc")
      .stop()
      .animate({ height: "0px", opacity: "0" }, 600, function() {
        //console.log(33333333);
        //$(this).css({ display: "none"});
      });
  });

  // functionBlock.css("height", Height - 120 + "px");
  //蒙版的宽高
  matte.css({ width: W, height: H });
  yes.css({ top: yesT, left: yesL });

  //二级导航的宽度等同于屏幕宽度
  childNav.css("width", W);

  //导航的小iocn放大缩小
  childNava.mouseenter(function() {
    $(this).css({ transform: "scale(1.1,1.1)", transition: "0.6s" });
  });
  childNava.mouseleave(function() {
    $(this).css({ transform: "scale(1,1)", transition: "0.6s" });
  });

  //关于我们的页面
  scaleItem.mouseenter(function() {
    imgScale($(this));
  });
  scaleItem.mouseleave(function() {
    imgScale_samll($(this));
  });
  console.log(scaleItem)
  applyH.mouseenter(function() {
    imgScale($(this).find("img"));
  });
  applyH.mouseleave(function() {
    imgScale_samll($(this).find("img"));
  });
  $(".order").click(function() {
    if (cmd($("#formBox"))) {
      test($("#tf")[0]);
    } else {
      alert("请将表单填写完整");
    }

    return false;
  });

  $(".tryOne").click(function() {
    console.log(3333);
    if (cmd($("#mfFull"))) {
      test($("#mf")[0]);
    } else {
      alert("请将表单填写完整");
    }

    return false;
  });

  $(".code_button").click(function(e) {
    e.preventDefault();
    random($("#tf")[0]); //获取短信验证码
  });
  $(".code_button_mf").click(function(e) {
    e.preventDefault();
    random($("#mf")[0]); //获取短信验证码
  });

  //点击OK清除浮层
  $(".OK").click(function() {
    $(".matte").css("display", "none");
  });

  //点击刷新更换随机码
  $(".redraw").click(function(e) {
    e.preventDefault();
    $(".random")
      .find(".randomImg")
      .attr(
        "src",
        "https://wellemail.com/Service/CheckCodeImage?" + new Date().getTime()
      );
  });

  shadow(cardRight);
  shadow(cardLeft);
  show(emailInformation);
  //关于我们
  shadow(scaleItem);
  shadow(scaleItem);
  
  exampleSwitch(titleCase,Case_example,triangle,infoText);
  exampleSwitch(titleProduct,provide_example,solutionTriangle,solutionInfoText);
  autoSwitch(titleCase,Case_example,triangle,infoText);
  
  titleCase.mouseenter(function(){
    clearInterval(timer);
  })
  titleCase.mouseleave(function(){
    autoSwitch(titleCase,Case_example,triangle,infoText);
  })
  contentExample.mouseenter(function(){
    clearInterval(timer);
  })
  contentExample.mouseleave(function(){
    autoSwitch(titleCase,Case_example,triangle,infoText);
  })
  
});

//文字跳出
// popup();
// function popup() {
//   var we = "会员邮件营销";

//   var timer = setInterval(function() {
//     var doc = we.slice(0, 1);
//     we = we.slice(1);
//     var divs = $("#emailMarket");
//     divs.html(divs.html() + doc);
//     if (we.length <= 0) {
//       clearInterval(timer);
//     }
//   }, 200);
// }

//暂时更换

//点击滚屏营销自动化侧边导航
// var navA = $(".small_nav").find("a");
// navA.on("click", function () {
//   var index = $(this).index();
//   navA.css("backgroundColor", "#fff");
//   console.log($(this));
//   $(this).css("backgroundColor", "#ccc");

//   $.scrollify.move(index);
// });
