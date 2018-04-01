const brain = requre('brain.js')

const network = new brain.neuralNetwork()

network.train([
  {input:[] output:[]}
])

const result = network.run()
