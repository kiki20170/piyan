let { groupsSettingUpdate } = require('@adiwajshing/baileys')
let handler = async (m, { isAdmin, isOwner, isBotAdmin, conn, args, usedPrefix, command }) => {
	if (!(isAdmin || isOwner)) {
		global.dfail('admin', m, conn)
		throw false
	}
	if (!isBotAdmin) {
		global.dfail('botAdmin', m, conn)
		throw false
	}
let prefix = usedPrefix
let bu = `@${m.sender.split`@`[0]} ᴛᴇʟᴀʜ ᴍᴇᴍʙᴜᴋᴀ ɢʀᴏᴜᴘ, sᴇᴋᴀʀᴀɴɢ sᴇᴍᴜᴀ ᴍᴇᴍʙᴇʀ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇsᴀɴ! ⚡`.trim()            
    
	let isClose = {
		'open': 'not_announcement',
		'buka': 'not_announcement',
		'on': 'not_announcement',
		'1': 'not_announcement',
		'close': 'announcement',
		'tutup': 'announcement',
		'off': 'announcement',
		'0': 'announcement',
	}[(args[0] || '')]
	if (isClose === undefined) {
var text5 = `contoh:
${usedPrefix + command} tutup
${usedPrefix + command} buka
	`
m.reply(text5)

		throw false
	} else if (isClose === 'announcement') {
	await conn.groupSettingUpdate(m.chat, isClose)
	let teks = `@${m.sender.split`@`[0]} ᴛᴇʟᴀʜ ᴍᴇɴᴜᴛᴜᴘ ɢʀᴏᴜᴘ, sᴇᴋᴀʀᴀɴɢ ʜᴀɴʏᴀ ᴘᴀᴋ ᴀᴅᴍɪɴ ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇsᴀɴ! ⚡`.trim()
	await m.reply(teks)
	} else if (isClose === 'not_announcement') {
	await conn.groupSettingUpdate(m.chat, isClose)
	await m.reply(bu)
	} else if (isClose === undefined) {

var te = `
contoh:
${usedPrefix + command} tutup
${usedPrefix + command} buka`

m.reply(te)

	}
}

handler.help = ['grup <open/close>']
handler.tags = ['owner']
handler.command = /^(g(ro?up|c?|yes|berisik|sepi)?)$/i
handler.group = true
handler.botAdmin = false

module.exports = handler