//ukol1
let title = 'Pán prstenů';
//Vypište do konzole počet znaků názvu.
title.length; 
//Vypište název filmu převedený na velká písmena.
title.toUpperCase();
//Vyřízněte z názvu prvních pět písmen.
title.slice(0, 6);
//Vyřízněte z názvu posledních pět písmen.
title.slice(6,);
//ukol2

let mail = prompt('Zadejte e-mail ve formatu (jmeno.prijmeni@domena):');
let atIndex = mail.indexOf('@');
const parsedEmail = {
	userName: mail.slice(0, atIndex),
	domain: mail.slice(atIndex,),
}
document.body.innerHTML =
	'E-mail: ' + parsedEmail.userName + parsedEmail.domain;