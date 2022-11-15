const { check } = require('express-validator');

module.exports = [
    check('email')
        .exists()
        .withMessage("Email is required.")
        .notEmpty()
        .withMessage("Email cannot be empty.")
        .custom((value, { req }) => value.includes('@') && value.includes('.com'))  
        .withMessage("Email is invalid."),

    check('password')
        .exists()
        .withMessage("Password is required.")
        .notEmpty()
        .withMessage("Password cannot be empty.")
];