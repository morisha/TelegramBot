const TelegramBot = require('node-telegram-bot-api');
const token = '714938087:AAFAckovWiKhtDWVHTqY7CRb2MqRg1Ndw50';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {

bot.sendMessage(msg.chat.id, "Hello, Welcome Dear " + msg.from.first_name, {
"reply_markup": {
    "keyboard": [["Praying To Get Results By Kenneth E. Hagin", "Book2"],   ["Book3"], ["Book4"]]
    }
});

// bot.sendDocument(msg.chat.id, "http://fgbmfinbpd.webs.com/Kenneth%20E%20Hagin%20-%20Praying%20to%20Get%20Results.pdf");

});

bot.on('message', (msg) => {

var Book2 = "Book2";
if (msg.text.toString().toLowerCase().includes(Book2)) {
    bot.sendDocument(msg.chat.id, "http://fgbmfinbpd.webs.com/Kenneth%20E%20Hagin%20-%20Praying%20to%20Get%20Results.pdf");
}
});
