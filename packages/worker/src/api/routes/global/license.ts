import Router from "@koa/router"
import * as controller from "../../controllers/global/license"

const router = new Router()

router
  .post("/api/global/license/activate", controller.activate)
  .post("/api/global/license/refresh", controller.refresh)
  .get("/api/global/license/info", controller.getInfo)
  .get("/api/global/license/usage", controller.getQuotaUsage)

export = router
