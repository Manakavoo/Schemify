let flag = false;

function getBotResponse() {
  var rawText = $("#nameInput").val();
  console.log(rawText);
  var userHtml = '<p class="userText"><span>' + rawText + "</span></p>";
  console.log(userHtml);

  $("#nameInput").val("");
  $("#chatbox").append(userHtml);
  document
    .getElementById("userInput")
    .scrollIntoView({ block: "start", behavior: "smooth" });

  if (rawText.trim().toLowerCase() === "/start" || flag) {
    $.get("/get_survey", { msg: rawText }).done(function (data) {
      flag = data.process;
      console.log(flag);

      if (data.type === "simple") {
        var botHtml =
          '<p class="botText"><span>' + data.response + "</span></p>";
      } else if (data.type === "complex") {
        var optionsHtml = "<ol>";
        data.response.options.forEach(function (option) {
          optionsHtml += "<li>" + option + "</li>";
        });
        optionsHtml += "</ol>";
        var botHtml =
          '<div class="botText"><span>' +
          data.response.reply +
          optionsHtml +
          "</span></div>";
      } else if (data.type === "result") {
        let schemes;
        try {
          schemes = JSON.parse(data.response.schemes.replace(/'/g, '"'));
        } catch (error) {
          schemes = [data.response.schemes];
        }
        console.log(schemes);
        var resultsHtml = "<ul>";
        schemes.forEach(function (scheme) {
          resultsHtml += "<li>" + scheme + "</li>";
        });
        resultsHtml += "</ul>";
        var botHtml =
          '<div class="botText"><span>' +
          data.response.reply +
          resultsHtml +
          "</span></div>";
      }

      $("#chatbox").append(botHtml);
      document
        .getElementById("userInput")
        .scrollIntoView({ block: "start", behavior: "smooth" });
    });
  } else {
    // For other inputs, proceed with the regular response request
    $.get("/get_response", { msg: rawText }).done(function (data) {
      flag = data.process;

      var botHtml = '<p class="botText"><span>' + data.response + "</span></p>";
      $("#chatbox").append(botHtml);
      document
        .getElementById("userInput")
        .scrollIntoView({ block: "start", behavior: "smooth" });
    });
  }
}

$("#nameInput").keypress(function (e) {
  if (e.which == 13) {
    var userInput = $("#nameInput").val().trim();
    if (userInput !== "") {
      getBotResponse();
    }
    e.preventDefault();
  }
});

function sendButton() {
  var userInput = $("#nameInput").val().trim();
  if (userInput !== "") {
    setTimeout(() => {
      getBotResponse();
    }, 100);
  }
}
