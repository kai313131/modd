const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const snekfetch = require('snekfetch');

const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "Paradox Code Pingledi");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(process.env.TOKEN);
//------------------------------AFK-----------------------------//
client.on("message" , async msg => {
  
  if(!msg.guild) return;
  if(msg.content.startsWith(ayarlar.prefix+"afk")) return; 
  
  let afk = msg.mentions.users.first()
  
  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
  
  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
   const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
   if(msg.content.includes(kisi3)){

     
       const embed = new Discord.MessageEmbed()
      .setDescription(`Etiketlediğiniz Kişi AFK \n Sebep: **${sebep}**`)
       msg.channel.send(embed)
      }
 }
  if(msg.author.id === kisi){

       msg.reply(`Afk'lıktan Çıktınız`)
   db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
    msg.member.setNickname(isim)
    
  }
  
});
//------------------------------AFK-----------------------------//
//--------------------------TAG-PAYLAS--------------------//
client.on("message", async msg => {
  let tagpaylas = await db.fetch(`tagpaylas_${msg.guild.id}`);
    if (
      msg.content.toLowerCase() == "tag" ||
      msg.content.toLowerCase() == "!tag" ||
      msg.content.toLowerCase() == ".tag"
    ) {
      try {
        return msg.channel.send("★");
      } catch (err) {
        console.log(err);
      }
    }
  }
);

//--------------------------TAG-PAYLAS--------------------//
//------------------------SA-AS-------------------------//
client.on("message", async msg => {
  let saas = await db.fetch(`saas_{msg.guild.id}`);
    if (
      msg.content.toLowerCase() == "sa" ||
      msg.content.toLowerCase() == "slm" ||
      msg.content.toLowerCase() == "selamın aleyküm"||
      msg.content.toLowerCase() == "selam"||
      msg.content.toLowerCase() == "sea"||
      msg.content.toLowerCase() == "Selamın Aleyküm"
    ) {
      try {
        return msg.reply("**Aleyküm Selam Hoş Geldin.**");
      } catch (err) {
        console.log(err);
      }
    }
  }
);
//------------------------SA-AS-------------------------//
//---------------------TAG-ALANA-ROL------------------//
client.on('userUpdate', async user => {
  let sunucuid = "771518266987249696"; //Buraya sunucunuzun IDsini yazın
  let tag = "★"; //Buraya tagınızı yazın
  let rol = "785241122376384572";//Buraya tag alındığı zaman verilecek rolün IDsini yazın
  let channel = client.guilds.cache.get(sunucuid).channels.cache.find(x => x.name == 'tag-log'); //tagrol-log yerine kendi log kanalınızın ismini yazabilirsiniz
  if (!tag) return;
  if (!rol) return;
  if (!channel) return;
  let member = client.guilds.cache.get(sunucuid).members.cache.get(user.id);
  if (!member) return;
  if (!member.roles.cache.has(rol)) {
    if (member.user.username.includes(tag)) {
      member.roles.add(rol)
      const tagalma = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`**<@${user.id}> .... Ailesine Tagımızı Alarak Katıldı,** ${tag} **Tagını Aldığı için <@&${rol}> Rolünü Aldı.**`)
      .setTimestamp()
      channel.send(tagalma)
    }
  }else{
    if (!member.user.username.includes(tag)) {
      member.roles.remove(rol)
      const tagsilme = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`**<@${user.id}> Adlı Kullanici, ${tag} Tagını Sildiğinden Dolayı <@&${rol}> Rolü Silindi!**`)
      .setTimestamp()
      channel.send(tagsilme)
    }
  }
});
//---------------------TAG-ALANA-ROL------------------//
//--------------------SES-LOG-------------------------//
client.on("voiceStateUpdate", async (thrones, sanal) => {
  let voiceLog = thrones.guild.channels.find(c => c.name === "ses-log");
  if (thrones.voiceChannel === sanal.voiceChannel) return;
  if (thrones.voiceChannel && !sanal.voiceChannel)
    return voiceLog
      .send({
        embed: {
          description:
            "<@" +
            thrones.id +
            "> adlı kullanıcı " +
            thrones.voiceChannel +
            " kanalından çıkış yaptı.",
          color: Math.floor(Math.random() * (0xffffff + 1)),
          timestamp: new Date()
        }
      })
      .catch(console.error);
  if (!thrones.voiceChannel && sanal.voiceChannel)
    return voiceLog
      .send({
        embed: {
          description:
            "<@" +
            sanal.id +
            "> adlı kullanıcı " +
            sanal.voiceChannel +
            " kanalına giriş yaptı.",
          color: Math.floor(Math.random() * (0xffffff + 1)),
          timestamp: new Date()
        }
      })
      .catch(console.error);
  if (thrones.voiceChannel !== sanal.voiceChannel)
    return voiceLog
      .send({
        embed: {
          description:
            "<@" +
            thrones.id +
            "> adlı kullanıcı " +
            thrones.voiceChannel +
            " kanalından " +
            sanal.voiceChannel +
            " kanalına giriş yaptı.",
          color: Math.floor(Math.random() * (0xffffff + 1)),
          timestamp: new Date()
        }
      })
      .catch(console.error);
}); 
//--------------------SES-LOG--------------------------------//
//--------------------------------------------------------//
client.on('ready', () => {
  client.channels.cache.get("").join()
})