const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
    exports.run = async (client, message, args, level) => {
      if(!message.member.roles.cache.has(ayarlar.banyetkili) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`);
    let user = args[0];
    if (isNaN(user)) return message.reply('Bir kullanıcı **İD** girmelisiniz!');
    const sebep = args.splice(1, args.length).join(' ') || `Sebebi yok!`;
    message.guild.members.ban(user, sebep+" | Yetkili : "+message.author.tag).then(() => {
        message.channel.send(`\`${user}\`, ${sebep} nedeniyle **Banlandı!**`);
            
  })
            .catch((err) => {
                console.log(err);
            }); 
    
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["idban","ıdban"],
    permLevel: 0,
    kategori : 'moderasyon'
};
exports.help = {
    name: 'forceban',
    usage: 'forceban '
};