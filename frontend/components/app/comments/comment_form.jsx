import React from 'react'
import UserIconDisplay from '../user_icon_display'

class CommentForm extends React.Component {
  constructor(props){
    super(props)
    console.log(this.props);
    this.state = { comment: this.props.comment, formType: this.props.formType }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleErrors = this.handleErrors.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.clearComment = this.clearComment.bind(this)
  }

  clearComment() {
    console.log(this.props);
    const comment = this.props.comment
    this.setState( { comment })
  }

  update(field) {
    return (e) => {
      $('textarea').removeClass('invalid-input')
      e.preventDefault()
      const comment = Object.assign({}, this.state.comment, { [field]: e.target.value })
      this.setState( { comment })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.processComment(this.state.comment).
      then(res => this.clearComment()).
      fail(res => this.handleErrors(res))
  }

  handleCancel(e) {
    e.preventDefault()
    this.clearComment()
  }

  handleErrors(res) {
    $('textarea').addClass('invalid-input')
  }

  render() {
    return (
      <div className='comment-form'>
        <UserIconDisplay user={this.props.currentUser} size={40} />
        <form onSubmit={this.handleSubmit}>
          <textarea onChange={this.update('body')} value={this.state.comment.body}
            placeholder='Add a comment....'></textarea>
          <input type='submit' className='btn btn-submit'/>
        </form>
      </div>
    )
  }
}

export default CommentForm
