const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
exports.run = (client, message, args) => {
  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
 message.channel.createOverwrite(every, {
    SEND_MESSAGES: true
  });
  const embed = new Discord.MessageEmbed()
  .setDescription(`Kanal Başarıyla Açıldı`)
  .setFooter(ayarlar.footer)
  message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kilit-aç"],
  kategori: "sohbet",
  permLevel: 3
};

exports.help = {
  name: "sohbet-aç",
  description: "Sohbetinizi kapatmaya yarar işte yaw.",
  usage: "aç"
};