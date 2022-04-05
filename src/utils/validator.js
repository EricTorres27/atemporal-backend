
export const validateSchema = async (schema, body) => {
  try {
    const data = await schema.validateAsync(body, {
      abortEarly: false,
      errors: {
        wrap: { label: false },
        stack: true
      },
      externals: false
    })
    return {
      data,
      err: null
    }
  } catch (err) {
    const errors = err.details.map(err => ({ type: err.message }))
    return {
      err: errors
    }
  }
}
