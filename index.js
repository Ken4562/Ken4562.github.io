var a1 = [];
var a2 = [];
var a3 = [];
var a4 = [];
var a5 = [];
var a6 = [];
var k = 0;


RR()
$('.abc').click(function() {
    while (true) {

        if (a1[0] == a2[0] && a2[0] == a3[0] && a3[0] == a4[0]) {
            break;
        } else {
            RR();
            k++;

        }

    }



})



function RR() {
    a1.splice(0, a1.length);
    a2.splice(0, a2.length);
    a3.splice(0, a3.length);
    a4.splice(0, a4.length);
    a5.splice(0, a5.length);
    a6.splice(0, a6.length);
    R(a1);
    R(a2);
    R(a3);
    R(a4);
    R(a5);
    R(a6);
}


function R(v) {
    for (var i = 0; i < 6; i++) {
        var a = Math.floor(Math.random() * 500)
        v.push(a)

    }

}

function reset() {
    $('#6565').text(k)
    $('.e1').text('A1:' + a1)
    $('.e2').text('A2:' + a2)
    $('.e3').text('A3:' + a3)
    $('.e4').text('A4:' + a4)
    $('.e5').text('A5:' + a5)
    $('.e6').text('A6:' + a6)
     document.getElementById('current').innerHTML = new Date();　
    setTimeout('reset()', 1000);
}
