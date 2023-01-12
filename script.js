const inputval1=document.getElementById('val1');
const btn=document.getElementById('check');
btn.addEventListener('click',function(){
	const val1=inputval1.value;
	const res=document.getElementById('result');
	res.innerText = (parseInt(val1)%2==0) ? "Even Number" :"Odd Number";
	
});