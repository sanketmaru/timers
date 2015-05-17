
//IIFE
(function(){

	var grid = new Grid(10, 10);

	var timer = new Timer(3000);

	var gridHtml = grid.getGrid("grid");

	var cellId = 1;

	for(var i=1;i<=grid.rows;i++){

		var tr = grid.createRow();

		for(var j=1;j<=grid.columns;j++){

			var cell = grid.createColumn(tr, cellId);

			cell.addEventListener('click', function(event){
				event.target.style.background = "";
				timer.clearTimer();
				grid.assignColor();
				timer.start();
			}.bind(this));

			++cellId;
		}

	}

	grid.assignColor();
	timer.start();

}());
