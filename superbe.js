i = 0;
var t = new Array("aqua", "blue", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "yellow", "white");

setInterval('change()',500);

function change(){
	if(i>15){
		i=0;
    }
	document.body.style.backgroundColor = t[i];
	i=i+1;
}

