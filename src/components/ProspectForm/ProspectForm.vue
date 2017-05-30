<template>
	<div class="form-container">
		<first-name
			v-model="first_name"
			:first-name="first_name"
		>
		</first-name>

		<last-name
			v-model="last_name"
			:last-name="last_name"
		>
		</last-name>
		<zipcode
			@update="updateAddress"
		>
		</zipcode>
		<street-address
			v-model="address.street_address"
			:address="address.street_address"
		>
		</street-address>
		<city
			:city="address.city"
			@update="updateAddress"
		>
		</city>
		<state
			:state="address.state"
			@update="updateAddress"
		>
		</state>
		<phone-number
			v-model="phone_number"
			:phoneNumber="phone_number"
		>
		</phone-number>
		<email-address
			v-model="email_address"
			:emailAddress="email_address"
		>
		</email-address>
	</div>
</template>

<script>
/* eslint-disable */
import FirstName from './FormItems/FirstName.vue'
import LastName from './FormItems/LastName.vue'
import Zipcode from './FormItems/Zipcode.vue'
import City from './FormItems/City.vue'
import StreetAddress from './FormItems/Address.vue'
import State from './FormItems/State.vue'
import PhoneNumber from './FormItems/PhoneNumber.vue'
import EmailAddress from './FormItems/EmailAddress.vue'

export default {
	data () {
		return {
			'first_name': null,
			'last_name': null,
			'address': {
				'zipcode': null,
				'city': null,
				'street_address': null,
				'state': null
			},
			'phone_number': null,
			'email_address': null
		}
	},
	components: {
		FirstName,
		LastName,
		Zipcode,
		City,
		StreetAddress,
		State,
		PhoneNumber,
		EmailAddress
	},
	methods: {
		updateAddress(key, value) {
			this.address[key] = value;
		}
	}
}
</script>
<style type="text/css">

body {
	font-family: Khula, "sans-serif";
}

/*Forms*/
.form-container {
	width: 350px;
	margin: 20vh auto;
}

.formitem-container {
	/*display: flex;*/
	/*justify-content: space-between;*/
	margin: 10px 0 0;
}

.label-container {
	display: inline-block;
	width: 118px;
}

.input-container {
	display: inline;
	/*float: right;*/
}

/*turn off spinners on number inputs - only works on chrome*/
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/*Validation*/
.validation  {
	display: block;
	font-size: 12px;
	font-style: italic;
	text-align: right;
}

.validatedInput,
.unvalidatedInput {
	width: 150px;
	border-radius: 2px;
	transition: 0.3s border;
}
.validatedInput:focus {
	outline: none;
}
.validatedInput.valid {
	border: 2px solid green;
}
.validatedInput.valid::before {
	content: 'sdjhfkf';
  position: absolute;
  background: url(http://wiki.pandorafms.com/images/d/d6/Yes_tick.png) no-repeat;
  width: 20px;
  height: 20px;
}
.validatedInput.invalid {
	border: 2px solid red;
}

.validatedMsgContainer, .unvalidatedMsgContainer {
	font-size: 12px;
	margin: 7px 0 15px;
}

.validatedMsgContainer.invalid {
	color: red;
}

.validationIcon.unvalidated {
	display: none;
  margin: 1px 0 0 10px;
  width: 24px;
  height: 24px;
}

.validationIcon.valid {
	display: inline;
  position: absolute;
  background: url(ic_check_24px.svg) no-repeat;
  margin: 1px 0 0 10px;
  width: 24px;
  height: 24px;
}

.validationIcon.invalid {
	display: inline;
  position: absolute;
  background: url(ic_close_black_24px.svg) no-repeat;
  margin: 1px 0 0 10px;
  width: 24px;
  height: 24px;
}

/*.validationIcon {
}*/


</style>
