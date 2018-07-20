export const RECIEVE_CONFIRMATION = 'RECIEVE_CONFIRMATION'

export const recieveConfirmation = (message) => {
    return {
        type: RECIEVE_CONFIRMATION,
        message
    }
}

export const DELETE_CONFIRMATION = 'DELETE_CONFIRMATION'

export const deleteConfirmation = (key) => {
    return {
        type: DELETE_CONFIRMATION,
        key
    }
}

export const CLEAR_CONFIRMATIONS = 'CLEAR_CONFIRMATIONS'

export const clearConfirmations = () => {
    return {
        type: CLEAR_CONFIRMATIONS
    }
}