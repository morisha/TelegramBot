var TelegramBot = require('node-telegram-bot-api');
var token ='#';
var bot = new TelegramBot(token, {polling:true});
var request = require('requests');


bot.onText(/\/Book (.+)/, function(msg, match) {
    var Book = match[1];
    var chatId = msg.chat.id;
    request(`https://kikrogers.ml/books/api/${Book}`, fumction(error,response,body) {
        if(!error && response.statusCode == 200) {
            bot.sendMessage(chatId, '_Looking for' +Book+ '...', {parse_mode: 'Markdown'})
            .then (function(msg) {
                var res = JSON.parse(body);
                bot.sendDocument(chatId, res.Poster, {caption: 'Result: \nTitle: ' + res.Title + '\nAuthor: ' + res.Author})
            })
        }
    });
});