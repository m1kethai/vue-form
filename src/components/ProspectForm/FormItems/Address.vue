<template>
	<div>
		<div class="formitem-container">
			<div class="label-container">
				<label for="address">Address:</label>
			</div>

			<div class="input-container">
				<input
					type="text"
					id="address"
					:class="validationInputClass"
					v-model="address"
					@input="updateModel"
				>
				<div
					:class="validationIconClass">
				</div>
			</div>

		</div>
		<div :class="validationMsgClass">
			<div
				v-for="error in errors"
				>
				{{ error }}
			</div>
		</div>
	</div>
</template>

<script>
/* eslint-disable */

export default {
	data () {
		return {
			address: null,
			errors: null
		}
	},
	computed: {
		validationInputClass() {
			if(this.errors == null) {
				return 'unvalidatedInput'
			}
			else if(this.errors){
				if(this.errors.length > 0) {
					return 'validatedInput invalid';
				}
				else {
					return 'validatedInput valid';
				}
			}
		},
		validationMsgClass() {
			if(this.errors == null) {
				return 'unvalidatedMsgContainer'
			}
			else if(this.errors){
				if(this.errors.length > 0) {
					return 'validatedMsgContainer invalid';
				}
				else {
					return 'unvalidatedMsgContainer valid';
				}
			}
		},
		validationIconClass() {
			if(this.errors == null) {
				return 'validationIcon unvalidated'
			}
			else if(this.errors){
				if(this.errors.length > 0) {
					return 'validationIcon invalid';
				}
				else {
					return 'validationIcon valid';
				}
			}
		},
	},
	methods: {
		updateModel() {
			this.errors = [];

			if(this.address == '') {
				this.errors.push('This field is required');
			}
			if (this.invalidCharValidation() === true) {
				this.errors.push('Special characters not allowed')
			}
			this.$emit('input', this.address);
		},
		invalidCharValidation() {
			var invalidChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
			var i;
			for (i=0; i < invalidChars.length ; i++) {
				if (this.address.includes(invalidChars[i])) {
					return true;
				}
			}
		}
	}
}
</script>
