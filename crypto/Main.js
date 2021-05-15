function cryptoPass(password).then(result => {
      hash_saltGet(result.hash, result.salt);
    });
