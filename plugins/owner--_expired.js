module.exports = {
    async all(m) {
        if (!m.isGroup) return 
        let chats = global.db.data.chats[m.chat]
        if (!chats.expired) return !0
        if (+new Date() > chats.expired) {
        	const data = global.owner.filter(([id, isCreator]) => id && isCreator)
            await m.reply(`sᴜᴅᴀʜ sᴀᴀᴛɴʏᴀ *${this.user.name}* ᴘᴇʀɢɪ 👋🏻\nᴛᴇʀɪᴍᴀᴋᴀsɪʜ ᴛᴇʟᴀʜ ᴍᴇɴʏᴇᴡᴀ sᴀʏᴀ ᴅᴀɴ ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ sᴇᴡᴀ ᴀɢᴜʟʙᴏᴛᴢ ʟᴀɢɪ ⚡`)
            await this.delay(5000) 
            await this.groupLeave(m.chat)
        }
    }
}