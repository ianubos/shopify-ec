import throwUserErrors from './throw-user-errors'
import { customerActivateByUrlMutation } from './mutations'
import fetcher from '../fetcher'

/**
 {
  "data": {
    "customerActivateByUrl": {
      "customer": {
        "id": "Z2lkOi8vc2hvcGlmeS9DdXN0b21lci8yMTk4OTk1OTU5ODY0",
      },
      "customerUserErrors": []
    }
  }
}
 */

const handleAccountActivation = async (input) => {
  try {
    const { customerActivateByUrl } = await fetcher({
      query: customerActivateByUrlMutation,
      variables: {
        input,
      },
    })

    throwUserErrors(customerActivateByUrl?.customerUserErrors)
  } catch (error) {}
}

export default handleAccountActivation
