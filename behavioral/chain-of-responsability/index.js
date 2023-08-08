const Status = {
    WAITING: 'WAITING',
    AUTHORIZED: 'AUTHORIZED',
    VALIDATED: 'VALIDATED',
    CREATED: 'CREATED',
    NOT_AUTHORIZED: 'NOT_AUTHORIZED',
    INVALID: 'INVALID',
}

class Handler {
    constructor() {
        this.nextHandler = null
    }
    setNext(handler) {
        this.nextHandler = handler
    }
    handleRequest(request) {
        if (this.nextHandler)
            return this.nextHandler.handleRequest(request)
        return request
    }
}

class AuthorizationHandler extends Handler {


    constructor() {
        super()
        this.allowedUserIds = [1, 2, 3]
    }

    canAccess(request) {
        return this.allowedUserIds.includes(request.requested_by_user_id)
    }

    handleRequest(request) {
        if (this.canAccess(request)) {
            request.status = Status.AUTHORIZED
            return super.handleRequest(request)
        }
        request.status = Status.NOT_AUTHORIZED
        return request
    }
}

class ValidationHandler extends Handler {

    isValid(request) {
        return request.data.name.trim().length > 0
    }

    handleRequest(request) {

        if (this.isValid(request)) {
            request.status = Status.VALIDATED
            return super.handleRequest(request)
        }

        request.status = Status.INVALID
        return request
    }
}

class CreationHandler extends Handler {
    handleRequest(request) {
        request.status = Status.CREATED
        return super.handleRequest(request)
    }
}

class Company {
    constructor(name) {
        this.name = name
    }
}
class Request {
    constructor(requested_by_user_id, data) {
        this.requested_by_user_id = requested_by_user_id
        this.data = data
        this.status = Status.WAITING
    }
}

// valid, the object will be CREATED
const [requestedByUserId, data] = [1, new Company('Pepsi')]

// the user id is NOT_AUTHORIZED
// const [requestedByUserId, data] = [4, new Company('Pepsi')]

// the company is INVALID
// const [requestedByUserId, data] = [1, new Company('')]

const request = new Request(requestedByUserId, data)

const authorizationHandler = new AuthorizationHandler()
const validationHandler = new ValidationHandler()
const creationHandler = new CreationHandler()

authorizationHandler.setNext(validationHandler)
validationHandler.setNext(creationHandler)

const result = authorizationHandler.handleRequest(request)

console.log(result.status)