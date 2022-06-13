import bcryptjs from "bcryptjs";

const users = [
    {
        name : "Admin",
        email : "pushkars423@gmail.com",
        password : bcryptjs.hashSync('72087', 3),
        isAdmin : true
    },
    {
        name : "Tony Fadell",
        email : "tony@apple.com",
        password : bcryptjs.hashSync('72087', 3),
    },
    {
        name : "Sahil Lavingya",
        email : "shl@gumroad.com",
        password : bcryptjs.hashSync('72087', 3)
    }
];

export default users;