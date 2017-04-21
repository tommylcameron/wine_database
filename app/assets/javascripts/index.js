function bindFilterToColumn(column_slug) {
    var filter_input_id = column_slug + '_filter';
    var column_class = 't' + column_slug;
    var filter = document.getElementById(filter_input_id);
    filter.onkeyup = function(){
        var trows = document.getElementsByClassName("trow");
        Array.prototype.forEach.call(trows, function(row) {
            var column = row.getElementsByClassName(column_class)[0];
            var searchString = filter.value.toLowerCase();
            var columnValue = column.textContent.toLowerCase();
            row.style.display = "";
            if (!columnValue.includes(searchString)) {
                row.style.display = "none";
            }
        });
    };
};

var columns = ['name', 'varietal', 'year', 'rating', 'region'];
columns.forEach(function(column) {
    bindFilterToColumn(column);
})



