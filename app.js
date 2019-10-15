const addUser = async (user) => {
    try {
        const queryStringAdd = `INSERT INTO users(users) VALUES ("${user}")`;
        let data = await promisifiedQuery (queryStringAdd);
        return(data);
    }   catch (error) {
        console.log (error.sqlMessage);
        
    }
};
    