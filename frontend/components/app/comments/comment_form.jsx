import React from 'react'

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
      e.preventDefault()
      const comment = Object.assign({}, this.state.comment, { [field]: e.target.value })
      this.setState( { comment })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.processComment(this.state.comment).
      then(res => this.clearComment()).
      fail(res => handleErrors(res))
  }

  handleCancel(e) {
    e.preventDefault()
    this.clearComment()
  }

  handleErrors(res) {
    console.log(res);
  }

  render() {
    return (
      <div className='comment-form'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.update('body')} value={this.state.comment.body} />
          <input type='submit' className='btn btn-submit'/>
        </form>
      </div>
    )
  }
}

export default CommentForm
