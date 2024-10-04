const { WAMessageStubType } = require('@adiwajshing/baileys')
var { format } = require('util');

let handler = m => m

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

const setting = {
  anticall: true
}

handler.all = async function (m) {
  if (m.fromMe && m.isBaileys) return !0
  let text;
  if (!setting.anticall) return 

  if (m.messageStubType === (WAMessageStubType.CALL_MISSED_VOICE || WAMessageStubType.CALL_MISSED_VIDEO)) {
    await this.reply(m.chat, '*ᴇʜ ʙɴɢsᴛ ᴅɪʟᴀʀᴀɴɢ ᴄᴀʟʟ ʙᴏᴛ, ɴᴏᴍᴏʀ ᴀɴᴅᴀ ᴀᴋᴀɴ ᴅɪʙʟᴏᴋ! ⚡*\n\nsᴇᴇ ʏᴏᴜ ɴᴇxᴛ ᴛɪᴍᴇ 👋🏻', null)
    await delay(1000)
    await this.updateBlockStatus(m.chat, "block")
  }
}

module.exports = handler
