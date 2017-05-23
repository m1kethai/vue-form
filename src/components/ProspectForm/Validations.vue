<template>
	<span 

		:class="validationClass"
		>

	</span>
</template>

<script>
	/* eslint-disable */

	export default {
		data () {
			return {
				errors: []
			}
		},
		computed: {
			validationClass() {
				if(this.errors) {
					return 'invalid';
				}
				return 'validated';
			}
		},
		props: ['firstNameValStatus'],
		methods: {

		}
	}
</script>