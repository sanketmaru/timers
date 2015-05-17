function Grid(rows, columns){
	this.rows = rows;
	this.columns = columns;
};

Grid.prototype.updateGrid = function(rows, columns){
	this.rows = rows;
	this.columns = columns;
};

Grid.prototype.getGrid = function(elementId){
  this.gridHtml = document.getElementById(elementId);
  return this.gridHtml;
};

Grid.prototype.createRow = function(){
	return this.gridHtml.appendChild(document.createElement('tr'));
};

Grid.prototype.createColumn = function(gridRow, cellId){
  var cell = gridRow.appendChild(document.createElement('td'));
  cell.id = cellId;
  cell.width = "25px";
  cell.height = "25px";
  cell.style.border = "solid 1px";
	return cell;
};

Grid.prototype.assignColor = function(){
  setTimeout(function(){
    var randomNumber = Math.floor((Math.random() * 100) + 1);
    var randomCell = document.getElementById(randomNumber);
    randomCell.style.background = "blue";
  }, 0);
};
