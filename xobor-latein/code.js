getBrowser();



function loadTransitJSON()
{
    $.getJSON('transit.json', function(transit){
        innerSites(transit);
        innerName(transit);
        innerKapitel(transit);
        innerFooter(transit);
    })
}



function getBrowser()
{
    var sBrowser, sUsrAg = navigator.userAgent;


    if (sUsrAg.indexOf("Firefox") > -1) {
    sBrowser = "Mozilla Firefox";
    // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
    } else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
    sBrowser = "Opera";
    //"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
    } else if (sUsrAg.indexOf("Trident") > -1) {
    sBrowser = "Microsoft Internet Explorer";
    // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
    } else if (sUsrAg.indexOf("Edge") > -1) {
    sBrowser = "Microsoft Edge";
    // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
    } else if (sUsrAg.indexOf("Chrome") > -1) {
    sBrowser = "Google Chrome or Chromium";
    // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
    } else if (sUsrAg.indexOf("Safari") > -1) {
    sBrowser = "Apple Safari";
    // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
    } else {
    sBrowser = "unknown";
    }

    if (sBrowser == "Google Chrome or Chromium" || sBrowser == "Mozilla Firefox" || sBrowser == "Opera" || sBrowser == "Microsoft Internet Explorer") {
        console.warn("xobor-latein funktioniert nur auf Microsoft Edge. Bitte verwenden sie die Slim-Variante (www.xobor-latein.de/slim).")
        console.error("306: xobor-latein doesnt work on " + sBrowser + ".")
        alert("xobor-latein funktioniert nur auf Microsoft Edge. Bitte verwenden sie die Slim-Variante (www.xobor-latein.de/slim).")
    }

}



function innerSites(transit)
{
    document.getElementById("sites").innerHTML = '<h6 class="mt-3">' + transit.site + '</h6><hr class="sites_hr">'
}



function innerName(transit)
{
    document.getElementById("header").innerHTML = '<h1 class="mt-5">' + transit.name + '</h1><hr>';
}



function innerKapitel(transit)
{
    anzahlKapitel = transit.kapitel.length;
    nullAnzahlKapitel = 0;
    while(anzahlKapitel > nullAnzahlKapitel)
    {
        document.getElementById("content").innerHTML += '<h3 class="mt-1"><i>' + transit.kapitel[nullAnzahlKapitel].number + ': ' + transit.kapitel[nullAnzahlKapitel].name + '</i></h3><p class="lead text-muted">' + transit.kapitel[nullAnzahlKapitel].text + '</p><br>';
        nullAnzahlKapitel++;
    }
}



function innerFooter(transit)
{
    document.getElementById("footer").innerHTML = '<p class="lead text-muted"><code>Text-Version: ' + transit.version + ' | www.xobor-latein.de</code></p>';
}



loadTransitJSON();
