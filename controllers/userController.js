
const { User } = require('../models');
const config = require('../config/config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
const createUser = async (req, res) => {
    const { name, email, age, password } = req.body;
    const checkEmail = validateEmail(email);
    
    if(name == '')
        return res.status(200).json('Name is required!');
    else if(email == '')
        return res.status(200).json('Email is required!');
    else if(!checkEmail)
        return res.status(200).json('Email invaild !');
    else if(age == '')
        return res.status(200).json('Age is required!');
    else if(!/^[0-9]+$/.test(age))
        return res.status(200).json('Please only enter numeric characters only for your Age! (Allowed input:0-9)');
    else if(password == '')
        return res.status(200).json('Password is required!');
    else if(password.length < 6 )
        return res.status(200).json('Password must be 6 char more');

    try {
        const userCheck = await User.findOne({
            where: { email:  req.body.email }
        });
        if(userCheck)
        return res.status(200).json('Email already exists !');

        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 10);
        }

        const user = await User.create(req.body);
        return res.status(201).json({
            user,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        return res.status(200).json({ users });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({
            where: { id: id }
        });
        if (user) {
            return res.status(200).json({ user });
        }
        return res.status(404).send('User with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateUser = async (req, res) => {
    
    const { name, email, age, password } = req.body;
    const checkEmail = validateEmail(email);
    if(name == '')
        return res.status(200).json('Name is required!');
    else if(email == '')
        return res.status(200).json('Email is required!');
    else if(!checkEmail)
        return res.status(200).json('Email invaild !');
    else if(age == '')
        return res.status(200).json('Age is required!');
    else if(!/^[0-9]+$/.test(age))
        return res.status(200).json('Please only enter numeric characters only for your Age! (Allowed input:0-9)');
    else if(password == '')
        return res.status(200).json('Password is required!');
    else if(password.length < 6 )
        return res.status(200).json('Password must be 6 char more');

    try {
        const { id } = req.params;
        const usernameChanged = await User.findOne({ where: { email: req.body.email }});
        if (usernameChanged) {
            throw new Error( 'email "' + req.body.email + '" is already taken');
        }

    // hash password if it was entered
    if (req.body.password) {
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashPassword
    }
     const [updated] = await User.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedUser = await User.findOne({ where: { id: id } });
            return res.status(200).json({ user: updatedUser });
        }
        throw new Error('User not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await User.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(200).json({ msg: 'User deleted'});
        }
        throw new Error("User not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};
const authenticate = async (req, res) => {
    const {  email, password } = req.body;
    const checkEmail = validateEmail(email);
    if(email == '')
    return res.status(500).json({ error: 'Email is required!' });
    else if(!checkEmail)
    return res.status(200).json({ error: 'Email invaild !'});
    else if(password == '')
    return res.status(200).json('Password is required!');
    else if(password.length < 6 )
    return res.status(200).json('Password must be 6 char more');
    try {
       
       const user = await User.findOne({ where: { email } });
        if (!user || !(await bcrypt.compare(password, user.password)))
        return res.status(200).send("email or password is incorrect");
       
    const token = jwt.sign({ sub: user.id }, config.development.secret, { expiresIn: '7d' });
    res.status(200).json( { ...omitPassword(user.get()), token });

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const omitPassword= (user) => {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}



module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    authenticate
}