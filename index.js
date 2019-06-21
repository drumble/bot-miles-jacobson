const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTkxMzQ0MzE3NzkzMzA0NjE4.XQvaZw.fIjPeZxKLBQRG82s3R1o6WVH08k'

const PREFIX = '!'

bot.on('ready', () =>{
     console.log ('Botnya Online!');
})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel => channel.name === "selamat-datang-pelatih");
    if(!channel) return;

    channel.send (`Selamat Datang di Server Pertama Discord Football Manager Indonesia, ${member}, silahkan lihat aturan juga regulasi, dan tolong isi career milestone yaa, agar kita bisa bertemu sapa :soccer: ISI CAREER MILESTONES AGAR DAPAT BERPARTISIPASI DI SERVER INI :soccer:`)
});

bot.login(process.env.token);


