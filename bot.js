const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("567744941028147360")
setInterval(function() {
channel.send(`IIkat Gamer no spam plz plz`);
}, 30)
})

client.login(process.env.BOT_TOKEN);