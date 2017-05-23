<template>
	<div>
		<div class="formitem-container">
			<div class="label-container">
				<label for="first_name">First Name:</label>
			</div>

			<div class="input-container">
				<input 
					type="text" 
					id="first_name"
					name="first_name" 
					v-model="first_name" 
					@input="updateModel"
				>
			</div>

		</div>
		<div :class="validationClass">
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
			first_name: null,
			errors: null
		}
	},
	computed: {
		validationClass() {
			if(this.errors == null) {
				return 'validation-container blank'
			}
			else if(this.errors){
				if(this.errors.length > 0) {
					return 'validation invalid';
				}	
				else {
					return 'validation validated';
				}
			} 	
		}
	},
	methods: {
		updateModel() {
			this.errors = [];
			if (this.first_name === 'badinput') {
				this.errors.push('The input is bad');
			}
			if(this.first_name == '') {
				this.errors.push('This field is required');
			}
			if (this.specialCharValidation() === true) {
				this.errors.push('Special characters and spaces not allowed')
			} 

			this.$emit('input', this.first_name);
		},
		specialCharValidation() {
			var specialChars = " <>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
			var i;
			for (i=0; i < specialChars.length ; i++) {
				if (this.first_name.includes(specialChars[i])) {
					return true;
				}
			}
		}
	}
}
</script>
