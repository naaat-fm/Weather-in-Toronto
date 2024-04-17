$(document).ready(function () {
  var apiKey = "06e74f6652085678efdbdd5ca799a2e2";
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=Toronto,ca&units=metric&appid=" +
    "06e74f6652085678efdbdd5ca799a2e2"; // only Toronto link//

  $.getJSON(apiUrl, function (data) {
    console.log(data); // print data to console for debug

    var location = data.name;
    var iconUrl =
      "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"; //its 0 bc retrieves the icon code associated with the primary weather condition//
    var temperature = data.main.temp + "°C"; //temperature in celsius//
    var description = data.weather[0].description;

    //text that goes on the actual page//
    $("#location").text(location);
    $("#weather-icon").attr("src", iconUrl);
    $("#temperature").text("Temperature: " + temperature);
    $("#description").text("Current Weather Conditions: " + description);
  });
});
