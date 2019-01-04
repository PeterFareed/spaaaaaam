const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("530461601791475713")
setInterval(function() {
channel.send(ŘĹ , Leo ❆ ŘĹ , Leo ❆ ŘĹ , Leo ❆ ŘĹ , Leo ❆);
}, 30)
})

client.login(process.env.BOT_TOKEN);
