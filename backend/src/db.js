const mariadb = require('mariadb');
const { DB_HOST = '0.0.0.0', DB_MYSQL_USER = 'root', DB_PASSWORD = 'my-secret-pw' } = process.env;
const pool = mariadb.createPool({
     host: DB_HOST,
     user: DB_MYSQL_USER,
     password: DB_PASSWORD,
     connectionLimit: 5
});

module.exports = {
  getConnection: function(){
    return new Promise(function(resolve,reject) {
      pool.getConnection().then(function(connection) {
        console.log('Connected to DB')
        resolve(connection);
      }).catch(function(error) {
        reject(error);
      });
    });
  }
}
