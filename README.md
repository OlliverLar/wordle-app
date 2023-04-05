# Wordle



Mind map! 

1.  There should be a page resembling that of the original wordle.
    1.1 The page needs:
       - button to choose wether you want a 5 or 6 letter word.
       - button to let user choose if they want or don't want word with the same letter twice e.g. "Hello, Never, Clever"...
       - input field where the user will write their guess.
       - button that submits the guess.
       - Squares where the guessed word shows up.
       - Different colors of square depending on if letter is in the word, in the word but wrong placement, or not in the word at all.
       - Top menu with three options
            1.1.1 Menu options
             a. Main page (Actual game)
             b. Info page (Static)
             c. Highscore page
       - If user guessed correctly a message congratulating the user will be displayed, together with how many guesses they made.
         The same message will contain an input field asking the user to write their name.
       - The highscore page will show the name of the user and the amount of guesses. The page will show the top 10 scores from best to worst.
         If there is less than ten guesses then the page will still show 10 positions but they will be empty. 
       - The info page will be static and therefore only contain information about the game and won't be interactive.     



2.  
    2.1 Need to be able to get words from api. The user can choose if they want a 5 or 6 letter word so there needs to be
        logic to get word with either 5 or 6 letter. 5 and 6 letter words are stored in separate files.
    
    2.2 Depending on users choice regarding repeating letters, we need to be able to get word matching the users choice.

    2.3 Logic that takes the users guess and checks if it matches the correct word.
        2.3.1 If guessed word: 
        a. Is correct then the game is over and the user will recieve a message congratulating them. 
        b. Contains corrects guessed letters then this will be displayed.
        c. Contains incorrect guessed letters then this will be displayed.
        d. Contains correctly guessed letter but in wrong place then this will be displayed.
        e. Is longer or shorter than selected word length then the user will be alerted to this fact and asked to write it correctly.

    2.4 The name that the user put in together with their highscore will be stored as a key and the highscore will be stored as a value. 
        The users name and highscore needs to be stored in an api that is displayed if the user navigates to /highscore.

    2.5