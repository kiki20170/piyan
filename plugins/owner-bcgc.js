let handler = async (m, { conn, isROwner, text }) => {
    const delay = time => new Promise(res => setTimeout(res, time))
    let getGroups = await conn.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
    var pesan = m.quoted && m.quoted.text ? m.quoted.text : text
    if(!pesan) throw 'ᴛᴇᴋsɴʏᴀ ?'
    m.reply(`ᴍᴇɴɢɪʀɪᴍ ʙʀᴏᴀᴅᴄᴀsᴛ ᴋᴇ ${anu.length} ᴄʜᴀᴛ, ᴡᴀᴋᴛᴜ sᴇʟᴇsᴀɪ ${anu.length * 0.5 } ᴅᴇᴛɪᴋ! ⚡`)
    for (let i of anu) {
    await delay(500)
    conn.relayMessage(i, {
extendedTextMessage:{
                text: pesan, 
                contextInfo: {
                     externalAdReply: {
                        title: wm,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: 'https://telegra.ph/file/75f378cb25b27111a4294.jpg',
                        sourceUrl: ''
                    }
                }, mentions: [m.sender]
}}, {}).catch(_ => _)
    }
  m.reply(`sᴜᴋsᴇs ᴍᴇɴɢɪʀɪᴍ ʙʀᴏᴀᴅᴄᴀsᴛ ᴋᴇ ${anu.length} ɢʀᴏᴜᴘ! ⚡`)
}
handler.help = ['bcgcbot <teks>']
handler.tags = ['owner']
handler.command = /^((broadcastgc|bcgc)bot)$/i

handler.owner = true

module.exports = handler
