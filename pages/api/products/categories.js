import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  const categories = ['Jerseys', 'Hooddies', 'Track Suit'];
  res.send(categories);
});

export default handler;
