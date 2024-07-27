<template>
	<ul class="todo-main">
		<li v-for="todo in isDoneList" :key="todo.id">
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
	</ul>
	<div v-show="isDoneList.length == 0">
		<p style="text-align: center">尚無已完成事項</p>
	</div>
</template>
<script>
import { mapState } from "vuex";
export default {
	name: "IsDone",
	computed: {
		...mapState(["todos"]),
		isDoneList() {
			return this.todos.filter((todo) => todo.completed_at);
		},
	},
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
