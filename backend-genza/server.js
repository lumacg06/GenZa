const express = require('express');
const cors = require('cors');
const { db } = require('./firebaseConfig');

const app = express();
app.use(cors());
app.use(express.json());

//#region Products

app.get('/products', async (req, res) => {
  try {
    const snapshot = await db.collection('products').get();
    const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/products', async (req, res) => {
  try {
    const product = req.body;
    const docRef = await db.collection('products').add(product);
    res.status(201).json({ id: docRef.id, ...product });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.put('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = req.body;
    await db.collection('products').doc(id).update(product);
    res.status(200).json({ id, ...product });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection('products').doc(id).delete();
    res.status(200).send(`Product with ID ${id} deleted`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//#endregion

//#region Users
app.post('/users', async (req, res) => {
  try {
    const user = req.body;
    const docRef = await db.collection('users').add(user);
    res.status(201).json({ id: docRef.id, ...user });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/users', async (req, res) => {
  try {
    const snapshot = await db.collection('users').get();
    const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.body;
    await db.collection('users').doc(id).update(user);
    res.status(200).json({ id, ...user });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection('users').doc(id).delete();
    res.status(200).send(`User with ID ${id} deleted`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//#endregion

//#region Promotions
app.post('/promotions', async (req, res) => {
  try {
    const promotion = req.body;
    const docRef = await db.collection('promotions').add(promotion);
    res.status(201).json({ id: docRef.id, ...promotion });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/promotions', async (req, res) => {
  try {
    const snapshot = await db.collection('promotions').get();
    const promotions = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(promotions);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.put('/promotions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const promotion = req.body;
    await db.collection('promotions').doc(id).update(promotion);
    res.status(200).json({ id, ...promotion });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete('/promotions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection('promotions').doc(id).delete();
    res.status(200).send(`Promotion with ID ${id} deleted`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//#endregion

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});