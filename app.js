const brain = require('brain.js')

const network = new brain.NeuralNetwork()

network.train([
  {input:[['O', 'O', ''],
          ['', '', ''],
          ['', '', '']], output:[['O', 'O', 'X'],
                                 ['', '', ''],
                                 ['', '', '']]},
  {input:[['', '', ''],
          ['', 'O', ''],
          ['O', '', '']], output:[['', '', 'X'],
                                 ['', 'O', ''],
                                 ['O', '', '']]},
{input:[['', '', ''],
        ['', 'O', ''],
        ['O', '', '']], output:[['', '', 'X'],
                               ['', 'O', ''],
                               ['O', '', '']]},
])

const result = network.run([['', '', ''],
                            ['O', 'O', ''],
                            ['', '', '']])


console.log(result)
