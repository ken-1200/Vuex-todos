import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoData: [],
    sequence: 1
  },
  getters: {//computedに描いてもいいけど、gettersの方がわかりやすいみたい..
    // タスクが完了したリスト
    // タスクが完了していないリスト
    // 全体のタスク数
    // タスクが完了したリスト数
    // タスクが完了していないリスト数
    // idに該当するタスクの取得
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
  }
});