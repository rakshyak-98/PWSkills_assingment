import bcrypt from 'bcrypt'

export const validateLoginBody = (req, res, next) => {
    const validKeyList = ["email", "password"];
    const errorKeys = [];
    for (const key of validKeyList) {
        if (!Object.hasOwn(req.body, key)) {
            errorKeys.push(key);
        }
    }
    if (errorKeys.length) {
        res
            .status(400)
            .json({ msg: "All input field are required", error: errorKeys });
    } else {
        next();
    }
}

export const validateCreateUserBody = (req, res, next) => {
    const validKeyList = ["name", "email", "password"];
    const errorKeys = [];
    for (const key of validKeyList) {
        if (!Object.hasOwn(req.body, key)) {
            errorKeys.push(key);
        }
    }
    if (errorKeys.length) {
        res
            .status(400)
            .json({ msg: "All input field are required", error: errorKeys });
    } else {
        next();
    }
}

export const encryptPassword = (req, res, next) => {
    const salt = bcrypt.genSaltSync(10);
    req.body["password"] = bcrypt.hashSync(req.body["password"], salt);
    next();
}