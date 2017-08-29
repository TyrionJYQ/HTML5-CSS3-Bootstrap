window.onload = function () {
	var canvas = document.getElementById("myCanvas");
	// console.log(canvas);
	canvas.width = 877;
	canvas.height = 672;
	//canvas.style.border = "3px solid red";	
	var cxt = canvas.getContext("2d");
	var image = new Image();    //声明图片
	var radius = 50;            //声明半径
	image.src = "images/pic.jpg";
	image.onload = function (e) {
		initCanvas();           //初始画布,图片初加载时会出现一个圆形
	}
	function initCanvas () {
		Region = {
			x:Math.random()*(canvas.width-2*radius) + radius,
			y:Math.random()*(canvas.height-2*radius) + radius,
			r:radius
		}
		draw(Region);                 //绘制图片
	}
	// initCanvas();
	// console.log(Region.x);
	
	function setRegion(Region) {      //clip方法设置圆形剪切区域，该方法没有参数
		cxt.beginPath();
		cxt.arc(Region.x,Region.y,Region.r,0,Math.PI*2,false);  //圆形区域，
		cxt.clip();        //剪切上面绘制的圆形区域
	}
	function draw () {
		//用于每次清除上一次绘制的圆形，保证每次只显示一个区域
		cxt.clearRect(0,0,canvas.width, canvas.height);
		cxt.save();
		setRegion(Region);
		cxt.drawImage(image,0,0);     //在剪切的圆形区域绘制原图片
		cxt.restore();
	}

	//单击事件reset()方法，在该方法中调用initCanvas()方法，使圆形半径大于画布
	//每次在不同的位置绘制圆形区域
	function reset () {
		initCanvas();
	}
	//单击事件show()方法，在该方法中调用drawImage()方法，使圆形半径大于画布
	//这样剪切的圆形区域就会包括整个图片
	function show () {
		Region.r = 9*Math.max(canvas.width, canvas.height);  //重新设置圆形半径
		// Region.r =20;
		draw(image,Region);
	}
	//按钮点击事件
	var btnReset = document.getElementById("buttonReset");
	var btnShow = document.getElementById("buttonShow");
	btnReset.onclick = function () {
		reset();
	}
	btnShow.onclick = function () {
		show();
	}
}
