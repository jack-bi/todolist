import { createStore } from 'vuex'

export default createStore({
	state: {
		todos: JSON.parse(localStorage.getItem('todos')) || []
	},
	getters: {
		todoIndex() {
			// return filter[state.route.name](state.todos).map(todo => state.todos.indexOf(todo))
			return '111'
		}
	},
	mutations: {
		addTodo(state, todoObj) {
			state.todos.push(todoObj)
		},
		checkTodo(state, id) {
			state.todos.forEach((todo) => {
				if (todo.id === id) todo.completed_at = !todo.completed_at
			})
		},
		updateTodo(state, payload) {
			//console.log(payload.id, payload.title)
			state.todos.forEach((todo) => {
				if (todo.id === payload.id) todo.title = payload.title
			})
		},
		deleteTodo(state, id) {
			state.todos = state.todos.filter(todo => todo.id !== id)
		},
		checkAllTodo(state, completed_at) {
			state.todos.forEach((todo) => {
				todo.completed_at = completed_at
			})
		},
		clearAllTodo(state) {
			state.todos = state.todos.filter((todo) => {
				return !todo.completed_at
			})
		}
	},
	actions: {
	},
	modules: {
	},
})
