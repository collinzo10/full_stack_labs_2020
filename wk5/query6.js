db.getCollection('Restaurants').find(
{ "cuisine": { $eq: "Japanese"}},
{ "_id": 1, "cuisines": 1, "name": 1, "city": 1, "restaurant_id": 1}
).sort({name: 1})