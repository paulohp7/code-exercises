const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


app.get('/ping', function (req, res) {
  res.status(200).json({ "message": 'pong' });
});

app.post('/hello', function (req, res) {
    const { name } = req.body;
    res.status(201).json({ message:`Hello ${name}!` });
  });

// app.get('/recipes/pesquisar', function (req, res) {
//   const { name, maxPrice } = req.query;
//   const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.preco < parseInt(maxPrice));
//   res.status(200).json(filteredRecipes);
// });

// app.get('/recipes/:id', function (req, res) {
//   const { id } = req.params;
//   const recipe = recipes.find((r) => r.id === parseInt(id));
//   if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

//   res.status(200).json(recipe);
// });



// app.put('/recipes/:id', function (req, res) {
//   const { id } = req.params;
//   const { name, price } = req.body;
//   const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

//   if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

//   recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

//   res.status(204).end();
// });

// app.delete('/recipes/:id', function (req, res) {
//   const { id } = req.params;
//   const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

//   if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

//   recipes.splice(recipeIndex, 1);

//   res.status(204).end();
// });

// app.all('*', function (req, res) {
//     return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
// });

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});