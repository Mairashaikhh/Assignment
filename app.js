var guest_list = ['Rukhsar', 'Faiza', 'Bissma', 'Aizay'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Madam ' + guest_list[i] + ',\nI invite you for dinner tonight.\nThank You\n');
}
//Changing Guest List
var not_present = 'Bisma';
var new_guest = 'Ayesha';
guest_list[2] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Madam ' + guest_list[i] + ',\nI invite you for dinner tonight.\nThank You\n');
}
console.log("Madam ".concat(not_present, " is not coming tonight dinner. "));
