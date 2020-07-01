export default {
  todoCreate({ commit }) {//defalutデータ
    let defaultTodos = [
      {
        id: 1,
        title: '胸トレをする',
        content: '大胸筋上部',
        done: false
      },
      {
        id: 2,
        title: '背中トレをする',
        content: '広背筋下部',
        done: true
      }
    ];
    let sequence = 3;
    commit('setTodos', defaultTodos);
    commit('setSequence', sequence);
  },
  createTodos({ commit }, todo) {
    commit('createTodo', todo);
  },
  updateTodos({ commit }, todo) {
    commit('updateTodo', todo);
  },
  deleteTodos({ commit }, id) {
    commit('deleteTodo', id);
  },
  changeDoneTodos({ commit }, id) {
    commit('changeDone', id);
  }
};