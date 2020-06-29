import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoData: [],
    sequence: 1
  },
  getters: {//computedに描いてもいいけど、gettersの方がわかりやすいみたい..
    // タスクが完了したリスト...filter(trueのものしか返しません)
    doneTodos: state => state.todoData.filter(todo => todo.done),
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
    },
  },
  mutations: {//stateの値を更新..actionをする為の処理内容
    setTodos(state, defaultTodos) {//todoData追加
      state.todoData = defaultTodos;
    },
    setSequence(state, sequence) {//sequence追加
      state.sequence = sequence;
    },
    createTodo(state, { title, content }) {
      const todo = {
        id: state.sequence,
        title: title,
        content: content,
        done: false
      };
      state.todoData.push(todo);
      state.sequence++;
    },
    updateTodo(state, { id, title, content }) {
      const index = state.todoData.findIndex(todo => todo.id === id)
      if(index >= 0) {
        state.todoData[index].id = id;    
        state.todoData[index].title = title;
        state.todoData[index].content = content;
      }
    }
  },
  actions: {//mutationsをコミットする
    todoCreate({ commit }) {
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
    }
  }
});