/*console.log('Hello World');
console.error('This is an error');
console.warn('This is a warnning message');*/

function person(firstName, lastName, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.dob = new Date(dob);
	
	person.prototype.getBirthYear = function() {
		return this.dob.getfullyear();
	}
	person.prototype.getFullName=function(){
		return ${this.firstName} ${this.lastName};
	}

}
//instantiate object

const person1 =new person('Bisrat', 'ade', '4-3-1980');
const person2 =new person('Mary', 'Ayalew', '3-6-1970');

console.log(person1.getBirthYear());
console.log(person1.getFullName());

console.log();
console.log(person1);