	
	var bike ={color:"red",rate:15000, company:"HONDA"};
	document.getElementById('arr').innerHTML=bike.color+" "+bike.rate+" "+bike.company;


	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("demo1").innerHTML = "Original Array:<br> " + fruits;
	function myFunction() 
	{
  	var removed = fruits.splice(2, 2, "Lemon", "Kiwi"); 
  	document.getElementById("demo2").innerHTML = "New Array:<br>" + fruits;
  	document.getElementById("demo3").innerHTML = "Removed Items:<br> " + removed;
  	}


	function  addFunction(a,b) 
	{
	return a+b;
	}

	function add()
	{
	var a = parseInt(document.getElementById('val1').value);
	var b = parseInt(document.getElementById('val2').value);
	if(document.getElementById('val1').value == "")
		{
		alert("enter number");
		}
	else
		{
		var c = a + b;
          document.getElementById('val3').value = c;
		} 
	}
	
	function myDay() 
		{
  	var greeting;
  	var time = new Date().getHours();
  		if (time < 10) {
    		greeting = "Good morning";
  		} else if (time < 20) {
    		greeting = "Good day";
  		} else {
    		greeting = "Good evening";
  		}
  document.getElementById("day").innerHTML = greeting;
		}

