const express = require('express');
const { Book } = require('../models');
const router = express.Router();

router.get('/', async (_req, res) => {
    try {
      const books = await Book.findAll();
  
      return res.status(200).json(books);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    };
  });

router.get('/order', async (_req, res) => {
    try {
      const books = await Book.findAll({ order: [['title', 'ASC'], ['created_at', 'DESC']]});
  
      return res.status(200).json(books);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    };
});

router.get('/search', async (req, res) => {
    try {
      const { author } = req.query;
      console.log(author);
      const book = await Book.findAll({ where: { author }});
  
      if (!book) return res.status(404).json({ message: 'Busca por livro não encontrado' });
  
      return res.status(200).json(book);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    }
  });

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await Book.create({ title, author, pageQuantity });

    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;

    const [updateBook] = await Book.update(
        { title, author, pageQuantity },
        { where: { id } },
    );

    if(!updateBook) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json({ message: 'Livro atualizado com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Book.destroy({ where: { id } });

    return res.status(200).json({ message: 'Livro excluído com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;