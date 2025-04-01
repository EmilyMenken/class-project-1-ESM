import express from "express";

const router = express.Router();

router.get("/name", (req,res) => {

res.status(200).json({

fName: "Emily",
lName: "Menken",
middle: "M.",
title: "Ms.",
nickname: "Emi"
})

});

export default router;