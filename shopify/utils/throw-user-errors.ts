import { ValidationError } from './errors'

const getCustomMessage = (code: any, message: string) => {
  switch (code) {
    case 'UNIDENTIFIED_CUSTOMER':
      message = 'Cannot find an account that matches the provided credentials'
      break
  }
  return message
}

export const throwUserErrors = (errors?: any) => {
  if (errors && errors.length) {
    console.log('error detected!!!')
    throw new ValidationError({
      errors: errors.map(({ code, message }) => ({
        code: code ?? 'validation_error',
        message: getCustomMessage(code, message),
      })),
    })
  }
}

export default throwUserErrors
