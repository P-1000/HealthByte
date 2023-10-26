import express from "express"
import rateLimit from "express-rate-limit"


const router = express.Router()



router.get('/' , (req,res) => {
    res.send("Auth Routes")
}
)



export default router;