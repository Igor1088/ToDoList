var list = document.querySelector('#list'),
    item = document.querySelector('#item');

document.querySelector('#btn').addEventListener('click', function(ev){
	var text = item.value;
	if(text !== ''){
	list.innerHTML += '<li class="toDoItems" onclick="remove()">  '+text+ ' </li>';
	item.value = '';
    }
	ev.preventDefault();

}, false);	


function remove(){
	var listItems = document.getElementsByTagName("li");
	for(var i = 0; i < listItems.length; i++){
		listItems[i].onclick = function(){
			this.parentNode.removeChild(this);
		}
	}

	
}






