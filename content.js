// content.js
//Das wird mein Zweiter Commit
//Mein Drittes kommentar
//das ist mein drittes kommentar

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "fetch_top_domains" ) {
  //Eine Anfragen von popup.js - welches bittet um alle Domains zu holen..

  var immobilie = {}; 
  var links = document.links;
  
  var alw = document.getElementsByClassName("font-nowrap");
  for (var i=0,j=0; i<alw.length,j<alw.length;i=i+3,j=j+3){

    immobilie['kaufpreis'+i] = document.getElementsByClassName('font-nowrap')[i].innerHTML;
    immobilie['wohnflaueche'+j] = document.getElementsByClassName('font-nowrap')[j].innerHTML;
    //var wohnflaueche = document.getElementsByClassName('font-nowrap')[j].innerHTML;

  }

      chrome.runtime.sendMessage({"message": "all_urls_fetched", "data": immobilie});
    }
  }
);





