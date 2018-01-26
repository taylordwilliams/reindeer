var colors = [" Blue ", " Red ", " Orange ", " Purple ", " Hazel ", " Aquamarine ", " Periwinkle ", " Azure ", " Fuchsia ", " Chocolate ", " Amber ", " Amaranth "];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");
var ReindeerColors = [];

for(var i = 0; i < reindeer.length; i++)
{
ReindeerColors.push(colors[i] + reindeer[i])
};

console.log(ReindeerColors);
hohohoElement.innerHTML = ReindeerColors;