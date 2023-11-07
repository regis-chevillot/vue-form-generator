let coreFields = import.meta.glob('../fields/core/*.vue', {eager: true});

let fieldComponents = Object.keys(coreFields).reduce((store, key) => {
	let compName = key.replace(/.*?([^/]+).vue$/, "$1");
	store[compName] = coreFields[key].default;

	return store;
}, {});


console.log('ENV', import.meta.env.MODE);

if (import.meta.env.MODE === "development") {
	let optionalFields = import.meta.glob('../fields/optional/*.vue', {eager: true});

	fieldComponents = Object.keys(optionalFields).reduce((store, key) => {
		let compName = key.replace(/.*?([^/]+).vue$/, "$1");
		store[compName] = optionalFields[key].default;

		return store;
	}, fieldComponents);
}

console.log('FIELD', fieldComponents);

export default fieldComponents;
