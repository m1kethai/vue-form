<template>
	<div>
		<div class="formitem-container">
			<div class="label-container">
				<label for="state">State:</label>
			</div>

			<div class="input-container">
				<input 
					type="text" 
					id="state"
					name="state" 
					v-model="state" 
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
			state: null,
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
			if (this.state === 'badinput') {
				this.errors.push('The input is bad');
			}
			if(this.state == '') {
				this.errors.push('This field is required');
			}
			this.$emit('input', this.state);
		}
	}
}
</script>

