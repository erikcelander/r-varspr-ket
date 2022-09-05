const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

console.log('Welcome to the epic rövarspråket translator.')

readline.question('Which language do you wish to translate from? \n1. Svenska, 2. Rövarspråket', answer =>{
  if (answer === '1') {
    fromSwedishToRövarspråk()
  } else {
    fromRövarsspråkToSwedish()
  }
})



const fromSwedishToRövarspråk = () => readline.question(`What do you want to translate? `, sentence => {


    const arr = [...sentence].map((i) => {
      const x = i.toLowerCase()

      if (x === ' ' || x === 'o' || x === 'a' || x === 'i' || x === 'y' || x === 'e' || x === 'å' || x === 'å' || x === 'ä' || x === 'ö') {
        return x
      } else {
        return x + 'o' + x
      }
    })


    const res = arr.join('')
    console.log(res)
    readline.close()
})

const fromRövarsspråkToSwedish = () => readline.question(`What do you want to translate? `, sentence => {
  const sentenceAsArray = [...sentence]
  const asSwedish = sentenceAsArray.reduce((acc, char, index) => {
    if (char === ' ') { 
      return acc + ' '
    }

    if (char === 'o') {
      const beforeChar = sentenceAsArray[index - 1]
      console.log(beforeChar + index)
      return  acc + (beforeChar === ' ' ? char : beforeChar)
    }
    
    return acc + ''
  },'')
  console.log(asSwedish)
  readline.close()
})
