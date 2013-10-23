$(document).ready(function() {
    console.log("Document is ready to go!");
    $("#caseStudyOptions").hide();
    $(".innerPD").hide();
    $(".innerIND").hide();
    $(".innerMAS").hide();
    $(".innerUA").hide();
    $(".innerLTST").hide();
});
    

function expandCaseStudies() {
    $("#caseStudyOptions").toggle();
}
function showPD(event) {
    $(".innerPD").toggle();
}
function showIND(event) {
    $(".innerIND").toggle();
}
function showMAS(event) {
    $(".innerMAS").toggle();
}
function showUA(event) {
    $(".innerUA").toggle();
}
function showLTST(event) {
    $(".innerLTST").toggle();
}

function countryColorChange(select) {
    if (select.value == "US") {
        $('.red').html("<p>Danger / Stop</p>");
        $('.yellow').html("<p>Cowardice, &nbsp;Temporary</p>");
        $('.green').html("<p>Safety, &nbsp;&ldquo;Go&rdquo;</p>");
        $('.blue').html("<p>Masculine</p>");
        $('.white').html("<p>Purity</p>");
    }
    else if (select.value == "China") {
        $('.red').html("<p>Happiness</p>");
        $('.yellow').html("<p>Birth, &nbsp;Wealth / Power</p>");
        $('.green').html("<p>Ming Dynasty, &nbsp;Heavens</p>");
        $('.blue').html("<p>Heavens / Clouds</p>");
        $('.white').html("<p>Death, &nbsp;Purity</p>");
    }
    else if (select.value == "Japan") {
        $('.red').html("<p>Anger, &nbsp;Danger</p>");
        $('.yellow').html("<p>Grace, &nbsp;Nobility</p>");
        $('.green').html("<p>Future / Youth, &nbsp;Energy</p>");
        $('.blue').html("<p>Villainy</p>");
        $('.white').html("<p>Death</p>");
    }
    else if (select.value == "Egypt") {
        $('.red').html("<p>Death</p>");
        $('.yellow').html("<p>Happiness / Prosperity</p>");
        $('.green').html("<p>Fertility, &nbsp;Strength</p>");
        $('.blue').html("<p>Virtue / Truth, &nbsp;Faith</p>");
        $('.white').html("<p>Joy</p>");
    }
    else if (select.value == "France") {
        $('.red').html("<p>Aristocracy</p>");
        $('.yellow').html("<p>Temporary</p>");
        $('.green').html("<p>Criminality</p>");
        $('.blue').html("<p>Freedom / Peace</p>");
        $('.white').html("<p>Neutrality</p>");
    }
    else {
        $('.red').html("");
        $('.yellow').html("");
        $('.green').html("");
        $('.blue').html("");
        $('.white').html("");
    }
    
}