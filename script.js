//SGN your JS code here. If required.
let btn = document.getElementById("btn");
let output = document.getElementById("output");

const Prm = () => {
	let txt = document.getElementById("text").value;
	let del = parseInt(document.getElementById("delay").value);

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(txt);
		}, del);
	});
}

btn.addEventListener('click', () =>{
	Prm().then(result => {
		output.textContent = result;
	}).catch(e =>{
		console.log('Error:', e);
	});
});

