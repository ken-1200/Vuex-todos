export default {
  // タスクが完了したリスト...filter(trueのものしか返しません)
  doneTodos: state => (state.todoData.filter(todo => todo.done)),
  // タスクが完了していないリスト
  notDoneTodos: state => state.todoData.filter(todo => todo.done != true),
  // 全体のタスク数
  allTodosCount: state => state.todoData.length,
  // タスクが完了したリスト数...(state, 他のgetters)
  doneTodosCount: (state, getters) => getters.doneTodos.length,
  // タスクが完了していないリスト数
  notDoneTodosCount: (state, getters) => getters.notDoneTodos.length,
  // idに該当するタスクの取得
  getTodoById: state => id => {
    return state.todoData.find(todo => todo.id === id)
  }
};