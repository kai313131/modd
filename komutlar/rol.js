const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
  let sunucu = client.guilds.cache.get("727943516411396129")
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  let kullanıcı = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
  const vip = "787675337684156439";
  
  if(args[0] === 'vip'){
    message.guild.member(kullanıcı).roles.add(vip)
    const embed = new Discord.MessageEmbed()
    .setDescription(`<@${kullanıcı.id}> Adlı Kullanıcıya <@&787675337684156439> Rolü Verildi. `)
    message.channel.send(embed)
  }
  
  };
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rol'],
  permLevel: 0
};
exports.help = {
  name: 'rol',
  description: 'Belirttiğiniz kullanıcıya rol verir.',
  usage: 'rolver vip <@kullanıcı>'
};
