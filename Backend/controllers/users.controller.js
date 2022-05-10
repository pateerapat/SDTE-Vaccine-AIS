const { query } = require("../core/connect");

const bcrypt = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");

module.exports = {
    insertController: async (req, res, next) => {
        try {
            const sql = "INSERT INTO `users` (`citizen_id`, `title`, `first_name`, `last_name`, `birth_date`, `tel`, `line_id`, `email`, `home_number`, `home_village`, `tower`, `road`, `alley`, `postal_code`, `vaccine_date`, `vaccine_time`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            const values = [
                req.body.citizen_id, 
                req.body.title, 
                req.body.first_name, 
                req.body.last_name, 
                req.body.birth_date, 
                req.body.tel, 
                req.body.line_id, 
                req.body.email, 
                req.body.home_number, 
                req.body.home_village, 
                req.body.tower, 
                req.body.road, 
                req.body.alley, 
                req.body.postal_code,
                req.body.vaccine_date, 
                req.body.vaccine_time
            ];
            const response = await query(sql, values);

            res.status(200).json(response);
            res.end();
        } catch (err) {
            next(err);
        };
    },
};