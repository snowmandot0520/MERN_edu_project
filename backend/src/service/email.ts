import { MessageClient } from 'cloudmailin';
import { EMAIL_USERNAME, EMAIL_API_KEY } from '../config/env';

const client = new MessageClient({
  username: EMAIL_USERNAME,
  apiKey: EMAIL_API_KEY,
});

export const sendMail = async ({
  to,
  from = 'Asif.V@simformsolutions.com',
  plain,
  html,
  subject,
}) => {
  const response = await client.sendMessage({
    to: to,
    from: from,
    plain: plain,
    html: html,
    subject: subject,
  });

  console.log(`⚡️[Send Mail]: response ${JSON.stringify(response, null, 2)}`);

  return response;
};
