const Discord = require("discord.js");

exports.run = async (client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR"))
  if (!message.member.voice.channel) {
    return message.channel.send("Ses kanalında olman lazım!");
  }

  
  let kullanıcı = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if (!kullanıcı) return message.channel.send("**Kullanıcıyı etiketlemelisin.**");

  let rol = message.mentions.roles.first();
  let member = message.guild.member(kullanıcı);

  if (!member.voice.channel) return message.channel.send("Etiketlenen kullanıcı bir ses kanalında değil").then(m => m.delete(5000));

  const voiceChannel = message.member.voice.channel.id;
  if (!voiceChannel) return;
  
  

   
         
           member.voice.setChannel(voiceChannel);
        
        }
    

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["çek2","taşı"],
  permLevel: 0
};
exports.help = {
  name: "çek2",
  description: "çek2",
  usage: "çek2"
};