import component from "./formGenerator.vue";
import {
	createDefaultObject,
	getMultipleFields,
	mergeMultiObjectFields,
	slugifyFormID,
	slugify
} from "./utils/schema.js";
import validators from "./utils/validators.js";
import fieldComponents from "./utils/fieldsLoader";
import abstractField from "./fields/abstractField";

const install = (Vue, options) => {
	Vue.component("VueFormGenerator", component);
	if (options && options.validators) {
		for (let key in options.validators) {
			if ({}.hasOwnProperty.call(options.validators, key)) {
				validators[key] = options.validators[key];
			}
		}
	}
};

const schema = {createDefaultObject, getMultipleFields, mergeMultiObjectFields, slugifyFormID, slugify};

export {
	component,
	schema,
	validators,
	abstractField,
	fieldComponents,
	install
}

export default {
	component,
	schema,
	validators,
	abstractField,
	fieldComponents,
	install
}
