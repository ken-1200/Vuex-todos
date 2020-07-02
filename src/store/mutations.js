export default {
  setTodos(state, defaultTodos) {//todoData追加
    state.todoData = defaultTodos;
  },
  setSequence(state, sequence) {//sequence追加
    state.sequence = sequence;
  },
  createTodo(state, { title, content }) {//Todoの作成
    const todo = {
      id: state.sequence,
      title: title,
      content: content,
      done: false
    };
    state.todoData.push(todo);
    state.sequence++;
  },
  updateTodo(state, { id, title, content }) {//Todoの更新
    const index = state.todoData.findIndex(todo => todo.id === id)
    if(index >= 0) {
      state.todoData[index].id = id;    
      state.todoData[index].title = title;
      state.todoData[index].content = content;
    }
  },
  deleteTodo(state, id) {//Todoの削除
    const index = state.todoData.findIndex(todo => todo.id === id);
    if(index >= 0) {
      state.todoData.splice(index, 1);
    }
  },
  changeDone(state, id) {//Doneチェンジ
    const index = state.todoData.findIndex(todo => todo.id === id);
    if(index >= 0) {
      state.todoData[index].done ? state.todoData[index].done = false : state.todoData[index].done =true;
    }
  }
};