function bindFilterToColumn(filterInputId, colClassName) {
    // body goes here
    // get filter, bind onclick to debug
    // bind filter onkeyup to columns with class name
};

/*bindFilterToColumn('name_filter', 'tname');
bindFilterToColumn('varietal_filter', 'tvarietal');
bindFilterToColumn('name_filter', 'tname');
bindFilterToColumn('name_filter', 'tname');*/

nameFilter = document.getElementById("name_filter");
nameFilter.onclick = function(){
    console.log("A click happened");
};


nameFilter.onkeyup = function(){
    var trows = document.getElementsByClassName("trow");
    for (f = 0; f < trows.length; f++) {        
        var row = trows[f];
        var rowname = row.getElementsByClassName("tname")[0];
        var nameFilterText = nameFilter.value.toLowerCase();
        var rowString = row.textContent.toLowerCase();
        var nameString = rowname.textContent.toLowerCase();
       //console.log(nameFilterText);
       //console.log(rowString);
        if (nameString.includes(nameFilterText)) {
            row.style.display = "";
           //console.log("displaying row ", f);
        } else {
            row.style.display = "none";
          //console.log("hiding the row ", f);
        }
    };
};


varietalFilter = document.getElementById("varietal_filter");
varietalFilter.onclick = function(){
    console.log("A click happened");
};

varietalFilter.onkeyup = function(){
    var trows = document.getElementsByClassName("trow");
    for (f = 0; f < trows.length; f++) {        
        var row = trows[f];
        var varietalrow = row.getElementsByClassName("tvarietal")[0];
        var varietalFilterText = varietalFilter.value.toLowerCase();
        var rowString = row.textContent.toLowerCase();
        var varietalString = varietalrow.textContent.toLowerCase();
       //console.log(varitalFilterText);
       //console.log(rowString);
        if (varietalString.includes(varietalFilterText)) {
            row.style.display = "";
           //console.log("displaying row ", f);
        } else {
            row.style.display = "none";
          //console.log("hiding the row ", f);
        }
    };
};


yearFilter = document.getElementById("year_filter");
yearFilter.onclick = function(){
    console.log("A click happened");
};

yearFilter.onkeyup = function(){
    var trows = document.getElementsByClassName("trow");
    for (f = 0; f < trows.length; f++) {        
        var row = trows[f];
        var rowyear = row.getElementsByClassName("tvintage_year")[0];
        var yearFilterText = yearFilter.value.toLowerCase();
        var rowString = row.textContent.toLowerCase();
        var yearString = rowyear.textContent.toLowerCase();
       //console.log(varitalFilterText);
       //console.log(rowString);
        if (yearString.includes(yearFilterText)) {
            row.style.display = "";
           //console.log("displaying row ", f);
        } else {
            row.style.display = "none";
          //console.log("hiding the row ", f);
        }
    };
};

ratingFilter = document.getElementById("rating_filter");
ratingFilter.onclick = function(){
    console.log("A click happened");
};

ratingFilter.onkeyup = function(){
    var trows = document.getElementsByClassName("trow");
    for (f = 0; f < trows.length; f++) {        
        var row = trows[f];
        var rowrating = row.getElementsByClassName("trating")[0];
        var ratingFilterText = ratingFilter.value.toLowerCase();
        var rowString = row.textContent.toLowerCase();
        var ratingString = rowrating.textContent.toLowerCase();
       //console.log(varitalFilterText);
       //console.log(rowString);
        if (ratingString.includes(ratingFilterText)) {
            row.style.display = "";
           //console.log("displaying row ", f);
        } else {
            row.style.display = "none";
          //console.log("hiding the row ", f);
        }
    };
};

regionFilter = document.getElementById("region_filter");
regionFilter.onclick = function(){
    console.log("A click happened");
};

regionFilter.onkeyup = function(){
    var trows = document.getElementsByClassName("trow");
    for (f = 0; f < trows.length; f++) {        
        var row = trows[f];
        var rowregion = row.getElementsByClassName("tcountry")[0];
        var regionFilterText = regionFilter.value.toLowerCase();
        var rowString = row.textContent.toLowerCase();
        var regionString = rowregion.textContent.toLowerCase();
       //console.log(varitalFilterText);
       //console.log(rowString);
        if (regionString.includes(regionFilterText)) {
            row.style.display = "";
           //console.log("displaying row ", f);
        } else {
            row.style.display = "none";
          //console.log("hiding the row ", f);
        }
    };
};