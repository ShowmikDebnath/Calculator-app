var box=document.getElementById('display');
function addtoscreen(x)
{
	box.value+=x;
	if(x=='c'){
		box.value="";
	}
}
function answer(){
	x=box.value;
	x=eval(x);
	box.value=x;
}
function backspace(){
	var number=box.value;
	var len=number.length-1;
	var newnumber=number.substring(0, len);
	box.value=newnumber;
}
function power(y)
{
	x=box.value;
	x=Math.pow(x,y);
	box.value=x;
}