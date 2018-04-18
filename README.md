Hello and welcome to my Naughts and Crosses Neural Network (WIP)
I am currently able to make reccomendations based on the networks output but it,
is not particularly accurate. I need to build in the rules of naughts and crosses
into the nets logic.

Eventually I want to have the Network play a game.

I am using the naughts and crosses bot from a previous project to
train a neural network to play the great game. I will be using the brain.js module.

In Bots folder you'll find the code for my bot which I am using to collect the
correct outputs.

In boardStuff folder you'll find how I am randomizing my boards to have as inputs.

The helpers folder helps me turn all that into a format brain.js can tolerate
with the final creation of data being done in the 'assembleData' file.

Next steps
Turn the output back into something the board can recognize so that the square
be claimed based on the reccomendation made by the network.
