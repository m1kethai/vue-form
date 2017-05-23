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
			v-model="address.zipcode" 
			:zipcode="address.zipcode"
		>
		</zipcode>
		<city
			v-model="address.city" 
			:city="address.city"
		>
		</city>
		<street-address
			v-model="address.street_address" 
			:address="address.street_address"
		>
		</street-address>
		<state
			v-model="address.state" 
			:address="address.state"
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
		updateModel() {
			console.log('updating model');
		},
		checkSpecialChars() {
			console.log('');
		}
	}
}
</script>
<style type="text/css">

body {
	font-family: Khula, "sans-serif";	
}

.form-container {
	width: 350px;
	margin: 20vh auto;
}

.formitem-container {
	display: flex;
	margin: 10px 0 0;
	justify-content: space-between;
}

.label-container {
	display: inline-block;
	width: 118px;
}

.input-container {
	display: inline-block;
	float: right;	
}

.validation  {
	display: block;
	font-size: 12px;
	font-style: italic;
	text-align: right;
	/*margin: 5px 0;*/
}

.invalid {
	color: red;
}

.validated {
	color: green;
}
.validated:after {
	content: 'valid';
	/*background: url('/images/ic_check_18px.png');*/
	height: 25px;
	width: 25px;
	position: relative;

/*	top: -34px;
	right: -23px;
	content: '' ;
	padding: 0 9px;
	background-color: teal;*/
}
</style>
