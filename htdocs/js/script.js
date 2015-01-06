Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function getData(file){
    return $.getJSON('data/' + file + ".json");
}

function setData(){
    $("[data-insert]").each(function(i){
        var insert = $(this).data('insert');
        insert = eval('data.' + insert);
        
        $(this).html(insert);
    });
}

var s;
var data = {};
var sources = ["campus", "demografie", "studietrajecten"];

$(document).ready(function(){
    s = skrollr.init(smoothScrolling=true);
    
    $.each(sources, function(k,v){
        getData(v).done(function(d){
            data[v] = d;
            
            if(Object.size(data) == sources.length){
                setData(data);
            }
        });
    });
});
