

import React from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      return { id: action.id}
    default:
      return state
  }
}

export default reducer

  