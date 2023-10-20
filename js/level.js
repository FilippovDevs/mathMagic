window.onload = function(){

	let container = document.querySelector('.container');
	let levelTitle = document.querySelector('.levelTitle');
	let content = document.querySelector('.content');
	let textTask = document.querySelector('.textTask');
	let answer = document.querySelector('.answer');
	let answerCheckBtn = document.querySelector('.answerCheckBtn');
	let goHomeBtn = document.querySelector('.homeButton');

	levelTitle.textContent = 
		`Уровень ${sessionStorage.getItem('selected_level')}`;

	content.innerHTML = levelTasks[
		sessionStorage.selected_level
	]['content'];

	//Проверка ответа
	answerCheckBtn.onclick = function(){
		
		let right = levelTasks[
			sessionStorage.selected_level
		]['rightAnswer'];

		if(right == answer.value){

			levelTitle.textContent = 'Правильно !';

			localStorage.solvedCount = Number(localStorage.solvedCount) + 1;
			
			setTimeout(function(){
				window.location.href = '../index.html';
			},1500);
			
		}
		else{
			levelTitle.textContent = 'Попробуйте ещё раз...';
		}

	}

	goHomeBtn.onclick = function(){
		location.href = '../index.html';
	}

	
} 