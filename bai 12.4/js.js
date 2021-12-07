function validate() {
    let a = document.forms['myForm']['a'].value
    let b = document.forms['myForm']['b'].value
    let x = 0
    if (a,b == ''){
        alert ('Điền a và b ')
        return false;
    }
    if (a == 0 && b == 0) {
        document.getElementById('demo').innerHTML ='phương trình  vô số nghiệm';
        return false;
    }
    if (a == 0 && b != 0) {
        document.getElementById('demo').innerHTML ='phương trình vô nghiệm ';
        return false;
    }
    if (a != 0 && b == 0) {
        document.getElementById('demo').innerHTML ="nghiệm của phương trình là :x = " + x;
        return false;
    }
    if (a !== 0 && b != 0) {
        x = -(b/a)
        document.getElementById('demo').innerHTML ="nghiệm của phương trình là :x = " + x;
        return false;
    }
}
let ketqua = document.getElementById('demo')

