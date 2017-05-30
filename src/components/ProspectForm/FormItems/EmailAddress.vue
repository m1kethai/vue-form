<template>
	<div>
		<div class="formitem-container">
			<div class="label-container">
				<label for="emailAddress">Email Address:</label>
			</div>

			<div class="input-container">
				<input
					type="text"
					id="emailAddress"
					:class="validationInputClass"
					v-model="emailAddress"
					@input="updateModel"
				>
			</div>
			<div
				:class="validationIconClass">
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
			emailAddress: null,
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

			if(this.emailAddress == '') {
				this.errors.push('This field is required');
			}
			if (this.invalidCharValidation() === true) {
				this.errors.push('Special Characters Not Allowed!')
			}
			this.formatValidation();
			this.$emit('input', this.emailAddress);
		},
		invalidCharValidation() {
			var invalidChars = "<>!#$%^&*()+[]{}?:;|'\"\\,/~`=";
			var i;
			for (i=0; i < invalidChars.length ; i++) {
				if (this.emailAddress.includes(invalidChars[i])) {
					return true;
				}
			}
		},
		formatValidation() {
			const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

			if (!filter.test(this.emailAddress)) {
				this.errors.push('Invalid Email Address');
				this.emailAddress = this.emailAddress;
			} else {
				this.emailAddress = this.emailAddress;
			}
		}
	}
}
</script>

