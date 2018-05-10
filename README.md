At the point at which the network can securely improve in real time against the users
my plan will be to issue a 50$ for the last person to beat it. I think that's a pretty
cool idea.


Current state:

The network can currently play against me and gets better the more that it plays. It does not
save it's trained state to the database, once I have achieved that I'll start implementing
things like:

Login/Signup,
New look and style,
A test suite that checks how well the networks play against all situations. 

How to use?

You can currently play against my networks by cloning this repo and running it on local host.

In trainer.js you can train a new network. The best way I found to use it is to
console.log it at a json and then copy it into a new file which you can then call
in the network.js file.

Training the network will involve choosing how many boards to create for it
and how many iterations do train it over. To choose the amount of boards you wish
to train your network on simply enter it as a parameter in the makeBoards function
in assembleData. To change the amount of times you want your network to train over
the data go into the trainer.js and adjust the iterations number.


What next?

--> Save json networks in a table in sql (done)
--> Have the client side make a get request for these networks
--> client side then turns the json into it's networks
--> it then uses the network to make it's move
--> client then trains the network off of the move it just performed
--> client turns network back into a json
--> sends json as a post request back to the database
