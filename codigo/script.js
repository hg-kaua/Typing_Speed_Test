const stories = [
    `One day her mother said to her, "Come, Little Red Riding Hood, here is a piece of cake and a bottle of wine. Take them to your grandmother, she is ill and weak, and they will do her good. Set out before it gets hot.`,
    `Little Red Riding Hood raised her eyes, and when she saw the sunbeams dancing here and there through the trees, and pretty flowers growing everywhere, she thought, suppose I take grandmother a fresh nosegay.`,
    `The next day, a wolf happened to pass by the lane where the three little pigs lived; and he saw the straw house, and he smelled the pig inside.`,
    `Once upon a time there was an old mother pig who had three little pigs and not enough food to feed them. So when they were old enough, she sent them out into the world to seek their fortunes.`,
    `After some days, Jack once again climbed the beanstalk and went to the giant’s castle. For the third time, Jack met the giant’s wife and asked for some food`,
    `While he was eating, the giant came home. The giant was very big and looked very fearsome. Jack was terrified and went and hid inside.`,

    
]
let story = '';
const containerEl = document.getElementById('container');
const quoteDisplayEl = document.getElementById('display');
const inputBtn = document.getElementById('input-btn');


inputBtn.addEventListener('input', ()=>{
    const arrayOfQuote = quoteDisplayEl.querySelectorAll('span');
    let correct = true
    const word = inputBtn.value.split('');
    console.log(word);
    arrayOfQuote.forEach((characterSpan, index) => {
        const character = word[index];
        if(character == null) {
            characterSpan.classList.remove('incorrect')
            characterSpan.classList.remove('correct') 
            correct = false;
        } else if(character === characterSpan.innerText) {
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        } else {
            characterSpan.classList.remove('correct')    
            characterSpan.classList.add('incorrect')
            correct = false
        }
        
    })

    if(correct) {
        // adicionar botao para reiniciar
        inputBtn.style.opacity = 0;
        document.querySelector('h2').style.opacity = 0;
        quoteDisplayEl.textContent = 'Wanna play again?';
        createButton();
    }
    
});
function getRandonstory() {
    let random = Math.floor(Math.random() * stories.length);
    story = stories[random];
    return story;
}
function RenderNewStory() {
    inputBtn.value = '';
    let words = getRandonstory();
    quoteDisplayEl.innerHTML = '';
    words.split('').forEach(character => {
        const characterSpan = document.createElement('span');
        characterSpan.innerText = character;
        quoteDisplayEl.appendChild(characterSpan);
    });
    

}

function createButton() {
    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = 'Play again';
    containerEl.appendChild(button);

    button.addEventListener('click', () => {
        RenderNewStory();
        button.remove();
        document.querySelector('h2').style.opacity = 100;
        inputBtn.style.opacity = 100;

    });
    
}
RenderNewStory();

