const Rochelle = require("discord.js")

exports.run = async (client, message, args) => {
    if (!message.member.voice.channel) return message.channel.send("Bir ses kanalında olman gerek")
    let rochelle1 = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!rochelle1.voice.channel) return message.channel.send("Bu kullanıcı herhangi bir ses kanalında değil")
    if (!rochelle1) return message.channel.send("Kullanıcı belirtmedin")
    if (message.member.voice.channel.id === rochelle1.voice.channel.id) return message.channel.send("Zaten aynı kanaldasınız")

    const filter = (reaction, user) => {
        return ['✅', '❌'].includes(reaction.emoji.name) && user.id === rochelle1.id;
    };//// üst isim yazılak    return ['onay', 'x_'].includes(reaction.emoji.name) && user.id === kullanici.id; emoji ismi 
    let rochelle = new Rochelle.MessageEmbed()
        .setColor("BLUE")
        .setDescription(`${rochelle1}, ${message.author}  ${rochelle1.voice.channel.name} odasına gelmek istiyor. Kabul ediyormusun?`)
            .setFooter('Git Komutu Kullanıldı') 

    let mesaj = await message.channel.send(rochelle)
    await mesaj.react("✅") /// emoji id 
    await mesaj.react("❌")/// emoji id 
    mesaj.awaitReactions(filter, {
        max: 1,
        time: 30000,
        errors: ['time']
    }).then(collected => {
        const reaction = collected.first();
        if (reaction.emoji.name === '✅') {  /// emoji ismi 
            let rochelle2 = new Rochelle.MessageEmbed()
                .setColor("GREEN")
                .setDescription(`${rochelle1} olduğu odaya çekildi`)
            message.channel.send(rochelle2).then(msg => msg.delete(5000));
           message.member.voice.setChannel(rochelle1.voice.channel)
        } else {
            let rochelle = new Rochelle.MessageEmbed()
                .setColor("RED")
                .setDescription(`${rochelle1} odaya çekilme teklifini reddetti`)
            message.channel.send(rochelle).then(msg => msg.delete(5000));
        }
    })
  
}

exports.conf = {
    enabled: true,
    aliases: ['git'],
    permLevel: 0
};

exports.help = {
    name: "git",
    description: "Etiketlediğiniz kullanıcıyı odaya çeker",
    usage: "git @kullanıcı"

};