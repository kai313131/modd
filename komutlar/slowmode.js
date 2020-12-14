const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu Komutu Kullanmak İçin Yeterli Yetkin Yok!`)
if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.MessageEmbed()
                .setDescription(`Doğru Kullanım: \`!slowmode <sure>\``)
                .setColor('RANDOM')
                .setTimestamp()
            message.channel.send({embed})
            return
          }
if (limit > 9999999999) {
    return message.channel.send(new Discord.MessageEmbed().setDescription(" Süre Limiti Makisimum **9999999999** Saniye Olabilir!").setColor('RANDOM'));
}
    message.channel.send(new Discord.MessageEmbed().setDescription(`Yavaş Mod **${limit}** Saniye Olarak Ayarlandı!`).setColor('RANDOM')).then(msg => msg.delete(5000));
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod'],
  permLevel: 0,
};

exports.help = {
  name: 'slow-mode',
  description: 'Sohbete yazma sınır (süre) ekler.',
  usage: 'slow-mode [1/9999999999',
}