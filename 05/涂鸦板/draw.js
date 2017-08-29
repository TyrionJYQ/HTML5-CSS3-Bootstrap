window.onload = function () {
	// 获得画布并设置画布规格及边框
	var canvas = document.getElementById("myCanvas");
	canvas.width = 900;
	canvas.height = 600;
	canvas.style.border = "1px solid #000";
	//获取上下文对象（获得画笔）
	var cxt = canvas.getContext("2d");

	canvas.onmousedown = function(e) {
		var x = e.clientX - canvas.getBoundingClientRect().left;
		var y = e.clientY - canvas.getBoundingClientRect().top;
		cxt.beginPath();			  //开始坐标
		cxt.moveTo(x,y);             //起始坐标

		//onmousemove
		canvas.onmousemove = function (e) {
			var x = e.clientX - canvas.getBoundingClientRect().left;
			var y = e.clientY - canvas.getBoundingClientRect().top;
			cxt.lineTo(x,y);       //移动坐标
			cxt.stroke();		   //绘制
		};

		canvas.onmouseup = function (e) {
			canvas.onmousemove = null;
		};
	}


}