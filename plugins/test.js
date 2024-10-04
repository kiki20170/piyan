let handler = m => m

handler.all = async function (m, { isBlocked }) {
  if (isBlocked) return
  if (m.text.toLowerCase() === 'p' || m.text.toLowerCase() === 'tes' || m.text.toLowerCase() === 'test') {
    let today = new Date()
    let day = today.toLocaleDateString('en-US', { weekday: 'long' })
    let username = '@' + m.sender.split`@`[0]

    let teks = `👋 ʜᴀʟʟᴏ ${day} *${username}*, ᴀᴅᴀ ʏᴀɴɢ ʙɪsᴀ 𝐀𝐠𝐮𝐥𝐁𝐨𝐭𝐳 ʙᴀɴᴛᴜ?`

    m.reply(teks)
  }
}

module.exports = handler