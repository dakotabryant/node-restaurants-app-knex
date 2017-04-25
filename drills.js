// clear the console before each run
process.stdout.write('\033c');

// Require Knex and make connection
const knex = require('knex')({
  client: 'pg',
  connection: {
    database: 'dev-restaurants-app'
  },
});

// If you're using ElephantSQL then the connection will look like this
/*
const knex = require('knex')({
  client: 'pg',
  connection:'postgres://USERNAME:PASSWORD@stampy.db.elephantsql.com:5432/USERNAME'
}
*/

// Sample select
// knex.select('id', 'name', 'borough', 'cuisine')
//     .from('restaurants')
//     .then(results => console.log(results));
// knex.select('id', 'name', 'borough', 'cuisine')
//     .from('restaurants')
//     .where('cuisine', 'Italian')
//     .then(results => console.log(results));
// knex.select('id', 'name')
//     .from('restaurants')
//     .where('cuisine', 'Italian')
//     .limit(10)
//     .then(results => console.log(results));
// knex('restaurants')
//     .count()
//     .where('cuisine', 'Thai')
//     .then(results => console.log(results));
// knex('restaurants')
//     .count()
//     .then(results => console.log(results));
// knex('restaurants')
//     .count()
//     .where({cuisine: 'Thai', address_zipcode: '11372'})
//     .then(results => console.log(results));

// knex.select('id', 'name', 'address_zipcode')
//     .from('restaurants').orderBy('name', 'asc')
//     .where('cuisine', 'Italian')
//     .whereIn('address_zipcode', ['10012', '10013', '10014'])
//     .limit(5)
//     .then(results => console.log(results));

// knex('restaurants')
//   .insert({
//     name: 'Byte Cafe',
//     borough: 'Brooklyn',
//     cuisine: 'coffee',
//     address_building_number: '123',
//     address_street: 'Atlantic Avenue',
//     address_zipcode: '11231'})
//  .then(results => console.log(results));

// knex('restaurants')
//     .insert({
//       name: 'Fryte Cafe',
//       borough: 'Manhattan',
//       cuisine: 'coffee',
//       address_building_number: '666',
//       address_street: 'Main St',
//       address_zipcode: '10032'
//     }).returning(['id', 'name'])
//     .then(results => console.log(results));

// knex('restaurants')
//     .insert([{
//       name: 'Bin 707',
//       borough: 'Manhattan',
//       cuisine: 'Americana',
//       address_building_number: '43110',
//       address_street: 'Man',
//       address_zipcode: '10032'
//     },
//     { name: '626 on Rood',
//       borough: 'Brooklyn',
//       cuisine: 'French',
//       address_building_number: '626',
//       address_street: 'Rood',
//       address_zipcode: '10013'
//     },
//     { name: 'Pantussos',
//       borough: 'Queens',
//       cuisine: 'Italian',
//       address_building_number: '207',
//       address_street: 'Horizon',
//       address_zipcode: '10014'
//     }]).returning(['id', 'name'])
//     .then(results => console.log(results));

// knex('restaurants')
//     .where('nyc_restaurant_id', '30191841')
//     .update('name', 'DJ Reynolds Pub and Restaurant')
//     .returning('name')
//     .then(results => console.log(results));

// knex('grades')
//     .where('id', '10')
//     .del()
//     .then(results => console.log(results));

// knex('restaurants')
//     .where({'id': '22'})
//     .del()
//     .then();

