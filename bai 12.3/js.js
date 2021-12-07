var a = prompt ('Nhập a')
var b = prompt ('Nhập b')
var x = 0
if (a == 0 && b == 0) {
    alert('phương trình  vô số nghiệm');
}
if (a == 0 && b != 0) {
    alert('phương trình vô nghiệm ')
}
if (a != 0 && b == 0) {
    document.write("nghiệm của phương trình là :x = " + x);
}
if (a !== 0 && b != 0) {
    x = -b/a
    document.write("nghiệm của phương trình là  x =:" + x
     )
}