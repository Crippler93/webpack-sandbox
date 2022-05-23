import "./index.scss";
import "bootstrap";

console.log(window.location.href);

$(function () {
    $('#test').click(function () {
        $('#container').toggle(400, () => console.log('test'))
    })

    $('#test2').click(function () {
        $('#container2').toggle(400, () => console.log('test'))
    })
})


