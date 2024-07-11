function volume_sphere() {
    //Write your code here
	let R = document.getElementById('radius').value;
	let vol = (4/3) * Math.PI * Math.pow(R,3)
	// document.getElementById('volume').value = vol
	if(R>0){
		document.getElementById('volume').value = vol.toFixed(4)
	}
	else{
		document.getElementById('volume').value = NaN
	}
	
  
} 

// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
