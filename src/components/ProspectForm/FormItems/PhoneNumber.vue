<template>
	<div>
		<div class="formitem-container">
			<div class="label-container">
				<label for="phoneNumber">Phone Number:</label>
			</div>

			<div class="input-container">
				<input
					type="text"
					id="phoneNumber"
					:class="validationInputClass"
					v-model="phoneNumber"
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
			phoneNumber: null,
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
			this.invalidCharValidation();
			this.manageInput();
			this.$emit('input', this.phoneNumber);
		},
		manageInput() {
			var phoneNumberLength = this.phoneNumber.length;
			var dash = '-';
			// console.log(phoneNumberLength);

			switch(true) {
				case (phoneNumberLength < 10):
				this.errors.push('This field is required');
				break;

				case (this.phoneNumber === ""):
				this.errors.push('This field is required');
				break;

				case ( phoneNumberLength === 3):
				this.phoneNumber = this.phoneNumber.concat(dash);
				console.log('3');
				break;

				case ( phoneNumberLength === 7):
				this.phoneNumber = this.phoneNumber.concat(dash);
				break;

				case ( phoneNumberLength === 11):
				this.phoneNumber = this.phoneNumber.slice(0, -1);
				break;
			}
		},
		invalidCharValidation() {
			const invalidChars = " qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`=";
			let i;
			for (i=0; i < invalidChars.length ; i++) {
				if (this.phoneNumber.includes(invalidChars[i])) {
					this.phoneNumber = this.phoneNumber.slice(0, -1);
				}
			}
		}
	}
}
</script>

