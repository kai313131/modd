const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  if(message.author.bot || message.channel.type === "dm") return;
  const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0;
   
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
      const emoji = client.emojis.cache.find(emoji => emoji.name === "onay");
const arrifentembed = new Discord.MessageEmbed()
.setColor("BLUE")
.setDescription(`Ses Kanallarında Toplam **${count}** Üye Bulunmaktadır.`)
.setThumbnail("https://images-ext-2.discordapp.net/external/qSYAi3TrLZ6Yba7_9d9Lhqt7EGa-Cc_9VRzhcPtxfNE/https/media.giphy.com/media/kFNMddkQQKds2mVMbI/giphy.gif") 
.setTimestamp()
  message.channel.send(arrifentembed).then(message => message.delete({ timeout: 10000})).then(message.delete({ timeout: 10000}))
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sesli"],
  permLevel: 0
};

exports.help = {
  name: 'seslisay',
  description: 'kullanıcıyı susturur.',
  usage: 'seslisay'
};