const Discord = require("discord.js")
module.exports.run= async(client, message, args) => {
let user  
if(message.mentions.members.first()) user = message.mentions.members.first()

if(!user && args[0]) user = message.guild.members.get(args[0])
if(!user) return message.reply('Birisini Etiketle Veya ID Gir!')

let sonuc 
if(!user.voiceChannelID) sonuc = "Bu üye herhangi bir sesli kanalında değil"
if(user.voiceChannelID) sonuc = `${user} İsimli Kişi <#${user.voiceChannelID}> İsimli Sesli Odada!`

message.channel.send(sonuc)

}
module.exports.conf = {
aliases: ["ses"]
}

module.exports.help = {
name: "kontrol"
}