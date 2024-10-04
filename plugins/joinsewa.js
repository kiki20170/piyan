let handler = async (m, { conn, text, usedPrefix, args, participants }) => {
  var time = db.data.users[m.sender].lastjoin + 86400000
  var linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
  var delay = time => new Promise(res => setTimeout(res, time))
 
  var name = m.sender
  var fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6287820872340@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  var [_, code] = text.match(linkRegex) || []
  if (!args[0]) throw `🐱 ʟɪɴᴋ ɴʏᴀ ᴍᴀɴᴀ ʙᴏs ?` 
  if (!code) throw `ʟɪɴᴋ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ!`
  if (!args[1]) throw `ʙᴇʀᴀᴘᴀ ʜᴀʀɪ ʙᴏs?`
  if (isNaN(args[1])) throw `ʜᴀɴʏᴀ ᴀɴɢᴋᴀ, ᴍᴇᴡᴀᴋɪʟɪ ʜᴀʀɪ! ⚡`
  var anubot = owner[0]
  m.reply(`ᴛᴜɴɢɢᴜ 𝟹 ᴅᴇᴛɪᴋ ʙᴏᴛ ᴀᴋᴀɴ ᴊᴏɪɴ!`)
  await delay(3000)
  try {
  var res = await conn.groupAcceptInvite(code)
  var b = await conn.groupMetadata(res)
  var d = b.participants.map(v => v.id)
  var member = d.toString()
  var e = await d.filter(v => v.endsWith(anubot + '@s.whatsapp.net'))
  var jumlahHari = 86400000 * args[1]
  var now = new Date() * 1
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
  else global.db.data.chats[res].expired = now + jumlahHari
  if (e.length) await m.reply(`sᴜᴋsᴇs ɪɴᴠɪᴛᴇ ʙᴏᴛ ᴋᴇ ɢʀᴏᴜᴘ\n\n${await conn.getName(res)}\n\nʙᴏᴛ ᴀᴋᴀɴ ᴋᴇʟᴜᴀʀ sᴇᴄᴀʀᴀ ᴏᴛᴏᴍᴀᴛɪs sᴇᴛᴇʟᴀʜ ⚡ *${msToDate(global.db.data.chats[res].expired - now)}*`)
  if (e.length) await conn.reply(res, `ᴛᴇʀɪᴍᴀᴋᴀsɪʜ @${anubot} sʏᴜᴅᴀʜ ɪᴢɪɴᴋᴀɴ 𝐀𝐠𝐮𝐥𝐁𝐨𝐭𝐳 ᴊᴏɪɴ ᴅɪ ɢʀᴏᴜᴘ ɪɴɪ 🤗

@${conn.user.jid.split(`@`)[0]} sʏᴀᴘ ᴍᴇʟᴀᴋsᴀɴᴀᴋᴀɴ ᴘᴇʀɪɴᴛᴀʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ! ⚡`, fkonn, {
    mentions: d
     }).then(async () => {
     await delay(5000)
     }).then( async () => {
     await conn.reply(res, `ᴊᴀᴅɪᴋᴀɴ ʙᴏᴛ sᴇʙᴀɢᴀɪ ᴀᴅᴍɪɴ, ᴀɢᴀʀ ʙɪsᴀ ᴍᴇʟᴀᴋsᴀɴᴀᴋᴀɴ ᴘᴇʀɪɴᴛᴀʜ ᴀᴅᴍɪɴ! ⚡`, 0)
     await conn.reply(owner[0]+'@s.whatsapp.net', `*𝐈 𝐍 𝐕 𝐈 𝐓 𝐈 𝐍 𝐆*\n\n@${m.sender.split('@')[0]} ᴛᴇʟᴀʜ ᴍᴇɴɢᴜɴᴅᴀɴɢ ${conn.user.name} ᴋᴇ ɢʀᴜᴘ\n\n${await conn.getName(res)}\n\n${res}\n\nᴘᴇsᴀɴ : ${args[0]}\n\nʙᴏᴛ ᴀᴋᴀɴ ᴋᴇʟᴜᴀʀ ᴏᴛᴏᴍᴀᴛɪs sᴇᴛᴇʟᴀʜ *${msToDate(global.db.data.chats[res].expired - now)}*`, null, {mentions: [m.sender]})
     })
     if (!e.length) await conn.reply(owner[0]+'@s.whatsapp.net', `*INVITING!*\n\n@${m.sender.split('@')[0]} telah mengundang ${conn.user.name} ke grup\n\n${await conn.getName(res)}\n\n${res}\n\nPesan : ${args[0]}\n\nʙᴏᴛ ᴀᴋᴀɴ ᴋᴇʟᴜᴀʀ ᴏᴛᴏᴍᴀᴛɪs sᴇᴛᴇʟᴀʜ *${msToDate(global.db.data.chats[res].expired - now)}*`, null, {mentions: [m.sender]})
     if (!e.length) await m.reply(`sᴜᴋsᴇs ɪɴᴠɪᴛᴇ ʙᴏᴛ ᴋᴇ ɢʀᴏᴜᴘ\n\n${await conn.getName(res)}\n\nʙᴏᴛ ᴀᴋᴀɴ ᴋᴇʟᴜᴀʀ sᴇᴄᴀʀᴀ ᴏᴛᴏᴍᴀᴛɪs sᴇᴛᴇʟᴀʜ *${msToDate(global.db.data.chats[res].expired - now)}*`).then(async () => {
     let mes = `𝐇𝐞𝐥𝐥𝐨 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞👋🏻

*${conn.user.name}* ᴀᴅᴀʟᴀʜ sᴀʟᴀʜ sᴀᴛᴜ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ʏᴀɴɢ ᴅɪ ʙᴀɴɢᴜɴ ᴅᴇɴɢᴀɴ Node.js, *${conn.user.name}* ʙᴀʀᴜ ᴀᴊᴀ ᴅɪ ɪɴᴠɪᴛᴇ ᴏʟᴇʜ *${m.name}*
Untuk menggunakan *${conn.user.name}* silahkan ketik
#menu

@${conn.user.jid.split('@')[0]} ᴀᴋᴀɴ ᴋᴇʟᴜᴀʀ sᴇᴄᴀʀᴀ ᴏᴛᴏᴍᴀᴛɪs sᴇᴛᴇʟᴀʜ *${msToDate(global.db.data.chats[res].expired - now)}*`
  await conn.sendB(res, mes, wm, null, [[`Owner`, `.owner`], [`Menu`, `${usedPrefix}menu`]], fkonn, {
        mentions: d
         })
     })
    } catch (e) {
      conn.reply(owner[0]+'@s.whatsapp.net', e)
      throw `ᴍᴀᴀғ ʙᴏᴛ ᴛɪᴅᴀᴋ ʙɪsᴀ ʙᴇʀɢᴀʙᴜɴɢ ᴋᴇ ɢʀᴜᴘ!`
      }
}
handler.help = ['joins <chat.whatsapp.com> <day>']
handler.tags = ['owner']
handler.command = /^joins(ewa)?$/i

handler.owner = true

module.exports = handler

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + " hari " + hours + " jam " + minutes + " menit";
    // +minutes+":"+sec;
}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
  seconds = Math.floor((duration / 1000) % 60),
  minutes = Math.floor((duration / (1000 * 60)) % 60),
  hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit"
}