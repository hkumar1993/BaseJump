import React from 'react'

class CommentsIndex extends React.Component {
  constructor(props) {
    super(props)
    console.log(props);
  }

  componentDidMount(){
    this.props.fetchComments(this.props.parentId)
  }

  render() {
    return (
      <div>
        <ul>
          {
            Object.values(this.props.comments).map(comment => <li key={comment.id}>{comment.body}</li>)
          }
        </ul>
      </div>
    )
  }
}

export default CommentsIndex
