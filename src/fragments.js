export const COMMNET_FRAGMENT = `
  fragment CommentsParts on Commnet {
    id
    text
    user {
      username
    }
  }
`