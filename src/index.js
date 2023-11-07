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
import fieldInput from "./fields/core/fieldInput.vue";
import fieldCheckbox from "./fields/core/fieldCheckbox.vue";
import fieldChecklist from "./fields/core/fieldChecklist.vue";
import fieldLabel from "./fields/core/fieldLabel.vue";
import fieldRadios from "./fields/core/fieldRadios.vue";
import fieldSelect from "./fields/core/fieldSelect.vue";
import fieldSubmit from "./fields/core/fieldSubmit.vue";
import fieldTextArea from "./fields/core/fieldTextArea.vue";
import fieldUpload from "./fields/core/fieldUpload.vue";

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
	fieldInput,
	fieldCheckbox,
	fieldChecklist,
	fieldLabel,
	fieldRadios,
	fieldSelect,
	fieldSubmit,
	fieldTextArea,
	fieldUpload,
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
