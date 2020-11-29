import { action, createStore } from "easy-peasy";

export const store = createStore({
  post: [{ title: "", body: null }],
  addPost: action((state, payload) => {
    state.post.push(payload);
  }),
});
