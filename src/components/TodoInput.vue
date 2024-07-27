<template>
	<form class="toto-input bg-white d-flex justify-content-between my-4 rounded shadow">
		<input type="text" placeholder="新增待辦事項..." class="border-0 p-4 w-100 no-outline rounded" v-model="title" @keyup.enter="add" />
		<button class="btn btn-add" @click="add(title)">
			<i class="bi bi-plus fs-3 cursor-notallowed"></i>
		</button>
	</form>
</template>

<script>
	import { nanoid } from 'nanoid'
	export default {
		name:'TodoInput',
		data() {
			return {
				title:''
			}
		},
		methods: {
			add(){
				if(!this.title.trim()) return alert('輸入欄不能是空值!')
				const todoObj = { 
					id: nanoid(),
					title: this.title, 
					completed_at: false, 
					isEdit: false
				}
				this.$store.commit('addTodo',todoObj)
				this.title = ''
			}
		}
	}
</script>

<style lang='scss'>
	/*header*/
	.toto-input {
		margin: 0 auto 15px;
		max-width: 520px;
		width: 100%;
		input {
			box-sizing: border-box;
			width: 100%;		
			height: 48px;		
			font-size: 16px;
			border: 1px solid #ccc;
			border-radius: 5px;
			padding: 4px 7px;
			
		}
	}
</style>