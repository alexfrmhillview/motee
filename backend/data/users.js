import bcrypt from 'bcryptjs';


const users = [ 
    {
        name: 'Admin User',
        email: 'admin@email.com',   
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Alex Singh',
        email: 'alexsingh@emaill.com',   
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'John Doe',
        email: 'john@email.com',   
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    }

];

export default users;