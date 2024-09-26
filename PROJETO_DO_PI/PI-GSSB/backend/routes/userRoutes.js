const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Rota de registro
router.post('/register', (req, res) => {
  User.register(req.body, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send('Usuário registrado com sucesso!');
  });
});

// Rota de login
router.post('/login', (req, res) => {
  User.login(req.body.email, req.body.password, (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length > 0) {
      res.status(200).send('Login bem-sucedido!');
    } else {
      res.status(401).send('Email ou senha incorretos.');
    }
  });
});

// Outras rotas para atualização de perfil, etc.

module.exports = router;
