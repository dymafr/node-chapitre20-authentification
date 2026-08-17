const mongoose = require('mongoose');

exports.clientPromise = mongoose.connect(process.env.MONGO_URL).then( (m) => {
  console.log('connexion ok !');
  return m;
}).catch( err => {
  console.log(err);
})
