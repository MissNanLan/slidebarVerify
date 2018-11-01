let box = document.getElementById("box"),
  bg = document.getElementById("bg"),
  text = document.getElementById("text"),
  btn = document.getElementById("btn"),
  success = false,
  distance = box.offsetWidth - btn.offsetWidth; //滑动成功的宽度（距离）

// 首先获得按钮初始的水平坐标

btn.onmousedown = function(e) {
  var e = e || window.event;
  var downX = e.clientX;
  btn.style.transition = " ";
  bg.style.transition = " ";
  document.onmousemove = function(e) {
    var e = e || window.event;
    var moveX = e.clientX; // 获取鼠标移动的坐标
    var offsetX = moveX - downX; // 得到鼠标的偏移量

    if (offsetX > distance) {
      offsetX = distance; // 如果滑过了终点,鼠标就停在终点的位置
    } else if (offsetX < 0) {
      offsetX = 0; // 回到起点
    }

    btn.style.left = offsetX + "px"; // 鼠标滑动的距离;
    bg.style.width = offsetX + "px";

    if (offsetX === distance) {
      //  滑动成功
      text.innerHTML = "验证通过";
      text.style.color = "white";
      btn.innerHTML = "OK";
      bg.style.background = "green";
      success = true;
      btn.onmousedown = null;
      document.onmousemove = null;
    }
  };
  // 鼠标松开事件
  document.onmouseup = function() {
    if (success) {
      return;
    } else {
      btn.style.left = 0;
      bg.style.width = 0;
      // btn.style.transition = "left 1s ease";
      // bg.style.transition = "width 1s ease";
    }
    document.onmousemove = null;
    document.onmouseup = null;
  };
};
