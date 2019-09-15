window.onload = function(){
	// 图片预加载
	var loading = document.querySelector("#loading");
	var loadingP = loading.getElementsByTagName("p")[0];
	var swiperWrapper = document.querySelector(".swiper-wrapper");
	var swiperSlide = document.querySelectorAll(".swiper-slide");
	var picArr = [
		"../images/bg1.png","../images/0.png","../images/1.png",
		"../images/2.png","../images/7.png","../images/chainLeft.png",
		"../images/chainRight.png","../images/fence.png",
		"../images/circle.png","../images/gear1.png","../images/gear2.png",
		"../images/gear3.png","../images/gear4.png","../images/gear5.png",
		"../images/gear6.png","../images/gear7.png","../images/gear8.png",
		"../images/line1.png","../images/line10.png","../images/line11.png",
		"../images/line12.png","../images/line13.png","../images/line14.png",
		"../images/line2.png","../images/line3.png","../images/line4.png",
		"../images/line5.png","../images/line6.png","../images/line7.png",
		"../images/line8.png","../images/line9.png","../images/M.png",
		"../images/next.png","../images/paw.png","../images/pawLeft.png",
		"../images/pawRight.png","../images/person1.png",
		"../images/person2.png","../images/bg2.png",
		"../images/bottomTextLogo.png",
		"../images/second_words.png","../images/bg3.png",
		"../images/third_condition.png","../images/third_dot1.png",
		"../images/third_work.png","../images/bg4.png",
		"../images/forth_demon.png","../images/forth_demon1.png",
		"../images/forth_demon2.png","../images/forth_demon3.png",
		"../images/forth_demon4.png","../images/forth_yello.png",
		"../images/intro.png","../images/bg5.png","../images/cube.png",
		"../images/fifth_demon.png","../images/fifth_dot.png",
		"../images/fifth_dot1.png","../images/QRCode.png" 
	];
	var img = new Image();
	var sum = picArr.length;
	var now = 0;
	loadImg();
	function loadImg(){
		img.src = picArr[now]; 
		function go(){
			now ++ ;
			loadingP.innerHTML = parseInt( now/sum *100 ) + "%";
			if(now < picArr.length){
				loadImg()
			}else{
				loading.style.display = "none";
				action();
			}
		}
		img.onerror = go;
		img.onload = go;
	}
	function action(){
		document.getElementsByTagName("html")[0].style.background = "black"
		var mySwiper = new Swiper('.swiper-container', {
			direction: 'vertical',
			speed:800,
			noSwiping: true,
			followFinger: false,
			onSlideChangeStart:function(swiper){
				swiperSlide[swiper.previousIndex].style.zIndex = -9999;
				for (var i = 0; i < swiperSlide.length; i++) {
					swiperSlide[i].classList.add("swiper-no-swiping")
				}
				setTimeout(function(){
					for (var i = 0; i < swiperSlide.length; i++) {
						if(i!=1){
							swiperSlide[i].classList.remove("swiper-no-swiping")
						}
					}
				},1000)
				if(swiper.activeIndex>swiper.previousIndex){
					swiperSlide[swiper.previousIndex].style.transform = 
					swiperSlide[swiper.previousIndex].style.webkitTransform = 
					"translateY("+ mySwiper.height +"px) scale(0.8)";
					swiperSlide[swiper.previousIndex].style.transition = 
					swiperSlide[swiper.previousIndex].style.webkitTransition = '1s';
					swiperSlide[swiper.previousIndex].style.webkitFilter = 
					swiperSlide[swiper.previousIndex].style.filter = 
					"brightness(0.5)";
				}else{
					swiperSlide[swiper.previousIndex].style.transform = 
					swiperSlide[swiper.previousIndex].style.webkitTransform = 
					"translateY("+ -mySwiper.height +"px) scale(0.8)";
					swiperSlide[swiper.previousIndex].style.transition = 
					swiperSlide[swiper.previousIndex].style.webkitTransition = '1s';
					swiperSlide[swiper.previousIndex].style.webkitFilter = 
					swiperSlide[swiper.previousIndex].style.filter = 
					"brightness(0.5)";
				}
				if(swiper.activeIndex === 0){
					first();
				}
				if(swiper.activeIndex === 1){
					second();
				}
				if(swiper.activeIndex === 2){
					third();
				}
				if(swiper.activeIndex === 3){
					forth();
				}
				if(swiper.activeIndex === 4){
					fifth();
				}
			},
			onSlideChangeEnd: function(swiper){
				swiperSlide[swiper.previousIndex].style.transform = 
				"translateY(0px) scale(1)";
				swiperSlide[swiper.previousIndex].style.zIndex = -1;
				swiperSlide[swiper.previousIndex].style.webkitFilter = 
				"brightness(1)"
		    },
			nextButton:'.arrow'
		})
		

		// 第一页的动画
		var html = document.documentElement;
		var width = html.getBoundingClientRect().width;
		var fs = width/16;
		var tl = new TimelineMax();
		var onoff = true;
		first();
		function first(){
			var numberImg = document.querySelectorAll(".number img");
			for (var i = 0; i < numberImg.length; i++) {
				numberImg[i].index = i;
			}
			if(onoff){
				onoff = false;
				tl.staggerFrom(".number",3,{
					y:-9*fs,
					ease:Elastic.easeOut,
					delay:0.5
				})
				.staggerTo(numberImg,1,{
					scale:1,
					ease:Elastic.easeOut,
					onComplete:function(){
						for (var i = 0; i < numberImg.length; i++) {
							if(i==0){
								numberImg[i].className = "goDown";
							}
							if(i==1){
								numberImg[i].className = "goUp";
							}
							if(i==2){
								numberImg[i].className = "goDown2";
							}
							if(i==3){
								numberImg[i].className = "goDown";
							}
						}
					}
				},.2,"-=1.5")
				.staggerTo(".pawBox",1.2,{
					top:0
				},"-=0.3")
				.staggerTo(".paws",.1,{
					cycle:{
			 			rotation:[25,-25]
			 		},
			 		ease:Circ.easeIn
				})
				.staggerTo(".M",.8,{
					y:3*fs,
					ease:Bounce.easeOut
				})
				.staggerTo(".chain",.5,{opacity:1})
				.staggerTo(".paws",.1,{
		 			rotation:0
				},"-=0.3")
				.staggerTo(".paw",.3,{
					y:-1*fs
				},'-=.1')
				.staggerTo(".paw",0.9,{
					rotation:5,
					x:4*fs,
					ease:Linear.easeIn
				},"-=.1")
				.set(".paw", {
					x:5*fs,
					transformOrigin: "top center"
				})
				.staggerTo(".paw",2.5,{
					rotation:0,
					ease:Elastic.easeOut,	
				})
			}else{
				tl.restart();
			}
		};
		// 第二页动画
		var t2 = new TimelineMax();
		var t21 = new TimelineMax();
		var colArr = ["#020e4e","#dbe3f3","#6581bf","#8da2d2",
		"#ffffff","#6b86c3"];
		var oWord = document.querySelector('.word');
		var outer;
		var ori;
		var onoff2 = true;
		var timer;
		var timer2;
		var str = '<div class="ori"></div>';
		for(var i=0; i<14; i++){
			for(var j=0; j<14; j++){
				str += '<div class="outer" style="background:' + 
				colArr[(i*14+j)%6] + ';"></div>';
			}
		};
		oWord.innerHTML = str;
		var oOuter = document.querySelectorAll('.outer');
		t2.set(oOuter,{opacity:1,x:900,y:800,z:2050,
			transformPerspective:1000});
		var oRi = document.querySelector('.ori');
		function second(){
			if(onoff2){
				onoff2 = false;
				t2.staggerTo(oOuter,2.5,{
					cycle: {
						bezier: function(){
							// 这是每一个小点的弧线运动
							return [
								{x:Math.random()*300+400, y:Math.random()*200+500,z:1050},
								{x:Math.random()*300+200, y:Math.random()*200+300,z:550},
								{x:Math.random()*100, y:Math.random()*200+300,z:500},
								{x:Math.random()*100-300, y:Math.random()*100+200,z:450},
								{x:Math.random()*100-300, y:Math.random()*20+60,z:400},
								{x:Math.random()*50-150, y:Math.random()*100-200,z:350},
								{x:Math.random()*100+150, y:Math.random()*100-200,z:300},
								{x:Math.random()*100+220, y:Math.random()*100+20,z:400},
								{x:Math.random()*10+100, y:Math.random()*100+30,z:350},
								{x:0,y:0,z:0}
							]
						},
						rotationX: function(){
							return Math.random()*70
						},
						rotationY: function(){
							return Math.random()*70
						}
					}
				},.011);
				var bottomTextImg = document.querySelector('.bottomText p img');
				t21.from('.borderBom',.2,{
					width:0,
					// 在这里是为了让下面的边框从中间向外延伸
					left:6.0*fs,
					// 在小圆点开始运动过程的3秒后开始运动
					delay:3
				})
				.from('.sideBorder',.2,{
					height:0
				})
				.from('.topBorder',.2,{
					width:0
				})
				.from(bottomTextImg,.2,{
					y:2*fs,
					opacity:0,
					delay:.2
				})
				.from('.font',.2,{
					y:-fs,
					opacity:0
				});
			}else{
				t2.restart();
				t21.restart();
			};
			oRi.style.height = 0;
			clearTimeout(timer);
			clearInterval(timer2);
			timer = setTimeout(function(){
				var num = 0;
				timer2 = setInterval(function(){
					oOuter[num].style.opacity = 0;
					// Math.floor()向下取整
					var h = Math.floor(num/14)/14*14*fs;
					oRi.style.height = h + 'px';
					num ++;
					if(num >= 196){
						num = 0;
						clearTimeout(timer);
						clearInterval(timer2);
						swiperSlide[1].classList
						.remove('swiper-no-swiping');
					}
				},.1)
				// 这里是随着小圆点运动的时间文字逐渐出现
			},2800)
		};
		// 第三部分动画
		var oWork = document.querySelector('.work');
		var t3 = new TimelineMax();
		var onoff3 = true;
		function third(){
			if(onoff3){
				onoff3 = false;
				var oWidth = parseInt(oWork.getBoundingClientRect().width);
				var oHeight = parseInt(oWork.getBoundingClientRect().height);
				var workObj = {
					col: 5,
					row: 3,
					w: oWidth,
					h: oHeight
				};
				var eachSqrtWidth = parseInt(workObj.w/workObj.col);
				var eachSqrtHeight = parseInt(workObj.h/workObj.row);
				var str = '';
				for(var i=0; i<workObj.row; i++){
					for(var j=0; j<workObj.col; j++){
						// addClass要放在for循环当中
						var addClass = 'cover';
						if(i == 0){
							addClass += ' borderTop';
						}
						if(i == workObj.row-1){
							addClass += ' borderBottom';
						}
						if(j == 0){
							if(i == 1){
								addClass += ' borderRight';
							}else{
								addClass += ' borderLeft';
							}
						}
						if(j == workObj.col-1){
							if(i == 1){
								addClass += ' borderLeft';
							}else{
								addClass += ' borderRight';
							}
						}
						str += '<div class="' + addClass + '" style="width:' + eachSqrtWidth + 'px;height:' + eachSqrtHeight + 'px;">'
					}
				};
				for(var i=0; i<workObj.col*workObj.row; i++){
					str += '</div>'
				};
				oWork.innerHTML += str;
				var aCover = document.querySelectorAll('.work .cover');
				var w = eachSqrtWidth;
				var h = eachSqrtHeight;
				t3.set(aCover[0],{transformOrigin: 'left'})
				.set(aCover[1],{x: w,transformOrigin: 'left'})
				.set(aCover[2],{x: w,transformOrigin: 'left'})
				.set(aCover[3],{x: w,transformOrigin: 'left'})
				.set(aCover[4],{x: w,transformOrigin: 'left'})
				.set(aCover[5],{y: h,transformOrigin: 'top'})
				.set(aCover[6],{x: -w,transformOrigin: 'right'})
				.set(aCover[7],{x: -w,transformOrigin: 'right'})
				.set(aCover[8],{x: -w,transformOrigin: 'right'})
				.set(aCover[9],{x: -w,transformOrigin: 'right'})
				.set(aCover[10],{y: h,transformOrigin: 'top'})
				.set(aCover[11],{x: w,transformOrigin: 'left'})
				.set(aCover[12],{x: w,transformOrigin: 'left'})
				.set(aCover[13],{x: w,transformOrigin: 'left'})
				.set(aCover[14],{x: w,transformOrigin: 'left'})
				.from('.work img',.5,{
					y:-6*fs,
					ease: Elastic.easeOut,
					delay:1
				})
				.staggerFrom(aCover,.5,{
					cycle: {
						rotationY: function(){
							return 90
						}
					},
					opacity:0
				},.1);
				var aP = document.querySelectorAll('.work p');
				for(var i=0; i<aP.length; i++){
					var str = '';
					for(var j=0; j<aP[i].innerHTML.length; j++){
						str += '<span>' + aP[i].innerHTML[j] + '</span>'
					};
					aP[i].innerHTML = str;
				};
				var aSpan = document.querySelectorAll('.work span');
				var reverse = -1,
					baseTop = 100,
					fontIndex = 0,
					nowTop = 0;
				t3.staggerFrom(aSpan,1,{
					cycle:{
						y:function(index){
							// 当文字在同一个P标签中的时候，只会执行fontIndex++操作
							if(aSpan[index].offsetTop != nowTop){
								nowTop = aSpan[index].offsetTop;
								reverse = reverse * -1;
								fontIndex = 0;
							};
							fontIndex ++;
							return baseTop = (nowTop-(fontIndex-5)*(fontIndex-5))*reverse
						},
						x:function(index){
							return 50*reverse
						}
					},
					opacity:0
				},0.003)
				// 任职条件动画
				var oCondition = document.querySelector('.condition');
				var conWidth = parseInt(oCondition.getBoundingClientRect().width);
				var conHeight = parseInt(oCondition.getBoundingClientRect().height);
				var conObj = {
					col: 4,
					row: 3,
					w: conWidth,
					h: conHeight
				};
				var eachWidth = parseInt(conObj.w/conObj.col);
				var eachHeight = parseInt(conObj.h/conObj.row);
				var sti = '';
				for(var i=0; i<conObj.row; i++){
					for(var j=0; j<conObj.col; j++){
						var classStr = 'cover';
						if(i == 0 ){
							classStr += ' borderTop'
						};
						if(i == conObj.row -1 ){
							classStr += ' borderBottom'
						};
						if(j == 0 ){
							if(i != 1){
								classStr += ' borderRight'
							}else{
								classStr += ' borderLeft'
							}
						};
						if(j == conObj.col - 1 ){
							if(i != 1){
								classStr += ' borderLeft'
							}else{
								classStr += ' borderRight'
							}
						};
						sti += '<div class="' + classStr + '" style="height:' + eachHeight + 'px;width:' + eachWidth + 'px;">';
					};
				};
				for(var i=0; i<conObj.col*conObj.row; i++){
					sti += '</div>'
				};
				// 在这里一定是 += sti
				oCondition.innerHTML += sti;
				var aCovers = document.querySelectorAll('.condition .cover');
				var cw = eachWidth;
				var ch = eachHeight;
				t3.set(aCovers[0],{transformOrigin:'right'})
				.set(aCovers[1],{x:-cw,transformOrigin:'right'})
				.set(aCovers[2],{x:-cw,transformOrigin:'right'})
				.set(aCovers[3],{x:-cw,transformOrigin:'right'})
				.set(aCovers[4],{y:ch,transformOrigin:'top'})
				.set(aCovers[5],{x:cw,transformOrigin:'left'})
				.set(aCovers[6],{x:cw,transformOrigin:'left'})
				.set(aCovers[7],{x:cw,transformOrigin:'left'})
				.set(aCovers[8],{y:ch,transformOrigin:'top'})
				.set(aCovers[9],{x:-cw,transformOrigin:'right'})
				.set(aCovers[10],{x:-cw,transformOrigin:'right'})
				.set(aCovers[11],{x:-cw,transformOrigin:'right'})
				.staggerFrom('.condition img',.5,{
					y:-17*fs,
					ease: Elastic.easeOut,
					delay:.5
				},.5)
				.staggerFrom(aCovers,.5,{
					cycle:{
						rotationY:function(){
							return 90
						}
					},
					opacity:0
				},.1);
				var aPs = document.querySelectorAll('.condition p');
				var aSpans = document.querySelectorAll('.condition span');
				for(var i=0; i<aPs.length; i++){
					var str = '';
					for(var j=0; j<aPs[i].innerHTML.length; j++){
						str += '<span>' + aPs[i].innerHTML[j] + '</span>'
					};
					aPs[i].innerHTML = str;
				};
				var aSpans = document.querySelectorAll('.condition span');
				t3.staggerFrom(aSpans,1,{
					cycle:{
						y:function(index){
							// 当文字在同一个P标签中的时候，只会执行fontIndex++操作
							if(aSpans[index].offsetTop != nowTop){
								nowTop = aSpans[index].offsetTop;
								reverse = reverse * -1;
								fontIndex = 0;
							};
							fontIndex ++;
							return baseTop = (nowTop-(fontIndex-5)*(fontIndex-5))*reverse
						},
						x:function(index){
							return 50*reverse
						}
					},
					opacity:0
				},0.003)
			}else{
				t3.restart()
			}
		};
		// 第四页动画
		var t4 = new TimelineMax();
		var onoff4 = true;
		function forth(){
			if(onoff4){
				onoff4 = false;
				var oP = document.querySelector('.introduce p');
				var sts = '';
				for(var i=0; i<oP.innerHTML.length; i++){
					sts += '<span>' + oP.innerHTML[i] + '</span>';
				};
				oP.innerHTML = sts;
				var reverse = -1,
					baseTop = 100,
					fontIndex = 0,
					nowTop = 0;
				var aSpans = document.querySelectorAll('.introduce span');
				t4.staggerFrom(aSpans,1,{
					cycle:{
						y:function(index){
							// 当文字在同一个P标签中的时候，只会执行fontIndex++操作
							if(aSpans[index].offsetTop != nowTop){
								nowTop = aSpans[index].offsetTop;
								reverse = reverse * -1;
								fontIndex = 0;
							};
							fontIndex ++;
							return baseTop = (nowTop-(fontIndex-5)*(fontIndex-5))*reverse
						},
						x:function(index){
							return 50*reverse
						}
					},
					opacity:0,
					delay:2
				},0.003)
			}else{
				t4.restart();
			};
			var oCoverBox = document.querySelector('.coverBox');
			var oIntroduce = document.querySelector('.introduce');
			var oW = parseInt(oIntroduce.getBoundingClientRect().width);
			var oH = parseInt(oIntroduce.getBoundingClientRect().height);
			var eachW = parseInt(oW/8);
			var eachH = parseInt(oH/8);
			var std = '';
			for(var i=0; i<8; i++){
				for(var j=0; j<8; j++){
					var sClass = 'cover';
					if(i == 0){
						sClass += ' borderTop'
					};
					if(i == 7){
						sClass += ' borderBottom'
					};
					if(j == 0){
						sClass += ' borderLeft'
					};
					if(j == 7){
						sClass += ' borderRight'
					};
					std += '<div class="' + sClass + '" style="width:' + eachW + 'px;height:' + eachH + 'px;"></div>'
				};
			};
			oCoverBox.innerHTML = std;
			var oCover = document.querySelectorAll('.coverBox .cover');
			for(var i=0; i<oCover.length; i++){
				oCover[i].style.transform = oCover[i].style.webkitTransform = 'scale(0) rotateX(180deg)';
			};
			setTimeout(function(){
				for(var i=0; i<oCover.length; i++){
					oCover[i].style.transition = oCover[i].style.webkitTransition = '2s';
					oCover[i].style.transitionDelay = oCover[i].style.webkitTransitionDelay = (i%8)*.1 + 's'
					oCover[i].style.transform = oCover[i].style.webkitTransform = 'scale(1) rotateX(0deg)';
				};
			},1000)
		};
		// 第五页动画
		var boxWrap = document.getElementById("boxWrap");
		var t5 = new TimelineMax();
		var t51 = new TimelineMax();
		var t52 = new TimelineMax();
		var onoff5 = true; 
		function fifth(){
			if(onoff5){
				onoff5 = false;
				var str = "";
				var pos1 = [[0,fs],[0,6.15*fs],[0,11.32*fs],[0,14.75*fs],[3.12*fs,4.47*fs],[3.12*fs,13.03*fs],[6.21*fs,fs],[7.81*fs,7.03*fs],[9.375*fs,9.5*fs],[7.81*fs,15.62*fs]];
				
				var pos2 = [[0,9.48*fs],[0,12.88*fs],[0,16.28*fs],[0,19.72*fs],[3*fs,12.88*fs],[5.44*fs,16.28*fs],[7.76*fs,12.88*fs],[10.88*fs,9.48*fs],[10.88*fs,12.88*fs],[10.88*fs,16.28*fs],[10.88*fs,19.72*fs]];
				
				for (var i = 0; i < pos1.length; i++) {
					str += "<div class='cube1' style='left:"+ pos1[i][0] +"px;top:"+  pos1[i][1]+"px'></div>";
				}
				for (var i = 0; i < pos2.length; i++) {
					str += "<div class='cube2' style='left:"+ pos2[i][0] +"px;top:"+  pos2[i][1]+"px'></div>";
				}
				boxWrap.innerHTML = str;
				var cube1 = document.querySelectorAll(".cube1");
				var cube2 = document.querySelectorAll(".cube2");
				t5.set([cube1,cube2],{
					x:16*fs,
					y:-5.5*fs
				})
				.staggerTo(cube1,1,{
					x:0,
					y:0,
					ease:Circ.easeOut
				},.05 )
				.staggerTo(cube1,2,{
					x:-16*fs,
					y:5.5*fs,
					ease:Circ.easeOut,
					delay:2
				},.05 )
				.staggerTo( cube2,1,{
					x:0,
					y:0,
					ease:Circ.easeOut
				},.08,"-=1.5" )
				.staggerTo( cube2,2,{
					x:-17*fs,
					y:6*fs,
					ease:Circ.easeOut,
					delay:2
				},.05 )
				// '-1'表示循环无数次
				t5.repeat(-1);
				t5.repeatDelay(-1.5)
				
				var textContent = document.querySelector(".textContent");
				t51.to(textContent,4,{
					y:-50,
					ease:Cubic.easeInOut
				})
				.to(textContent,4,{
					y:0,
					ease:Cubic.easeInOut
				})
				t51.repeat(-1);
				
				var dotts = document.querySelectorAll(".fifth_dot");
				t52.to(dotts,2,{
					y:20
				})
				.staggerTo(dotts,2,{
					y:0,
					delay:1
				},.5)
				t52.repeat(-1);
				
			}else{
				t5.restart();
				t51.restart();
				t52.restart();
			}
		}
	}
}