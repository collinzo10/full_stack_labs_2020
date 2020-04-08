db.getCollection('Restaurants').find(
{ "cuisine": { $eq: "Japanese"}},
{ "_id": 0, "cuisines": 1, "name": 1, "city": 1}
).sort({name: -1})