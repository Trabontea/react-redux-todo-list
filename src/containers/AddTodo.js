import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className="row justify-content-md-center">
      <div className="col-md-4">
        <form onSubmit={e => {
          e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            dispatch(addTodo(input.value))
            input.value = ''
          }}>
          <div class="input-group mb-3">
            <input 
              ref={node => input = node} 
              class="form-control"
            />
            <div class="input-group-append">
              <button type="submit" className="btn btn-info input-group-text">
                Add Todo
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default connect()(AddTodo)
