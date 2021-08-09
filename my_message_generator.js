    const signs = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagitarius','Capricorn','Aquarius','Pisces']
    const colors = ['night sky','snow','summer','clean river','sun','ocean','sunrise','mountains','moon','sunset','wild flowers','desert']
    const traits = ['the Warrior','the Artist','the Dreamer','the Leader','the Protector','the believer','the Philosopher','the Hunter','Genius','the Outcast','the Explorer','the Judge']
    
    
    function mixedMessages() {

        function getRandNum(array){
            return Math.floor(Math.random() * array.length);
        }
    
        let randSigns = signs[getRandNum(signs)];
        let randColors = colors[getRandNum(colors)];
        let randTraits = traits[getRandNum(traits)];    
        console.log(`Your zodiac sign is ${randSigns}, your color is ${randColors}, and your personal trait is ${randTraits}!`);
    };
    
    mixedMessages();
