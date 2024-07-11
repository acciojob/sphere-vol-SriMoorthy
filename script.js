function volume_sphere() {
    //Write your code here
	let R = document.getElementById('radius').value;
	let vol = (3/4) * Math.PI * Math.pow(R,3)
	// document.getElementById('volume').value = vol
	if(R>0){
		document.getElementById('volume').value = vol
	}
	else{
		document.getElementById('volume').value = NaN
	}
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
