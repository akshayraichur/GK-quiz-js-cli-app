import readlineSync from 'readline-sync';
import chalk from 'chalk';

// Do you know tech quiz.
const levelOneQuestions = [
  {
    question:
      'First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted in',
    answer: '1967',
  },
  {
    question: 'Golf player Vijay Singh belongs to which country?',
    answer: 'fiji',
  },
  {
    question: 'First Afghan War took place in',
    answer: '1839',
  },
  {
    question:
      'Federation Cup, World Cup, Allywyn International Trophy and Challenge Cup are awarded to winners of',
    answer: 'volleyball',
  },
  {
    question:
      'Each year World Red Cross and Red Crescent Day is celebrated on? (answer in dd/mm format)',
    answer: '08/05',
  },
];

const levelTwoQuestions = [
  {
    question:
      'Fire temple is the place of worship of which of the following religion?',
    answer: 'zoroastrianism',
  },
  {
    question: 'Film and TV institute of India is located at',
    answer: 'pune',
  },
  {
    question:
      'Germany signed the Armistice Treaty on ____ and World War I ended, (answer in dd/mm/yyyy)',
    answer: '11/10/1918',
  },
  {
    question:
      'During World War II, when did Germany attack France? (answer only the year in yyyy format)',
    answer: '1940',
  },
  {
    question: 'Filaria is caused by',
    answer: 'mosquito',
  },
];

const levelThreeQuestions = [
  {
    question: 'Coral reefs in India can be found in',
    answer: 'rameshwaram',
  },
  {
    question:
      'Heavy Water Project (Talcher) and Fertilizer plant (Paradeep) are famous industries of',
    answer: 'orissa',
  },
  {
    question:
      'Hamid Karzai was chosen president of Afghanistan in (answer only the year in yyyy format)',
    answer: '2002',
  },
  {
    question: 'Durand Cup is associated with the game of',
    answer: 'hockey',
  },
  {
    question: 'Hockey was introduced in the Asian Games in which year?',
    answer: '1958',
  },
];

const highScoresList = [
  {
    playerName: 'Akshay Raichur',
    score: 15,
  },
  {
    playerName: 'Anirudh Kulkarni',
    score: 14,
  },
];

let totalUserScore = 0;
let levelOneCleared = false;
let levelTwoCleared = false;

function App() {
  // Welcome user
  const userName = readlineSync.question("Welcome, what's your name?\n");
  console.log(chalk.green(`Hey! ${userName}, good to see you here`));
  console.log(chalk.underline.bgBlue("Let's play the game!!"));

  // Game Rules
  console.log(chalk.yellow('Lets talk about the rules first :'));
  console.log(
    chalk.yellow(
      'There are total 3 levels, we call it levelOne, levelTwo, levelThree'
    )
  );
  console.log(chalk.yellow('Each level will have 5 questions'));
  console.log(
    chalk.yellow(
      'If you score 2 or more in levelOne, you will be promoted to levelTwo. If you score 3 or more, you will be promoted to levelThree.'
    )
  );

  // start the game!
  startLevelOne();

  if (levelOneCleared) {
    startLevelTwo();
  }

  if (levelTwoCleared) {
    startLevelThree();
  }

  // display the result and points table
  console.log(
    chalk.bgGreen(`Your Total Score in this Quix : ${totalUserScore}`)
  );

  if (totalUserScore >= 10) {
    console.log(
      chalk.green.underline(
        'Congratulations!! You are now among the top scorers for this quiz, contact me if you want your name in the list!!'
      )
    );
  } else {
    console.log(
      chalk.blueBright('Well played! Run the program once again to re-try!')
    );
  }

  console.log('\n');
  console.log('List of all players who scored really good in this quiz!');
  highScoresList.forEach((eachPlayer) => {
    console.log(`${eachPlayer.playerName} : ${eachPlayer.score} points`);
  });
}

function startLevelOne() {
  console.log(chalk.magenta.italic('Level 1 start :\n\n'));

  levelOneQuestions.forEach((eachItem) => {
    const userAnswer = readlineSync.question(eachItem.question + '\n');

    if (userAnswer.toLowerCase() === eachItem.answer) {
      console.log(chalk.underline.green('Congrats! You answered it right..'));
      totalUserScore++;
      console.log(chalk.blue(`Your Score is now ${totalUserScore}`));
      console.log(chalk.cyan('------------------------------------------'));
    } else {
      console.log(chalk.underline.red('Sorry! Wrong answer..'));
      console.log(chalk.blue(`Your Score is ${totalUserScore}`));
      console.log(chalk.cyan('------------------------------------------'));
    }
  });

  if (totalUserScore >= 2) {
    levelOneCleared = true;
  }
}

function startLevelTwo() {
  console.log(chalk.green.italic('Congratulations!! You made it to Level 2'));
  console.log(chalk.magenta.italic('Level 2 start :\n\n'));
  levelTwoQuestions.forEach((eachItem) => {
    const userAnswer = readlineSync.question(eachItem.question + '\n');

    if (userAnswer.toLowerCase() === eachItem.answer) {
      console.log(chalk.underline.green('Congrats! You answered it right..'));
      totalUserScore++;
      console.log(chalk.blue(`Your Score is now ${totalUserScore}`));
      console.log(chalk.cyan('------------------------------------------'));
    } else {
      console.log(chalk.underline.red('Sorry! Wrong answer..'));
      console.log(chalk.blue(`Your Score is ${totalUserScore}`));
      console.log(chalk.cyan('------------------------------------------'));
    }
  });

  if (totalUserScore >= 5) {
    levelTwoCleared = true;
  }
}

function startLevelThree() {
  console.log(chalk.green.italic('Congratulations!! You made it to Level 3'));
  console.log(chalk.magenta.italic('Level 3 start :\n\n'));
  levelThreeQuestions.forEach((eachItem) => {
    const userAnswer = readlineSync.question(eachItem.question + '\n');

    if (userAnswer.toLowerCase() === eachItem.answer) {
      console.log(chalk.underline.green('Congrats! You answered it right..'));
      totalUserScore++;
      console.log(chalk.blue(`Your Score is now ${totalUserScore}`));
      console.log(chalk.cyan('------------------------------------------'));
    } else {
      console.log(chalk.underline.red('Sorry! Wrong answer..'));
      console.log(chalk.blue(`Your Score is ${totalUserScore}`));
      console.log(chalk.cyan('------------------------------------------'));
    }
  });
}

App();
