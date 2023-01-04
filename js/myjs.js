document.addEventListener("DOMContentLoaded", function () {
  GreenAudioPlayer.init({
    selector: ".gap-example",
    stopOthersOnPlay: true,
    showDownloadButton: true,
    enableKeystrokes: true,
  });
});

$(document).ready(function () {
  $("#button25").click(function () {
    $("#lesson25").slideToggle("slow");
  });
  $("#button26").click(function () {
    $("#lesson26").slideToggle("slow");
  });
  $("#button27").click(function () {
    $("#lesson27").slideToggle("slow");
  });
  $("#button28").click(function () {
    $("#lesson28").slideToggle("slow");
  });
  $("#button29").click(function () {
    $("#lesson29").slideToggle("slow");
  });
  $("#button30").click(function () {
    $("#lesson30").slideToggle("slow");
  });
});
