let handler = m => m

handler.all = async function (m, { isBlocked }) {
  if (isBlocked) return
  if (m.text.toLowerCase() === 'bot' || m.text.toLowerCase() === 'bot' || m.text.toLowerCase() === 'bot') {
    let today = new Date()
    let day = today.toLocaleDateString('en-US', { weekday: 'long' })
    let username = '@' + m.sender.split`@`[0]

    let teks = `𝐀𝐠𝐮𝐥𝐁𝐨𝐭𝐳 𝐒𝐭𝐚𝐧𝐝𝐁𝐲 😼`

    m.reply(teks)
  }
}

module.exports = handler