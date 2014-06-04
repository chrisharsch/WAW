
/*
   function shows hidden content
 */
//some special variables needed for the table header
var ids="tab";
var tableheaderk=["Name", "Vorname", "Studiengang", "Email"];
var tableheaderm=["Name", "Kosten"];
/*-------------------json objects needed for the tables------------------------*/
var kostenCebit = {
    name: "CeBit",
    kosten: "15"

};


var kostenConhit = {
    name: "ConhIT",
    kosten: "50"
};


var kostenWebtechcon = {
    name: "WebTechCon",
    kosten: "300"
}

var teilnehmercebit1 = {
    name: "Ent",
    vorname: "Thilo",
    studiengang: "IB",
    email: "t.ent@gmail.de"
};

var teilnehmercebit2 = {
    name: "Kraus",
    vorname: "Martina",
    studiengang: "IB",
    email: "m.kraus@hs-mannheim.de"
};

var teilnehmercebit3 = {
    name: "Smits",
    vorname: "Thomas",
    studiengang: "UIB",
    email: "t.smits@hs-mannheim.de"
};


var teilnehmercebit4 = {
    name: "Groeschel",
    vorname: "Michael",
    studiengang: "UIB",
    email: "m.groeschel@hs-mannheim.de"
};

var teilnehmerconhit1 = {
    name: "Schmuecker",
    vorname: "Paul",
    studiengang: "IMB",
    email: "p.schmuecker@hs-mannheim.de"
};

var teilnehmerconhit2 = {
    name: "Felsenheimer",
    vorname: "Jan",
    studiengang: "IB",
    email: "j.felsenheimer@diebestebaendderwelt.de"
};

var teilnehmerwebtechcon1 = {
    name: "Spies",
    vorname: "Marcell",
    studiengang: "IB",
    email: "m.spies@gmail.de"
};

var teilnehmerwebtechcon2 = {
    name: "Hoppe",
    vorname: "Johannes",
    studiengang: "UIB",
    email: "j.hoppe@gmx.de"
};

var teilnehmerwebtechcon3 = {
    name: "Hofmeister",
    vorname: "Johannes",
    studiengang: "UIB",
    email: "cessor@gmail.de"
};

/*---------------------functions-------------------*/
function show(){
    for(var i=0; i < arguments.length; i++){
        var element=document.getElementById(arguments[i]);
        element.style.display='block';
    }
}
/*
    function hides content
 */
function hide(){
    for(var i=0; i < arguments.length; i++){
        var element=document.getElementById(arguments[i]);
        element.style.display='none';
    }
}
/*M
markes clicked tab
 */

function clicked(id){
    if(id=="tab"){
        document.getElementById("tab2").style.backgroundColor=("#99D9EA");
    }
    if(ids!="tab2"){
    document.getElementById(ids).style.backgroundColor=("#99D9EA");
    }
ids=id;
document.getElementById(id).style.backgroundColor =('blue');
}

/*
generate Table conHIT while generate the tabledatas and tableheader dynamicly into the static table in detail.html

 */
function createTableConHit() {
    $('#tabelle thead').empty().append(document.createElement("tr"));
    $("#tabelle tbody").empty().append(document.createElement("tr"));
    var content=[teilnehmerconhit1, teilnehmerconhit2];
    var td;
    for(i=0; i<tableheaderk.length; i++){
        var th=$("<th></th>").text(tableheaderk[i]);
        $('#tabelle thead tr').append(th);
    }
    for(i=0; i<content.length; i++){
        jQuery.each( content[i], function( key, val ) {
            td =$("<td></td>").text(val);
            $('#tabelle tbody tr:last').append(td);
        });
       $('#tabelle tbody tr:last').after("<tr> </tr>");

    }

}
/*
 generate Table Webtechcon while generate the tabledatas and tableheader dynamicly into the static table in detail.html
 */
function createTableWebtechcon() {
    $('#tabelle thead').empty().append(document.createElement("tr"));
    $("#tabelle tbody").empty().append(document.createElement("tr"));
    var content=[teilnehmerwebtechcon1, teilnehmerwebtechcon2, teilnehmerwebtechcon3];
    var td;
    for(i=0; i<tableheaderk.length; i++){
        var th=$("<th></th>").text(tableheaderk[i]);
        $('#tabelle thead tr').append(th);
    }
    for(i=0; i<content.length; i++){
        jQuery.each( content[i], function( key, val ) {
            td =$("<td></td>").text(val);
            $('#tabelle tbody tr:last').append(td);
        });
        $('#tabelle tbody tr:last').after("<tr> </tr>");

    }
}
/*
 generate Table CeBIT while generate the tabledatas and tableheader dynamicly into the static table in detail.html
 */
    function createTableCebIT() {
        $('#tabelle thead').empty().append(document.createElement("tr"));
        $("#tabelle tbody").empty().append(document.createElement("tr"));
        var content=[teilnehmercebit1, teilnehmercebit2, teilnehmercebit3, teilnehmercebit4];
        var td;
        for(i=0; i<tableheaderk.length; i++){
            var th=$("<th></th>").text(tableheaderk[i]);
            $('#tabelle thead tr').append(th);
        }
        for(i=0; i<content.length; i++){
            jQuery.each( content[i], function( key, val ) {
                td =$("<td></td>").text(val);
                $('#tabelle tbody tr:last').append(td);
            });
            $('#tabelle tbody tr:last').after("<tr> </tr>");

        }

}
/*
 generate Table Messen while generate the tabledatas and tableheader dynamicly into the static table in detail.html
 */

function createMessen() {
    $('#tabelle thead').empty().append(document.createElement("tr"));
    $("#tabelle tbody").empty().append(document.createElement("tr"));
    var content=[kostenCebit, kostenConhit, kostenWebtechcon];
    var td;
    for(i=0; i<tableheaderm.length; i++){
        var th=$("<th></th>").text(tableheaderm[i]);
        $('#tabelle thead tr').append(th);
    }
    for(i=0; i<content.length; i++){
        jQuery.each( content[i], function( key, val ) {
            td =$("<td></td>").text(val);
            $('#tabelle tbody tr:last').append(td);
        });
        $('#tabelle tbody tr:last').after("<tr> </tr>");

    }

}
