const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = (client, message, args) => {
 const unmute = message.guild.roles.cache.get(ayarlar.muterol);//üye rol
  if(!message.member.hasPermission("ADMINISTRATOR") && !message.member.roles.cache.has(ayarlar.muteyetkili)) { //kayıt-sorumlusu rolü
    return message.channel.send("**Bu İşlemi Gerçekleştirmek İçin Yönetici Yetkisine Sahip Olman Gerekli!**");
  } else {
    let vUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
      if(!vUser) return message.channel.send("Bir Kullanıcı Veya ID Girin")
    const c = message.guild.member(vUser)
    c.roles.remove(unmute)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["unmute"],
  permLevel: 0
};
exports.help = {
  name: "unmute",
  description: "unmute",
  usage: "unmute"
};