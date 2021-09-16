var receptek = [];

$(function(){

    
    $.ajax(
        {
        url: "etelek.json",
        success: function(result){
        console.log(result);
        receptek=result.receptkonyv;
        console.log("ajax hívásban" + receptek);
        megjelenit();
        $("article table tr").click(kattint);
        $("article table tr").hover(hatter);
        }
        }
    );

    
});

function megjelenit(){
/*  $("article").append(receptek[0]["nev"]); */
    var szam = 0;
    $("article").append("<table>");
    var txt = "<tr id='fejlec'><th>Név</th><th>Elkészítési idő</th><th>Kép</th><th>leírás</th><th>Hozzávalók</th></tr>";
    
    for (var i = 0; i < receptek.length; i++) {
        txt += "<tr id='" + i + "'>";
        for(var item in receptek[i]){
            txt += "<td>" + receptek[i][item] + "</td>";
        }
        txt += "</tr>";
        
    }
    
    $("article table").append(txt);


}
function hatter(){
    $(this).toggleClass("hatter");
}

function kattint(){
    if($(this).attr("id") !== "fejlec"){
        var szam = $(this).attr("id"); 
        $("#kep").html("<img src='" + receptek[szam]["kep"] + "'  alt=''></img>"); 
        $("#kep").append("<h3>"+ receptek[szam]["nev"] +"</h3>"); 
        var etelTxt = "<h4>Hozzávalók</h4>";
        etelTxt += "<ul>";
        for (var i = 0; i < receptek.length; i++) {
            for(var item in receptek[szam]["hozzavalok"]){
                etelTxt += "<li>" + receptek[szam]["hozzavalok"][item] + "</li>";
            }
            
            
        }
        $("#kep").append(etelTxt);
    }
}

/* function etelKivalasztas(){
    if($(this).attr("id") !== "fejlec"){
        sorID = Number($(this).attr("id"));
        $("#kep img").attr("src", receptek[sorID].kep);
        $("#kep img").attr("alt", receptek[sorID].kep);
    }
} */

