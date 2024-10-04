let fs = require('fs')
let fetch = require('node-fetch')
let handler = async(m, { conn, text, participants, args }) => {
    if (args.length >= 1) {
      text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) 
      text = m.quoted.text

    conn.sendMessage(m.chat, { text: text, mentions: participants.map(a => a.id) }, { quoted: m })
    }
handler.help = ['hidetag <pesan>']
handler.tags = ['group']
handler.command = /^(hidetag|tag|h|p|crot)$/i

handler.group = true
handler.admin = true

module.exports = handler