const Router = require('express')
const messages = require('@controllers/messagesController')

const router = Router()

router.get('/messages', messages.getAll)
router.post('/messages', messages.create)
router.delete('/messages/:id', messages.destroy)

router.get('/health', (_req, res) => {
  res.send('ok')
})

module.exports = router
