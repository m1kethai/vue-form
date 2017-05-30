<template>
	<div>
		<div class="formitem-container">
			<div class="label-container">
				<label for="state">State:</label>
			</div>

			<div class="input-container">
				<select
					type="select"
					id="state"
					v-model="newState"
					@change="updateModel"
				>
					<option :value="null" selected>Select a state..</option>
					<option
						v-for="statename in stateList"
						:value="statename"
						> {{  statename  }}
					</option>
				</select>
			</div>

		</div>
		<div :class="validationMsgClass">
<!-- 			<div
				v-for="error in errors"
				>
				{{ error }}
			</div> -->
		</div>
	</div>
</template>

<script>
/* eslint-disable */

export default {
	props: ['state'],
	data () {
		return {
			newState: this.province,
			errors: null,
			stateList: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District Of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
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
			switch(this.newState) {
				case ('California'):
					this.errors.push('California');
					break;
				case('badinput'):
					this.errors.push('The input is bad');
					break;
				case(''):
					this.errors.push('The input is bad');
					break;
			};
			this.$emit('update', 'state', this.newState);
		}
	},
	watch: {
		state(value) {
			this.newState = value;
		}
	}
}
</script>

