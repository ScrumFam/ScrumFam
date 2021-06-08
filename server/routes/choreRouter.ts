import Router from 'express'
const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({})
})

router.post('/', (req, res) => {
  res.status(200).json({})
})

module.exports = router;