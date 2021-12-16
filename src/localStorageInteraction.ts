import {ModalValuesType} from '../src/components/Modal/Modal'

let maxSavedRequestId = 1

export const saveRequest = (values: ModalValuesType) => {
  const currentUserToken = localStorage.getItem('token') as string

  // @ts-ignore
  let allSavedRequests = JSON.parse(localStorage.getItem('AllSavedRequests')) || []
  let currentUserRequests = [] as Array<ModalValuesType>

  for (let i = 0; i < allSavedRequests.length; i ++) {
    if (allSavedRequests[i].token === currentUserToken) {
      currentUserRequests = allSavedRequests[i].requests
    }
  }

  if (currentUserRequests) {
    maxSavedRequestId += 1
    currentUserRequests.push({...values, id: maxSavedRequestId})
  } else {
    currentUserRequests = [{...values, id: maxSavedRequestId}]
  } 

  if (allSavedRequests.length > 0) {
    if (currentUserRequests.length > 1) {
      alert(currentUserToken + JSON.stringify(currentUserRequests))
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


export const deleteRequest = (deletingRequest: ModalValuesType) => {
  const currentUserToken = localStorage.getItem('token') as string
  let currentUserRequests = [] as Array<ModalValuesType>

  // @ts-ignore
  let allSavedRequests = JSON.parse(localStorage.getItem('AllSavedRequests')) || []

  for (let i = 0; i < allSavedRequests.length; i ++) {
    if (allSavedRequests[i].token === currentUserToken) {
      currentUserRequests = allSavedRequests[i].requests
    }
  }

  currentUserRequests = currentUserRequests.filter((request: ModalValuesType) => request.id !== deletingRequest.id )

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


export const editRequest = (editingRequest: ModalValuesType) => {
  const currentUserToken = localStorage.getItem('token') as string

  // @ts-ignore
  let allSavedRequests = JSON.parse(localStorage.getItem('AllSavedRequests')) || []
  let currentUserRequests = [] as Array<ModalValuesType>

  for (let i = 0; i < allSavedRequests.length; i ++) {
    if (allSavedRequests[i].token === currentUserToken) {
      currentUserRequests = allSavedRequests[i].requests
    }
  }

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
  const currentUserToken = localStorage.getItem('token') as string
  // @ts-ignore
  let allSavedRequests = JSON.parse(localStorage.getItem('AllSavedRequests')) || []

  let currentUserRequests = [] as Array<ModalValuesType>

  for (let i = 0; i < allSavedRequests.length; i ++) {
    if (allSavedRequests[i].token === currentUserToken) {
      currentUserRequests = allSavedRequests[i].requests
    }
  }

  return currentUserRequests
}

export const getToken = (): string | null => {
  return localStorage.getItem('token')
}

export const deleteToken = () => {
  localStorage.removeItem('token')
}

