import { ref, Ref } from "vue";
import Ipost from "../interfaces/IPost";

class PostService {
  private posts: Ref<Ipost[]>;

  constructor() {
    this.posts = ref<Ipost[]>([]);
  }

  getPost(): Ref<Ipost[]> {
    return this.posts;
  }

  async fetchAll(): Promise<void> {
    try {
      const url = "https://jsonplaceholder.typicode.com/posts";
      const response = await fetch(url);
      const json = await response.json();
      this.posts.value = await json;
    } catch (error) {
      console.log(error);
    }
  }
}

export default PostService;
