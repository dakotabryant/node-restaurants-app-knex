const express = require('express');
const bodyParser = require('body-parser');

const knex = require('knex')({
  client: 'pg',
  connection: {
    database: 'dev-restaurants-app'
  },
});

const app = express();
app.use(bodyParser.json());

app.get('/restaurants', (req, res) => {

  knex.first('restaurants.id', 'name', 'cuisine', 'borough', 'grades.id', 'grade', 'date as inspectionDate', 'score')
  .select(knex.raw("CONCAT(address_building_number, ' ', address_street, ' ', address_zipcode) as address"))
  .from('restaurants')
  .where('restaurants.id', 1)
  .innerJoin('grades', 'restaurants.id', 'grades.restaurant_id')
  .orderBy('date', 'desc')
  .limit(1)
  .then(results => res.json(results));

});
app.get('/restaurants/:id', (req, res) => {
  knex.select('name', 'cuisine', 'borough')
  .from('restaurants')
  .where('id', req.params.id)
  .limit(1)
  .then(results => res.json(results));
});
const hydrated = {};
people.forEach(row => {
  if (!(row.id in hydrated)) {
    hydrated[row.id] = {
        id: row.id,
        name: row.name,
        age: row.age,
        pets: []
    }
  }
    hydrated[row.id].pets.push({
      name: row.petName,
      type: row.petType
    });
  });

const restaurantHydrated = {};
restaurants.forEach(row => {
  if(!(row.id in restaurantHydrated)) {
    restaurantHydrated[row.id] = {
      id: row.id,
      name: row.name,
      cuisine: row.cuisine,
      borough: row.borough,
      grades: []
    }
  }
  restaurantHydrated[row.id].grades.push({
    gradeId: row.gradeId,
    grade: row.grade,
    score: row.score
  });
})

app.listen(process.env.PORT || 8080);
