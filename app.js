//Guest List Exercise 14
var guest_list = ['Rukhsar', 'Faiza', 'Bisma', 'Aizay'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected Madam ' + guest_list[i] + ',\nI invite you for dinner tonight.\nThank You\n')
// }
//Changing Guest List Exercise 15
var not_present = 'Bisma';
var new_guest = 'Ayesha';
guest_list[2] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Madam ' + guest_list[i] + ',\nI invite you for dinner tonight.\nThank You\n');
}
console.log("Madam ".concat(not_present, " is not coming tonight dinner.\n "));
//More Guest Exercise 16
guest_list.unshift('Numaila', 'Noor');
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Madam ' + guest_list[i] + ',\nI invite you for dinner tonight. We got a big dinner table so we decided to invite two more guests.\nThank You\n');
}
