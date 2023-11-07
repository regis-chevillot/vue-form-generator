import fecha from "fecha";


let roles = [{ id: "admin", name: "Administrator" }, { id: "moderator", name: "Moderator" }, { id: "user", name: "Registered User" }, { id: "visitor", name: "Visitor" }];

let skills = ["HTML5", "Javascript", "CSS3", "CoffeeScript", "AngularJS", "ReactJS", "VueJS"];

const arrayElement = (arr) => {
	let random = Math.round(Math.random() * (arr.length - 1));
	console.log(random);
	return arr[random];
};

let users = (function() {
	let res = [];
	for (let i = 0; i < 5; i++) {
		let lang = arrayElement(["en-US", "en-GB", "de", "fr", "it"]);
		let user = {};
		user.id = i + 1;
		user.firstName = 'JSON';
		user.lastName = 'BOURNE';
		user.userName = 'bourne123';
		user.type = arrayElement(["personal", "business"]);
		user.bio = "sfadadasd asdas d";

		user.dob = "2010.01.01";
		user.time = fecha.format(new Date(), "hh:mm:ss");
		user.age = "21";
		user.rank = 5;
		user.role = arrayElement(roles).id;
		// user.mobile = fakerator.phone.phoneNumber();
		user.sex = arrayElement(["male", "female"]);

		user.skills = [skills[1], skills[0]];
		user.email = "jason.desroulo@inari.io";
		user.address = {country: "EN"};
		user.language = lang;
		user.status = true;

		if (user.type === "business") user.company = "company";

		user.income = 50000;

		res.push(user);
		// console.log(user);
	}
	// console.log(res);
	return res;
})();

console.log('USERS', users);

export { roles, skills, users };
