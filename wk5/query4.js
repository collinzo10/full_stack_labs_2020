db.getCollection('Restaurants').find(
{ "cuisine": "Japanese" },
{ "cuisine":1, "name":1}
)