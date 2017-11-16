const chalk = require('chalk')

const helloBlue = () => console.log(chalk.blue('Hello World!'))
const helloRed= () => console.log(chalk.red('Hello World!'))
const stringToColor = (str, color) => {
    console.log(chalk[color](str))
}

const evensBlueOddsYellow = (str) => {
    console.log(str.split(' ').map((element, index) => {
        if (index % 2 === 0) {
            return chalk.blue(element)
        } else {
            return chalk.yellow(element)
        }
    }).join(' '))
}

const angryText = (str) => {
    console.log(chalk.red.underline.bold(str))
}

const backgroundCyan = (str) => {
    console.log(chalk.white.bgCyan(str))
}

const boldFirstUndelineLast = (str) => {
    let wordsArr = str.split(' ') 
    wordsArr[0] = chalk.bold(wordsArr[0])
    wordsArr[wordsArr.length - 1] = chalk.underline(wordsArr[wordsArr.length - 1])
    console.log(wordsArr.join(' '))
}

const commanLineChalk = (str, textColor, bgColor, decoration) => {
    console.log(chalk[textColor](chalk[bgColor](chalk[decoration](str))))
}

helloBlue()
helloRed()
stringToColor('Alejandro', 'yellow')
stringToColor('this is a test', 'red')
evensBlueOddsYellow('this is a test', 'red')
angryText('STOP!')
backgroundCyan('bgCyan')
boldFirstUndelineLast('First hello world last')
commanLineChalk(process.argv[2], process.argv[3], 'bg' + process.argv[4], process.argv[5]) 