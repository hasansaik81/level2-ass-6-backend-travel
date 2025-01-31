import express from "express"
import { orderController } from "./order.controller";


const router=express.Router()

router.post("/",orderController.createOrder);

router.get("/",orderController.searchOrGetAllOrders)

export const orderRoute=router

