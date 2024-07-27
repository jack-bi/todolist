<template>
	<ul class="todo-main">
		<IsItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" />
	</ul>
	<div v-show="todos.length == 0">
		<p style="text-align: center">尚無待辦事項</p>
	</div>
</template>

<script>
import IsItem from "./IsItem";
import { mapState } from "vuex";

export default {
	name: "IsAll",
	components: { IsItem },
	computed: {
		...mapState(["todos"]),
	},
};
</script>

<style lang='scss'>
.todo-main {
	margin: 0 auto;
	padding: 0;
}

.todo-empty {
	height: 40px;
	line-height: 40px;
	border: 1px solid #dee2e6;
	border-radius: 2px;
	padding-left: 5px;
	margin-top: 0px;
}

.img {
	width: 100%;
	text-align: center;
}

.img img {
	width: 50%;
	margin: 0 auto;
}

.img p {
	text-align: center;
	color: #ccc;
}
</style>
