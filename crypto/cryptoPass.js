return new Promise((resolve, reject) => {
        const salt = crypto.randomBytes(32).toString('base64');
        crypto.pbkdf2(password, salt, 3, 64, 'sha512', (err, hash) => {
            if(err){
                reject(err);
            } else{
                resolve({
                    hash: hash.toString('base64'),
                    salt: salt
                });
            }
        });
    });
