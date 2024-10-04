let handler = async (m, { conn, text }) => {
  let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  conn.reply(m.chat, `_ᴍᴇɴɢɪʀɪᴍ ᴘᴇsᴀɴ ʙʀᴏᴀᴅᴄᴀsᴛ ᴋᴇ ${groups.length} ɢʀᴏᴜᴘ!_ 👋🏻`, m)
  for (let id of groups) await conn.copyNForward(id, conn.cMods(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : teks + '\n' + readMore + '「 ᴀʟʟ ɢʀᴏᴜᴘ ʙʀᴏᴀᴅᴄᴀsᴛ 」\n' + randomID(32)), true).catch(_ => _)
  m.reply('sᴇʟᴇsᴀɪ ʙʀᴏᴀᴅᴄᴀsᴛ ᴀʟʟ ɢʀᴏᴜᴘ! ⚡')
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i

handler.owner = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
