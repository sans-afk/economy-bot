const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('s!'))return;  


    let embed = new Discord.RichEmbed()
    .setDescription("**VIP Ranks**\n\nBronze: 3500 Coins [s!buy bronze]\n\n**Lifestyle Items**\n\nFresh Nikes: 600 [s!buy nikes]\nCar: 800 [s!buy car]\nMansion: 1200 [s!buy mansion]")
    .setColor("#FFFFFF")
    message.channel.send(embed)




}


module.exports.help = {
  name:"store",
  aliases: ["st"]
}