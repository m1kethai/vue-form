<template>
	<div>
		<div class="formitem-container">
			<div class="label-container">
				<label for="last_name">Last Name:</label>
			</div>

			<div class="input-container">
				<input 
					type="text" 
					id="last_name"
					name="last_name" 
					v-model="last_name" 
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
			last_name: null,
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
			if (this.last_name === 'badinput') {
				this.errors.push('The input is bad');
			}
			if(this.last_name == '') {
				this.errors.push('This field is required');
			}
			if (this.specialCharValidation() === true) {
				this.errors.push('Special characters and spaces not allowed')
			} 

			this.$emit('input', this.last_name);
		},
		specialCharValidation() {
			var specialChars = " <>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
			var i;
			for (i=0; i < specialChars.length ; i++) {
				if (this.last_name.includes(specialChars[i])) {
					return true;
				}
			}
		}
	}
}
</script>
