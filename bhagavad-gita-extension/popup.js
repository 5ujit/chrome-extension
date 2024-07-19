document.addEventListener('DOMContentLoaded', function() {
    const verseElement = document.getElementById('verse');
  
    // Array of Bhagavad Gita verses
    const verses = [
        "Verse 1: Chapter 2, Verse 47: You have the right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results of your activities, nor be attached to inaction.",
        "Verse 2: Chapter 4, Verse 7: Whenever there is a decline in righteousness and an increase in unrighteousness, O Arjuna, at that time I manifest Myself.",
        "Verse 3: Chapter 9, Verse 22: To those who are constantly devoted and who worship Me with love, I give the understanding by which they can come to Me."
        // Add more verses here
      ];
      
  
    function getRandomVerse() {
      const randomIndex = Math.floor(Math.random() * verses.length);
      return verses[randomIndex];
    }
  
    // Display a random verse on load
    verseElement.textContent = getRandomVerse();
  });
  