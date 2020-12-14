const Discord = require('discord.js');
const data = require('quick.db');
const ms = require('ms');
const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
if(!ayarlar.vmutelog) return;
if(!ayarlar.vmuteyetkili) return;

const errorEmbed = new Discord.MessageEmbed()
.setColor('#00001');
const errorEmbed2 = new Discord.MessageEmbed()
.setTitle('Bir hata oldu!');

if(!message.member.roles.cache.get(ayarlar.vmuteyetkili) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(errorEmbed.setDescription(`${message.guild.roles.cache.get(ayarlar.vmuteyetkili)} | Rolüne sahip olman gerekiyor.`));
if(!args[0]) return message.channel.send(errorEmbed.setDescription(`Bir Kullanıcı Belirt`));

let member;
if(message.mentions.members.first()) {
member = message.mentions.members.first();
} else if(args[0]) {
member = message.guild.members.cache.get(args[0]);
if(!member) return message.channel.send( errorEmbed
.setDescription(`Bir Kullanıcı Belirt.`));
}

if(message.author.id === member.id) return message.channel.send(new Discord.MessageEmbed().setColor('#9c5cb2').setTitle('Agaa beeeeeeeee!').setDescription(`O kadar yürekli olamazsın.. 🙄`))

if(!args[1]) return message.channel.send(errorEmbed
.setDescription(`Bir Süre Belirt 
Örnek: !vmute @etiket 1m Küfür`));

let cooldown = ms(args[1]);
let reason;
if(args[2]) reason = args[2];
if(!args[2]) reason = 'Belirtilmemiş';

message.channel.send(`<:muted:787798513257807933> <@!${member.id}> ${args[1]} dakika boyunca ses kanallarında susturuldu.`)
message.guild.channels.cache.get(ayarlar.vmutelog).send(new Discord.MessageEmbed()
.setColor('#00001')
.setAuthor(message.author.tag ,message.author.avatarURL)
.setDescription(`<@!${member.id}> (\`${member.id}\`)  üyesi ses kanallarında susturuldu

• Mute Atılma Sebebi: \`${reason}\`

• Mute Süresi: \`${args[1]}\``));
member.voice.setMute(true);

setTimeout(() => {

message.guild.channels.cache.get(ayarlar.vmutelog).send(new Discord.MessageEmbed()
.setColor('#00001')
.setAuthor(message.author.tag ,message.author.avatarURL)
.setDescription(`<@!${member.id}> (\`${member.id}\`)   üyesinin ses kanallarında bulunan susturulması kaldırıldı.

• Mute Atılma Sebebi: \`${reason}\`

• Mute Süresi: \`${args[1]}\``))
member.voice.setMute(false);
}, cooldown);

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["vmute","voicemute","sesmute"],
  permLevel: 0
}

exports.help = {
  name: 'vmute'
};