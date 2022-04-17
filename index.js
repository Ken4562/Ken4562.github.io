var a1 = [];
var a2 = [];
var a3 = [];
var a4 = [];
var a5 = [];
var a6 = [];
var k = 0

$('.abc').click(st)
$('#6565').text(k)


RR()


function RR() {
    R(a1);
    $('.e1').text('A1:' + a1)
    R(a2);
    $('.e2').text('A2:' + a2)
    R(a3);
    $('.e3').text('A3:' + a3)
    R(a4);
    $('.e4').text('A4:' + a4)
    R(a5);
    $('.e5').text('A5:' + a5)
    R(a6);
    $('.e6').text('A6:' + a6)
}


function R(v) {
    for (var i = 0; i < 6; i++) {
        var a = Math.floor(Math.random() * 500)
        v.push(a)

    }

}

function st() {
    while (true) {
        if (a1[0] == a2[0]) {
            return;
        } else {
            RR();
            k++;
        }
    }

}