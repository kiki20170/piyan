let handler = async (m, { conn, args, command }) => {
	let group = m.chat
        await m.reply('sʏᴀᴘ ᴍᴇʟᴀᴋsᴀɴᴀᴋᴀɴ ᴘᴇʀɪɴᴛᴀʜ ʙᴏs 🫡\n\nʙʏᴇ 👋🏻 ᴀɢᴜʟʙᴏᴛᴢ ᴀᴋᴀɴ ᴋᴇʟᴜᴀʀ ᴅᴀʀɪ ɢʀᴏᴜᴘ 😿', m.chat)
        await conn.delay(1000)
        await conn.groupLeave(group)
        }
handler.help = ['gc', 'group']
handler.tags = ['group']
handler.command = /^leavegroup|out|agulbotz|leavegc$/i

handler.mods = true

module.exports = handler