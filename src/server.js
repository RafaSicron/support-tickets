import http from "node:http"

import { jsonHandler } from "./middlewares/jsonHandler.js"
import { routeHandler } from "./middlewares/routeHandler.js"

async function listener (req, resp) {
    await jsonHandler(req, resp)
    routeHandler(req, resp)
}
http.createServer(listener).listen(3333)

