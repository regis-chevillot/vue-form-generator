<template lang="pug">
select.form-control(v-model="value", :disabled="disabled", :name="schema.inputName", :id="getFieldID(schema)", :class="schema.fieldClasses", v-attributes="'input'")
  option(v-if="!selectOptions.hideNoneSelectedText", :disabled="schema.required", :value="null") {{ selectOptions.noneSelectedText || "&lt;Nothing selected&gt;" }}

  template(v-for="item in items")
    optgroup(v-if="item.group", :label="item.group")
      option(v-for="i in item.ops", :value="i.value") {{ i.name }}

    option(v-if="!item.group", :value="item.value") {{ item.name }}
</template>

<script>
import { isObject, isNil, find } from "lodash";
import abstractField from "../abstractField";

export default {
	mixins: [abstractField],

	computed: {
		selectOptions() {
			return this.schema.selectOptions || {};
		},

		items() {
			let values = this.schema.values;
			if (typeof values == "function") {
				return this.groupValues(values.apply(this, [this.model, this.schema]));
			} else return this.groupValues(values);
		}
	},

	methods: {
		formatValueToField(value) {
			if (isNil(value)) {
				return null;
			}
			return value;
		},

    groupValues(values) {
      let result = [];
      let groupMap = {};

      for (let item of values) {
        let store = result;

        if (item.group) {
          if (!groupMap[item.group]) {
            groupMap[item.group] = {ops: [], name: item.group, group: item.group};
            result.push(groupMap[item.group]);
          }

          store = groupMap[item.group].ops;
        }

        store.push({name: item.name, value: item.value});
      }

      return result;
    }
	}
};
</script>


<style lang="sass">
</style>
