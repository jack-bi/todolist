<template>
	<div class="todo-footer p-3 d-flex justify-content-between align-items-center list-footer fs-7">
		<label>
			<input type="checkbox" v-model="isAll" />
		</label>
		<span>
			<span>已完成{{ doneTotal }}項</span> / 全部{{ total }}項
		</span>
		<button class="btn btn-danger" @click="clearAll">清除已完成事項</button>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
	name: "TodoContent",
	computed: {
		...mapState(["todos"]),
		total() {
			return this.todos.length;
		},
		doneTotal() {
			return this.todos.reduce((pre, todo) => pre + (todo.completed_at ? 1 : 0), 0);
		},
		isAll: {
			get() {
				return this.doneTotal === this.total && this.total > 0;
			},
			set(value) {
				this.$store.commit("checkAllTodo", value);
			},
		},
	},
	methods: {
		clearAll() {
			this.$store.commit("clearAllTodo");
		},
	},
};
</script>

<style lang='scss'>
.todo-footer {
	height: 40px;
	line-height: 40px;
	padding: 10px 20px 0;
	margin-top: 5px;
	border-top: 1px solid #dee2e6;
	label {
		display: inline-block;
		margin-right: 10px;
		cursor: pointer;
		input {
			width: 18px;
			height: 18px;
			position: relative;
			top: -1px;
			vertical-align: middle;
			margin-right: 5px;
		}
	}
}
</style>
