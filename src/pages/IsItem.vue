<template>
	<li>
		<label>
			<input type="checkbox" :checked="todo.completed_at" @change="handleCheck(todo.id)" />
			<span v-show="!todo.isEdit">{{ todo.title }}</span>
			<input type="text" v-show="todo.isEdit" :value="todo.title" @blur="handleBlur(todo, $event)"
				ref="inputTitle" />
		</label>
		<button class="btn btn-edit" @click="handleEdit(todo)" v-show="!todo.isEdit">
			<i class="bi bi-pen"></i>
		</button>
		<button class="btn btn-trash" @click="handleDelete(todo.id)">
			<i class="bi bi-trash"></i>
		</button>
	</li>
</template>

<script>
export default {
	name: "IsItem",
	props: ["todo"],
	methods: {
		handleCheck(id) {
			this.$store.commit("checkTodo", id);
		},
		handleDelete(id) {
			if (confirm("確定刪除嗎?")) {
				this.$store.commit("deleteTodo", id);
			}
		},
		handleEdit(todo) {
			todo.isEdit = true;
			this.$nextTick(function () {
				this.$refs.inputTitle.focus();
			});
		},
		handleBlur(todo, e) {
			todo.isEdit = false;
			if (!e.target.value.trim()) return alert("輸入不能是空白的!");
			this.$store.commit("updateTodo", { id: todo.id, title: e.target.value });
		},
	},
};
</script>

<style lang='scss'>
li {
	list-style: none;
	height: 48px;
	line-height: 48px;
	padding: 0 5px;
	border-bottom: 1px solid #dee2e6;
	font-size: 16px;
	display: flex;
}

li label {
	float: left;
	cursor: pointer;
	span {
		width: 10rem;
	}
}

li label input {
	width: 18px;
	height: 18px;
	vertical-align: middle;
	margin-right: 15px;
	position: relative;
	top: -2px;
}

li button {
	background: none;
	border-width: 0;
}

li:before {
	content: initial;
}

li:last-child {
	border-bottom: none;
}

</style>
