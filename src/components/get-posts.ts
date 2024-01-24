
type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

var posts: Post[] = [];
function getPosts(): Promise<Post[]> {
  return fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<Post[]>;
    }
  );
}
posts = await getPosts();
export default posts;
