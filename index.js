const { App } = require('@slack/bolt');
require('dotenv').config();


const token = process.env.SLACK_BOT_TOKEN;
const signingSecret = process.env.SLACK_SIGNING_SECRET;
const appToken = process.env.SLACK_APP_TOKEN 
const socketMode = true; // add this
const port = process.env.PORT 

const app = new App({
    token,
    signingSecret,
    appToken,
    socketMode,
    port,
});

app.message('hello', async ({ message, say }) => {
  console.log({ message })
  // say() sends a message to the channel where the event was triggered
  await say(`Hey there <@${message.user}>!`);
});

(async () => {
  // Start your app
  await app.start();

  console.log('⚡️ Bolt app is running!');
})();
//# sourceMappingURL=app.js.map