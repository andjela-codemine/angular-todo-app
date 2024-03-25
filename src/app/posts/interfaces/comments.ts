export interface Comments {
  id: number,
  body: string,
  postId: number,
  user: {
    id: number,
    username: string
  }
}
