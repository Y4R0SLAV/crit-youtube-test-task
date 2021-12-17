import { stringify } from 'querystring'
import {ModalValuesType} from './components/Modal/Modal'


const getUserData = () => {
  const currentUserToken = localStorage.getItem('token') as string

  // @ts-ignore
  let allSavedRequests = JSON.parse(localStorage.getItem('AllSavedRequests')) || []
  let currentUserRequests = [] as Array<ModalValuesType>
  
  for (let i = 0; i < allSavedRequests.length; i ++) {
    if (allSavedRequests[i].token === currentUserToken) {
      currentUserRequests = allSavedRequests[i].requests
    }
  }
  
  let maxSavedRequestId = currentUserRequests.length || 0
  return {currentUserToken, allSavedRequests, currentUserRequests, maxSavedRequestId }
}




export const saveRequest = (values: ModalValuesType) => {
  let {currentUserToken, allSavedRequests, currentUserRequests, maxSavedRequestId } = getUserData()
  maxSavedRequestId += 1
  currentUserRequests.push({...values, id: maxSavedRequestId})


  if (allSavedRequests.length > 0) {
    if (currentUserRequests.length > 1) {
        
      allSavedRequests = allSavedRequests.map(({token, requests}: {token: string, requests: Array<ModalValuesType>}) => {
        if (token === currentUserToken) {
          return {token, requests: currentUserRequests}
        } else {
          return {token, requests}
        }
      })
    } else {
      // с текущим токеном нет ещё ни одного сохраненного запроса
      allSavedRequests.push({token: currentUserToken, requests: currentUserRequests})
    }
  } else {
      allSavedRequests = [{token: currentUserToken, requests: currentUserRequests}]
  }

  localStorage.setItem('AllSavedRequests', JSON.stringify(allSavedRequests))
}


export const deleteRequest = (deletingRequest: ModalValuesType) => {
  let {currentUserToken, allSavedRequests, currentUserRequests, maxSavedRequestId } = getUserData()
  currentUserRequests = currentUserRequests.filter((request: ModalValuesType) => request.id !== deletingRequest.id )

  if (allSavedRequests.length > 0) {
    if (currentUserRequests.length > 0) {
      allSavedRequests = allSavedRequests.map(({token, requests}: {token: string, requests: Array<ModalValuesType>}) => {
        if (token === currentUserToken) {
          return {token, requests: currentUserRequests}
        } return {token, requests}
      })
    } else {
      // с текущим токеном нет ещё ни одного сохраненного запроса
      // @ts-ignore
      allSavedRequests = allSavedRequests.filter(({token, request}) => (token !== currentUserToken))
    }
  } else {
      allSavedRequests = [{token: currentUserToken, requests: currentUserRequests}]
  }

  localStorage.setItem('AllSavedRequests', JSON.stringify(allSavedRequests))
}


export const editRequest = (editingRequest: ModalValuesType) => {
    let {currentUserToken, allSavedRequests, currentUserRequests, maxSavedRequestId } = getUserData()

    currentUserRequests = currentUserRequests.map((request: ModalValuesType) => {
    if (request.id !== editingRequest.id) {
      return request
    } else {
      return editingRequest
    }
  })

  if (allSavedRequests.length > 0) {
    if (currentUserRequests.length > 1) {
      allSavedRequests = allSavedRequests.map(({token, requests}: {token: string, requests: Array<ModalValuesType>}) => {
        if (token === currentUserToken) {
          return {token, requests: currentUserRequests}
        } return {token, requests}
      })
    } else {
      // с текущим токеном нет ещё ни одного сохраненного запроса
      allSavedRequests.push({token: currentUserToken, requests: currentUserRequests})
    }
  } else {
      allSavedRequests = [{token: currentUserToken, requests: currentUserRequests}]
  }

  localStorage.setItem('AllSavedRequests', JSON.stringify(allSavedRequests))
}


export const getRequests = (): Array<ModalValuesType> => {
    return getUserData().currentUserRequests
}

export const getToken = (): string | null => {
  return localStorage.getItem('token')
}

export const deleteToken = () => {
  localStorage.removeItem('token')
}

