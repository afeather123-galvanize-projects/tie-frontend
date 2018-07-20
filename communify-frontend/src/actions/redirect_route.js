export const REDIRECT_ROUTE = 'REDIRECT_ROUTE'

export const redirectRoute = (route) => {
    return {
        type: REDIRECT_ROUTE,
        route
    }
}

export const COMPLETE_REDIRECT = 'COMPLETE_REDIRECT'

export const completeRedirect = () => {
    return {
        type: COMPLETE_REDIRECT
    }
}