const express = require("express");
const path = require("path");
const cookieSession = require("cookie-session");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const PORT = process.env.PORT || 1000;

const app = express();

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.use(
    cookieSession({
        name: "session",
        keys: [ process.env.cookieKey ],
        maxAge: 24 * 60 * 60 * 1000,
    }),
);

app.get("/", (req, res, next) => {
    res.render("layouts/home", {
        title: "เชื่อมต่อ ช่วยเหลือ เพื่อคนไทยสู้ภัยโควิด"
    });
});

app.get("/otp", (req, res, next) => {
    res.render("layouts/otp", {
        title: "ลงทะเบียนรับวัคซีนโควิด-19 กับ เอไอเอส"
    });
});

app.get("/data", (req, res, next) => {
    res.render("layouts/data", {
        title: "ลงทะเบียนรับวัคซีนโควิด-19 กับ เอไอเอส"
    });
});


app.get("/thankyou", (req, res, next) => {
    res.render("layouts/thankyou", {
        title: "ลงทะเบียนรับวัคซีนโควิด-19 กับ เอไอเอส"
    });
});

app.post("/next", async (req, res, next) => {
    const response = await axios({
        method: "POST",
        url: "http://localhost:5000/users/insert",
        data: {
            "citizen_id": req.body.citizen_id,
            "title": req.body.title,
            "first_name": req.body.first_name,
            "last_name": req.body.last_name,
            "birth_date": req.body.birth_date,
            "tel": req.body.tel,
            "line_id": req.body.line_id,
            "email": req.body.email,
            "home_number": req.body.home_number,
            "home_village": req.body.home_village,
            "tower": req.body.tower,
            "road": req.body.road,
            "alley": req.body.alley,
            "postal_code": req.body.postal_code,
            "vaccine_date": "test",
            "vaccine_time": "test",
        }
    })
    res.render("layouts/summary", {
        title: "ลงทะเบียนรับวัคซีนโควิด-19 กับ เอไอเอส"
    });
});

app.get("/logout", (req, res) => {
    req.session = null;
    res.redirect("/");
});

app.listen(PORT, () => {
    console.log("Running on PORT:" + PORT);
});