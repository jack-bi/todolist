<template>
	<div id="root">
		<div style="margin: 15rem auto 0">
			<TodoInput />
			<div class="todo-wrap">
				<div class="router-link">
					<router-link to="/IsAll">全部</router-link>
					<router-link to="/IsDoing">處理中</router-link>
					<router-link to="/IsDone">已完成</router-link>
				</div>
				<router-view></router-view>
				<TodoContent />
			</div>
		</div>
	</div>
</template>

<script>
import TodoInput from "./components/TodoInput";
import TodoContent from "./components/TodoContent";
import { mapState } from "vuex";

export default {
	name: "App",
	components: { TodoInput, TodoContent },
	data() {
	},
	computed: {
		...mapState(["todos"]),
	},
	watch: {
		todos: {
			deep: true,
			handler(value) {
				localStorage.setItem("todos", JSON.stringify(value));
			},
		},
	},
};
</script>

<style lang='scss'>
@import "bootstrap-icons/font/bootstrap-icons.css";

body {
	background: linear-gradient(180deg, rgba(34,193,195,1) 0%, rgb(187, 185, 68) 100%);
	height: 100vh;
	overflow: hidden;
	.router-link {
		display: flex;
		justify-content: space-around;
		border-bottom: solid 1px #ccc;
		font-size: 16px;
		height: 70px;
		line-height: 70px;
		a {
			text-decoration: none;
			width: 100%;
			text-align: center;
			color: #000;
			&.router-link-active {
				color: #59ccb9;
				border-bottom: 2px solid #59ccb9;
				font-size: 1.2rem;
				font-weight: bold;
			}
		}
	}
	.btn {
		cursor: pointer;
		&.btn-add {
			position: absolute;
			left: 50vw;
			margin-left: 12.8rem;
			margin-top: 0.85rem;
			@media screen and (max-width: 480px) {
				margin-left: 9.8rem;
			}
		}
		&.btn-edit {
			margin-left: auto;
			margin-right: 5px;
			line-height: 3rem;
		}
		i {
			color: hsl(236deg, 9%, 61%)
		}
	}
	
	.todo-wrap {
		background-color: #fff;
		max-width: 520px;
		width: 100%;
		margin: 0 auto;
		padding-bottom: 10px;
		border: 1px solid transparent;
		border-radius: 5px;
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
	}
}

</style>
