$(document).ready(function() {
    var $blockContrasenia = $("#blockContrasenia");
    var $btnAcceder = $("#btnAcceder");
    $blockContrasenia.hide();
    $("#btnAcceder").on('click', function() {
        $("#blockCorreo").hide(1000);
        $blockContrasenia.show();
        $btnAcceder.text("Acceder");
    });
});