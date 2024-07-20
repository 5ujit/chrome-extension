// Array of Bhagavad Gita verses
const verses = [
  { sanskrit: "कर्मण्येवाधिकारस्ते...", english: "You have a right to perform your prescribed duties..." },
  { sanskrit: "श्रेयान्स्वधर्मो विगुणः...", english: "Better is one's own duty, though devoid of merit..." },
  // Add more verses with translations
];

// Function to get a random verse
function getRandomVerse() {
  const randomIndex = Math.floor(Math.random() * verses.length);
  return verses[randomIndex];
}

// Create a notification
function createNotification() {
  const verse = getRandomVerse();
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icons/icon128.png',
    title: 'Daily Bhagavad Gita Verse',
    message: verse.sanskrit
  });
}

// Schedule notifications every 5 seconds
chrome.runtime.onInstalled.addListener(function() {
  chrome.alarms.create('every5Seconds', { periodInMinutes: 0.0833333 }); // 5 seconds in minutes
});

chrome.alarms.onAlarm.addListener(function(alarm) {
  if (alarm.name === 'every5Seconds') {
    createNotification();
  }
});
