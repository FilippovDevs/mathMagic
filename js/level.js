window.onload = function(){

	let container = document.querySelector('.container');
	let levelTitle = document.querySelector('.levelTitle');
	let content = document.querySelector('.content');
	let textTask = document.querySelector('.textTask');
	let answer = document.querySelector('.answer');
	let answerCheckBtn = document.querySelector('.answerCheckBtn');

	levelTitle.textContent = 
		`Уровень ${sessionStorage.getItem('selected_level')}`;

	content.innerHTML = levelTasks[
		sessionStorage.selected_level
	]['content'];

	//Изменение цвета
	switch(sessionStorage.getItem('selected_level')){
		case '1':
			container.style.background = 'rgb(36, 113, 224)';
			levelTitle.style.background = 'rgb(66, 133, 244)';
			answerCheckBtn.style.background = 'rgb(66, 133, 244)';
		break;

		case '2':
			container.style.background = 'rgb(32, 148, 63)';
			levelTitle.style.background = 'rgb(52, 168, 83)';
			answerCheckBtn.style.background = 'rgb(52, 168, 83)';
		break;

		case '3':
			container.style.background = 'rgb(231, 168, 33)';
			levelTitle.style.background = 'rgb(251, 188, 53)';
			answerCheckBtn.style.background = 'rgb(251, 188, 53)';
		break;

		case '4':
			container.style.background = 'rgb(214, 47, 33)';
			levelTitle.style.background = 'rgb(234, 67, 53)';
			answerCheckBtn.style.background = 'rgb(234, 67, 53)';
		break;
	}

	//Проверка ответа
	answerCheckBtn.onclick = function(){
		
		let right = levelTasks[
			sessionStorage.selected_level
		]['rightAnswer'];

		if(right == answer.value){
			levelTitle.textContent = 'Правильно !';
			setTimeout(function(){
				window.location.href = '../index.html';
			},1500);
		}
		else{
			levelTitle.textContent = 'Попробуйте ещё раз...';
		}

	}
	
} 