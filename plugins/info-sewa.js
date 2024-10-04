/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

let handler = async (m, { conn }) => {
  conn.chatRead(m.chat)
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  })
  let message = '♛ ʟɪsᴛ ʜᴀʀɢᴀ sᴇᴡᴀ ʙᴏᴛ ♛\n\n▭▬▭▬▭▬▭▬▭▬▭▬▭\n\n◦ 𝟷𝟻 ʜᴀʀɪ - *ʀᴘ 𝟷𝟹ᴋ*\n◦ 1 ʙᴜʟᴀɴ - *ʀᴘ 𝟸𝟶ᴋ*\n◦ 𝟸 ʙᴜʟᴀɴ - *ʀᴘ 35ᴋ*\n◦ 3 ʙᴜʟᴀɴ - *ʀᴘ 45ᴋ*\n\n*• ━❪ヾ  𝐂𝐀𝐓𝐀𝐓𝐀𝐍  ヾ❫━ •*\n• ᴀᴅᴀ ʜᴀʀɢᴀ ᴀᴅᴀ ᴋᴜᴀʟɪᴛᴀs\n• ᴀɢᴜʟʙᴏᴛᴢ ᴏɴ sᴇʟᴀᴍᴀ 𝟸𝟺 ᴊᴀᴍ ᴛɪᴅᴀᴋ ᴏғғ\n• ᴊɪᴋᴀ ᴍᴇɴᴇᴍᴜᴋᴀɴ ʙᴏᴛ ᴅᴀʟᴀᴍ ᴋᴇᴀᴅᴀᴀɴ ᴛɪᴅᴀᴋ ʙᴇʀᴊᴀʟᴀɴ ᴍᴀᴋᴀ ʜᴜʙᴜɴɢɪ ᴏᴡɴᴇʀ ᴋᴜ\n• ʙᴏᴛ ᴛɪᴅᴀᴋ ʙɪsᴀ ᴅɪᴘɪɴᴅᴀʜᴋᴀɴ ᴅᴀʀɪ ɢʀᴜᴘ ʏᴀɴɢ ᴅɪsᴇᴡᴀ ᴋᴇ ɢʀᴏᴜᴘ ʟᴀɪɴ\n• ᴊɪᴋᴀ ᴀɢᴜʟʙᴏᴛᴢ ᴅɪᴋɪᴄᴋ sᴀʏᴀ ᴀɴɢɢᴀᴘ ᴍᴀsᴀ sᴇᴡᴀ sᴜᴅᴀʜ ʙᴇʀᴀᴋʜɪʀ\n\nᴊɪᴋᴀ ᴀɴᴅᴀ ʙᴇʀᴍɪɴᴀᴛ sɪʟᴀʜᴋᴀɴ ʜᴜʙᴜɴɢɪ ᴏᴡɴᴇʀ ᴋᴜ. ⚡\nᴏᴡɴᴇʀ : +6285731416490\nᴛᴛᴅ ʙʏ ʙᴀɴɢ ᴀɢᴜʟ 🐱';
  m.reply(message);
};

handler.help = ['sewa', 'sewabot'];
handler.tags = ['info'];
handler.command = /^(sewa|sewabot)$/i;

module.exports = handler;