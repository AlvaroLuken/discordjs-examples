require('dotenv').config();
const express = require('express');
const axios = require('axios');
const url = require('url');

const PORT = process.env.PORT || 3003;

async function main() {

  const app = express();

  app.get('/api/guilds/add/channel', async (req, res) => {
    console.log(req.query);
    try {
      const formData = new url.URLSearchParams({
        name: "The-Dinosaur-Channel"
      });
      const response = await axios.post('https://discord.com/api/v8/guilds/897146233238478929/channels', 
        {
          "name": "DINOSAURS",
        },
        {  
          headers: {
            Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
          },
        });
      res.send(response.data);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  });

  app.listen(PORT, () => console.log(`Running on Port ${PORT}`));

}



main();