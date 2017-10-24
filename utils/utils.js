/**
* 时间戳转化格式化时间 yyyy/MM/dd hh:mm:ss
*/
function getFormatTime(timestamp){
	var date = new Date(timestamp);
    var Y = date.getFullYear() + '/';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/';
    var D = date.getDate() + ' ';
    var h = date.getHours() + ':';
    var m = date.getMinutes() < 10 ? ('0' + date.getMinutes() + ':') : date.getMinutes() + ':';
    var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    var formatTime = Y + M + D + h + m + s;
    return formatTime;
}

// 模块化。将公共代码抽离出一个js文件，通过 module.exports 对外暴露接口

module.exports = {
  formatTime: getFormatTime
}
