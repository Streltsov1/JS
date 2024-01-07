$(document).ready(function() {
    $("#addBlockBtn").click(function() {
        addColorBlock();
    });

    $("#container").on("click", ".color-block", function() {
        $(this).remove();
    });
});
function addColorBlock() {
    let container = $("#container");
    let colorBlock = $("<div class='color-block'></div>");
    colorBlock.css("background-color", getRandomColor());
    container.append(colorBlock);
}
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}