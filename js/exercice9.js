function valid_credit_card(value) {

    if (/[^0-9-\s]+/.test(value)) return false;

    var nCheck = 0, nDigit = 0, bEven = false;
    value = value.replace(/\D/g, "");

    for (var n = value.length - 1; n >= 0; n--) {
        var cDigit = value.charAt(n),
            nDigit = parseInt(cDigit, 10);

        if (bEven) {
            if ((nDigit *= 2) > 9) nDigit -= 9;
        }

        nCheck += nDigit;
        bEven = !bEven;
    }

    return (nCheck % 10) == 0;
}

class CompteBancaire{
    constructor(name,carte) {
        this.name = name;
        this.carte = carte;
        this.credit = 5000;
    }

    applyFor(amount) {
        // access multiple subsystems...
        var result = "approuved";
        var cagnote = 0;
        if(this.credit < amount){
            result = "denied";
        }else if(valid_credit_card(this.carte)){
            this.credit = this.credit - amount;
            cagnote = cagnote + amount;
        }
        return "thank you for your donation" + this.name + "rest" + this.credit;
    }

}

$('#submit').on('click',function(){
// console.log($("#name").val() + ":" + $("#carte").val())
    var user = new CompteBancaire($("#name").val(),$("#carte").val());
    console.log(user);
    var result = user.applyFor(1000);
    alert(result);
});

console.log(valid_credit_card("5610591081018250"),"valid_credit_card Validation");
