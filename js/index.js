let levels = document.querySelectorAll('.level');

let levelButtons = document.querySelectorAll('.level');

let colors = {
	0:'rgb(66, 133, 244)',
	1:'rgb(52, 168, 83)',
	2:'rgb(251, 188, 5)',
	3:'rgb(234, 67, 53)'
}

for(let i = 0; i < levelButtons.length; i++){
	levelButtons[i].style.background = colors[i%4];
}


for(let level of levels){

	level.onclick = function(){
		
		let userSelectedLevel = this.getAttribute('name');
		
		sessionStorage.setItem('selected_level', userSelectedLevel);
		location.href = './pages/level.html';
	
	}

}
