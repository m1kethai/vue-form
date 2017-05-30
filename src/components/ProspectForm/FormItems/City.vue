<template>
	<div>
		<div class="formitem-container">
			<div class="label-container">
				<label for="zipcode">City:</label>
			</div>

			<div class="input-container">
				<input
					type="text"
					id="city"
					:class="validationInputClass"
					v-model="newCity"
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
	props: ['city'],
	data () {
		return {
			newCity: this.city,
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

			if(this.newCity == '') {
				this.errors.push('This field is required');
			}
			if (this.invalidCharValidation() === true) {
				this.errors.push('Numbers and special characters not allowed')
			}
			this.$emit('update', 'city', this.newCity);
		},
		invalidCharValidation() {
			var invalidChars = "01234567389<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
			var i;
			for (i=0; i < invalidChars.length ; i++) {
				if (this.newCity.includes(invalidChars[i])) {
					return true;
				}
			}
		}
	},
	watch: {
		city(value) {
			this.newCity = value;
		}
	}
}
</script>
