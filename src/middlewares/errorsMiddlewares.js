module.exports = {
  errorsMiddleware(err, req, res, next) {
    const nameVerify = err.name

    if (
      nameVerify.includes('user') ||
      nameVerify.includes('image')
      ) {
      return res.status(err.statusCode).json({
        message: err.message
      })
    }


    if (err.code === '22P02' && err.message.includes('uuid')) {
      return res.status(400).json({
        message: 'uuid format invalid'
      })
    }
  
    return res.status(500).json({
      status: 'error',
      message: 'Internal server error',
      stack: err.stack
    })
  }
}