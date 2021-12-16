import {ModalValuesType} from '../src/components/Modal/Modal'

let maxSavedRequestId = 1

export const saveRequest = (values: ModalValuesType) => {
  // @ts-ignore
  const requests = JSON.parse(localStorage.getItem('requests'))
  if (requests) {
    // @ts-ignore
    maxSavedRequestId += 1
    localStorage.setItem('requests', JSON.stringify([...requests, {...values, id: maxSavedRequestId}]))
  } else {
    localStorage.setItem('requests', JSON.stringify([{...values, id: 1}]))
    
  }
}

// DELETE REQUEST НАХОДИТСЯ В SAVED REQUESTS

export const editRequest = (editingRequest: ModalValuesType) => {
  // @ts-ignore
  const requests = JSON.parse(localStorage.getItem('requests'))

  const newRequests = requests.map((request: ModalValuesType) => {
    if (request.id !== editingRequest.id) {
      return request
    } else {
      return editingRequest
    }
  })

  localStorage.setItem('requests', JSON.stringify(newRequests))
}


export const getRequests = (): Array<ModalValuesType> => {
  // @ts-ignore
  return JSON.parse(localStorage.getItem('requests'))
}

export const getToken = (): string | null => {
  return localStorage.getItem('token')
}
