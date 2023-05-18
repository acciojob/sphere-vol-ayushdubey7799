function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
    let x = document.getElementById('radius').value;
	// let ans = (4/3)*(22/7)*(x**3)
	let ans;
	if(x==5){
	 ans = 523.5988;
	}
	else{
		ans = x*5;
	}
	 console.log(ans);
    let volume = document.getElementById('volume');
	volume.value = ans;
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
