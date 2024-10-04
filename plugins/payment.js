let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let qris = 'https://telegra.ph/file/9c17b1553f464eaf16604.jpg'
let dann = `*♛ • ━❪ヾ 𝐏𝐀𝐘𝐌𝐄𝐍𝐓  ヾ❫━ • ♛*\n\nsᴄᴀɴ ǫʀɪs ᴅɪᴀᴛᴀs ᴜɴᴛᴜᴋ ᴍᴇᴍᴘʀᴏsᴇs ᴘᴇᴍʙᴇʟɪᴀɴ ᴀɴᴅᴀ.\n\n• sᴇᴀʙᴀɴᴋ : 901524616661\n\nᴏᴋᴇ, ᴛʜᴀɴᴋs ᴜᴅᴀʜ ᴏʀᴅᴇʀ. ⚡`
 await conn.sendFile(m.chat, qris, 'payment.jpg', `${dann}`, m)
}

handler.help = ['payment', 'pembayaran']
handler.tags = ['info', 'tools']
handler.command = /^(payment|pay|pembayaran)$/i
module.exports = handler