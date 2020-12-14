const Discord = require("discord.js");
const moment = require("moment");
const talkedRecently = new Set();
const ayarlar = require("../ayarlar.json");
const db = require("quick.db");
const ms = require("ms");
const { parseZone } = require("moment");
const prefix = ayarlar.Prefix

module.exports.run = async(client, message, args)  => {

  
 if(!message.member.roles.cache.get(ayarlar.banyetkili) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta.')

 if(!args[0]) return message.channel.send('Bir Kullanıcı Etiketle!')

let reason = args.slice(1).join(' ')
let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.guild.members.find(u => u.user.username.toLowerCase().includes(args[0].toLowerCase())).user
if(!reason) return message.channel.send('Bir Sebep Belirt.')
if(!user) return message.channel.send('Belirtilen Kullanıcı Sunucuda Bulunmamakta.')
let member = message.guild.member(user)
if(!member) return message.channel.send('Belirtilen Kullanıcı Sunucuda Bulunmamakta.')
if(member.hasPermission("ADMINISTRATOR")) return message.channel.send('Yetkilileri Banlayamam!')
  member.ban({days: 7, reason: reason})

         const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL ({ dynamic : true }))
        .setColor(`GREEN`)
        .setDescription(`<@${member.id}> Adlı Kullanıcı <@!${message.author.id}> Yetkilisi Tarafından **${reason}** Sebebiyle Yasaklandı!`)
        message.channel.send(embed)
  
  const log = new Discord.MessageEmbed()
  .setTitle(`Bir Kullanıcı Banlandı!`)
  .setDescription(`**Banlanan:** <@!${member.id}> 
  **Yetkili:** <@!${message.author.id}> 
**Sebep:** ${reason}`)
  client.channels.cache.get(ayarlar.banlog).send(log)

};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["ban", "yasakla","sik"],
    PermLvl: 0,
}

exports.help = {
  name: 'ban'
};