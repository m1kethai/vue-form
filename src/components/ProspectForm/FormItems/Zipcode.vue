<template>
	<div>
		<div class="formitem-container">
			<div class="label-container">
				<label for="zipcode">Zipcode</label>
			</div>

			<div class="input-container">
				<input
					type="number"
					id="zipcode"
					:class="validationInputClass"
					name="zipcode"
					v-model="zipcode"
					@keyup="updateData"
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

import axios from 'axios';

export default {
	props: ['updateModel'],
	data () {
		return {
			zipcode: null,
			city: null,
			state: null,
			errors: null,
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
		updateData() {
			this.errors = [];
			this.manageInput();
			this.invalidCharValidation();
		},
		manageInput() {
			if (this.zipcode === null) {
				this.zipcode === "";
			}
				switch(true) {
					case (this.zipcode === ""):
						this.errors.push('This field is required');
						break;
					case (this.zipcode === null):
						this.errors.push('This field is required');
						break;
					case (this.zipcode.length < 5):
						this.errors.push('incomplete');
						break;
					case (this.zipcode.length === 5):
						this.pullLocationData();
						this.$emit('update', 'zipcode', this.zipcode);
						break;
					case (this.zipcode.length > 5):
						this.zipcode = this.zipcode.slice(0, -1);
						break;
				}
		},
		invalidCharValidation() {
			const invalidChars = " qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`=";
			let i;
			if (this.zipcode !== null) {
				for (i=0; i < invalidChars.length ; i++) {
					if (this.zipcode.includes(invalidChars[i])) {
						this.zipcode = this.zipcode.substr(0, -1);
					}
				}
			}
		},
		pullLocationData() {
			const geocoder = new google.maps.Geocoder();
			const API_KEY_GEOCODING = 'AIzaSyApO1J87LeGmaPPZCYOTsqWDW4HWCJTUmA'
			const API_KEY_JS = 'AIzaSyC9wlLTpB3yNA2qbaMl9hQ3U5oEis6vbiM';

			axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.zipcode}&components=country:US|postal_code=${this.zipcode}&result_type=postal_code|administrative_area_level_1&key=${API_KEY_JS}`)
				.then((response) => {
					if (response.data.results[0].partial_match) {
						return;
					}
					console.log(response);
					response.data.results[0].address_components.map((component) => {
						if(component.types.includes('administrative_area_level_1')) {
							this.state = component.long_name;
							this.$emit('update', 'state', this.state);
						}
						if(component.types.includes('locality')) {
							this.city = component.long_name;
							this.$emit('update', 'city', this.city);
						}
					});
				})
				.catch((error) => {
					console.log(error);
				});
		},

	}
}
</script>
