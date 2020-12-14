const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let guild = "787331009392803851";
    const say = "!say";
    const id = message.author.id;

  
    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  var msg = message;
  var üyesayısı = msg.guild.members.cache.size.toString().replace(/ /g, "    ")
  var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
'0': `<a:0:787416398493122562>`,
    '1': `<a:1:787416398069497906>`,
    '2': `<a:2:787416398620131349>`,
    '3': `<a:3:787416398628257822>`,
    '4': `<a:4:787416398187331616>`,                       
    '5': `<a:5:787416398405042216>`,
    '6': `<a:6:787416398523662387>`,
    '7': `<a:7:787416398329544784>`,
    '8': `<a:8:787416399084781590>`,
    '9': `<a:9:787416398766014495>`}[d];
      })
    }/////////////////////////////
  var sessayı = count.toString().replace(/ /g, "    ")
  var üs2 = sessayı.match(/([0-9])/g)
  sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    sessayı = sessayı.replace(/([0-9])/g, d => {
      return {
'0': `<a:0:787416398493122562>`,
    '1': `<a:1:787416398069497906>`,
    '2': `<a:2:787416398620131349>`,
    '3': `<a:3:787416398628257822>`,
    '4': `<a:4:787416398187331616>`,                       
    '5': `<a:5:787416398405042216>`,
    '6': `<a:6:787416398523662387>`,
    '7': `<a:7:787416398329544784>`,
    '8': `<a:8:787416399084781590>`,
    '9': `<a:9:787416398766014495>`}[d];
      })
    }
  let boost = '779366405367529543';
  var booster = message.guild.members.cache.filter(r => r.roles.cache.has(boost)).size.toString().replace(/ /g, "    ");
  var üs3 = booster.match(/([0-9])/g)
  booster = booster.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs3) {
    booster = booster.replace(/([0-9])/g, d => {
      return {
'0': `<a:0:787416398493122562>`,
    '1': `<a:1:787416398069497906>`,
    '2': `<a:2:787416398620131349>`,
    '3': `<a:3:787416398628257822>`,
    '4': `<a:4:787416398187331616>`,                       
    '5': `<a:5:787416398405042216>`,
    '6': `<a:6:787416398523662387>`,
    '7': `<a:7:787416398329544784>`,
    '8': `<a:8:787416399084781590>`,
    '9': `<a:9:787416398766014495>`}[d];
      })
    }
  
  //////////////////////////////////////////
  var onlayn = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
  var üs4= onlayn.match(/([0-9])/g)
  onlayn = onlayn.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs4) {
    onlayn = onlayn.replace(/([0-9])/g, d => {
      return {
'0': `<a:0:787416398493122562>`,
    '1': `<a:1:787416398069497906>`,
    '2': `<a:2:787416398620131349>`,
    '3': `<a:3:787416398628257822>`,
    '4': `<a:4_:787347165503684619>`,                       
    '5': `<a:5:787416398405042216>`,
    '6': `<a:6:787416398523662387>`,
    '7': `<a:7:787416398329544784>`,
    '8': `<a:8:787416399084781590>`,
    '9': `<a:9:787416398766014495>`}[d];
      })
    }
  
  /////////////////////////////////////////
  var tagdakiler = 0;
  let tag = '⸸';
  message.guild.members.cache.forEach(member => {
    if(member.user.username.includes(tag))
    {
      tagdakiler = tagdakiler+1
    }  
  })
  var tagdakilerr = tagdakiler.toString().replace(/ /g, "    ")
  var üs3 = tagdakilerr.match(/([0-9])/g)
  tagdakilerr = tagdakilerr.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs3) {
    tagdakilerr = tagdakilerr.replace(/([0-9])/g, d => {
      return {
'0': `<a:0:787416398493122562>`,
    '1': `<a:1:787416398069497906>`,
    '2': `<a:2:787416398620131349>`,
    '3': `<a:3:787416398628257822>`,
    '4': `<a:4:787416398187331616>`,                       
    '5': `<a:5:787416398405042216>`,
    '6': `<a:6:787416398523662387>`,
    '7': `<a:7:787416398329544784>`,
    '8': `<a:8:787416399084781590>`,
    '9': `<a:9:787416398766014495>`}[d];
      })
    }
	 //////////////////////////////////////////
  //////////////////////////////////////////
  var onlayn = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
  var üs4= onlayn.match(/([0-9])/g)
  onlayn = onlayn.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs4) {
    onlayn = onlayn.replace(/([0-9])/g, d => {
      return {
'0': `<a:0:787416398493122562>`,
    '1': `<a:1:787416398069497906>`,
    '2': `<a:2:787416398620131349>`,
    '3': `<a:3:787416398628257822>`,
    '4': `<a:4:787416398187331616>`,                       
    '5': `<a:5:787416398405042216>`,
    '6': `<a:6:787416398523662387>`,
    '7': `<a:7:787416398329544784>`,
    '8': `<a:8:787416399084781590>`,
    '9': `<a:9:787416398766014495>`}[d];
      })
    }
  
  /////////////////////////////////////////////////////
  

 const embed1 = new Discord.MessageEmbed()
 .setColor('000000')
 .setDescription(`**Sunucumuzda Toplam ** ${üyesayısı} **Üye bulunmakta.** \n\n **Sunucumuzda Toplam** ${onlayn} **Çevrimiçi üye bulunmakta.** \n\n **Ses kanallarında Toplam** ${sessayı} **Üye bulunmakta.** \n\n **Tagımızda Toplam ** ${tagdakilerr} **Kişi bulunmakta.** `)
 .setFooter(`Komutu Kullanan : ${message.author.username}`)
 
  message.channel.send(embed1).then(message => message.delete({ timeout: 10000})).then(message.delete({ timeout: 10000}))
  
     const hata = new Discord.MessageEmbed()
    .setColor('000000')
    .setAuthor(`Hata`)
    .setDescription(`**Bu komutu kullanmaya hakkınız yoktur!**`)
 
  
  
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["say"],
  permLevel: 0
};
exports.help = {
  name: 'say'
}