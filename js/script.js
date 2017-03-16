window.onload = function(){
	var images = document.querySelectorAll('#slider .images img');
	var i = 0;

	document.getElementById('btn-prev').onclick = function(){
		images[i].className = '';
		i--;

		if(i<0){
			i = images.length - 1;
		}

		images[i].className = 'active';
	}

	document.getElementById('btn-next').onclick = function(){
		images[i].className = '';
		i++;

		if(i>= images.length){
			i = 0;
		}

		images[i].className = 'active';
	}


}

$('#my-tabs li a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
})

$('#my-tabs a[href="#life"]').tab('show') // селектор по имени
$('#my-tabs a:first').tab('show') // выбор первой вкладки
$('#my-tabs a:last').tab('show') // последняя вкладка
$('#my-tabs li:eq(2) a').tab('show') // выбор вкладки по номеру