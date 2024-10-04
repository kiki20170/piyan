let handler = m => m

const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i

handler.before = async function (m, { isAdmin, isBotAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    await conn.sendMessage(m.chat, { delete: m.key })
    await m.reply('*「  ⚠️ 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝐎𝐍  」*\n\n*ᴇʜ ᴀɴᴊᴇɴɢ ᴅɪʟᴀʀᴀɴɢ sʜᴀʀᴇ ʟɪɴᴋ ɢʀᴏᴜᴘ ᴅɪsɪɴɪ, sᴏʀʀʏ ɪʏᴀ ɴᴊᴇɴɢ ʟɪɴᴋ ɢʀᴏᴜᴘ ʟᴏ ɢᴜᴀ ʜᴀᴘᴜs. ⚡*')
  }
  return true
}

module.exports = handler