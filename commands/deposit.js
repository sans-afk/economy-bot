const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('s!'))return;  

  let user = message.author;

  let member = db.fetch(`money_${message.guild.id}_${user.id}`)
  let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
    let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)

    let embedbank = new Discord.RichEmbed()
    .setColor('#FFFFFF')
    .setDescription(":cross: You don't have any money to deposit")

    if(money === 0) return message.channel.send(embedbank)

    db.add(`bank_${message.guild.id}_${user.id}`, money)
    db.subtract(`money_${message.guild.id}_${user.id}`, money)
    let embed5 = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`:white_check_mark:  You have deposited all your coins into your bank`);
  message.channel.send(embed5)
  
  } else {
  
  let embed2 = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`:cross: Specify an amount to deposit`);
  
  if (!args[0]) {
      return message.channel.send(embed2)
      .catch(err => console.log(err))
  }
  let embed3 = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`:cross: You can't deposit negative money`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`:cross: You don't have that much money`);

  if (member < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`:white_check_mark:  You have deposited ${args[0]} coins into your bank`);

  message.channel.send(embed5)
  db.add(`bank_${message.guild.id}_${user.id}`, args[0])
  db.subtract(`money_${message.guild.id}_${user.id}`, args[0])
  }
}
module.exports.help = {
  name:"deposit",
  aliases: ["dep"]
}