const Discord = require('discord.js');

exports.run = function(client, message, args) {
  if(!message.member.hasPermission('ADMINISTRATOR')) {

  }
  var kanal = client.channels.cache.get('776034732227035156')
  let messagecount = parseInt(args.join(' '));
  if (messagecount>100){message.channel.bulkDelete(100)}else{message.channel.bulkDelete(messagecount)}
  let messagecount1 = messagecount-100
  if (messagecount1>100){message.channel.bulkDelete(100)}else{message.channel.bulkDelete(messagecount1)}
  let messagecount2 = messagecount1-100
  if (messagecount2>100){message.channel.bulkDelete(100)}else{message.channel.bulkDelete(messagecount2)}
  let messagecount3 = messagecount2-100
  if (messagecount3>100){message.channel.bulkDelete(100)}else{message.channel.bulkDelete(messagecount3)}
  let messagecount4 = messagecount3-100
  if (messagecount4>100){message.channel.bulkDelete(100)}else{message.channel.bulkDelete(messagecount4)}
  let messagecount5 = messagecount4-100
  if (messagecount5>100){message.channel.bulkDelete(100)}else{message.channel.bulkDelete(messagecount5)}
  let messagecount6 = messagecount5-100
  if (messagecount6>100){message.channel.bulkDelete(100)}else{message.channel.bulkDelete(messagecount6)}
  let messagecount7 = messagecount6-100
  if (messagecount7>100){message.channel.bulkDelete(100)}else{message.channel.bulkDelete(messagecount7)}
  let messagecount8 = messagecount7-100
  if (messagecount8>100){message.channel.bulkDelete(100)}else{message.channel.bulkDelete(messagecount8)}
  let messagecount9 = messagecount8-100
  if (messagecount9>100){message.channel.bulkDelete(100)}else{message.channel.bulkDelete(messagecount9)}
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 0
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'temizle <temizlenecek mesaj sayısı>'
};