db.getCollection('Restaurants').find(
{ "cuisine": "Japanese" },
{ "cuisine":1, "name":1}
).sort({name: -1})