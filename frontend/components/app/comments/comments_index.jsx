import React from 'react'
import CommentFormContainer from './comment_form_container'
import CommentsIndexItem from './comments_index_item'

class CommentsIndex extends React.Component {
  constructor(props) {
    super(props)
    console.log(props);
  }

  componentDidMount(){
    this.props.fetchCompanyUsers(this.props.currentUser.companyId).
      then(res => this.props.fetchComments(this.props.parentId))
  }

  render() {
    const _emptyComment = {
      body: '',
      author_id: this.props.currentUser.id,
      parent_id: this.props.parentId,
      parent_type: this.props.parentType
    }
    return (
      <div>
        <ul>
          {
            Object.values(this.props.comments).map(comment => (
                <CommentsIndexItem
                  user={this.props.users[comment.authorId]}
                  comment={comment}/>
              )
            )

          }
        </ul>
        <CommentFormContainer comment={ _emptyComment }
          formType='new'
          parentType={this.props.parentType}
          parentId={this.props.parentId} />
      </div>
    )
  }
}

export default CommentsIndex
