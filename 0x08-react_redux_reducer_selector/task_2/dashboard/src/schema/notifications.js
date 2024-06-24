import notifications from "../../../../notifications.json";
import { normalize, schema } from "normalizr";

// Define the user schema
const user = new schema.Entity("users");

// Define the message schema with idAttribute set to "guid"
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });

// Define the notification schema
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

const normalizedData = normalize(notifications, [notification]);

// Function to get all notifications by user
export function getAllNotificationsByUser(userId) {
  const res = [];
  const notifications = normalizedData.entities.notifications;
  const messages = normalizedData.entities.messages;

  // Loop through normalized notifications
  for (const id in notifications) {
    if (notifications[id].author === userId) {
      res.push(messages[notifications[id].context]);
    }
  }

  return res;
}

export { normalizedData };
