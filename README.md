# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!
Name: Adam Zhou
1. I would not use a unit test to test the "message" feature of a messaging application. This is because unit testing is designed for small scale tasks, not how many different individual components interact with each other. The feature of writing and sending a message is a large scale feature and there are many moving parts to it, like getting the text data, sending it to another user's device, and some other backend tasks. 
2. I would use a unit test to test the max length of a message. This is because it is a small scale task that can be answered in one check. It executes quickly and changing other app features is unlikely to affect this test case. It's a much smaller scale than the previous question and you would simply check if the max length of the message is greater than 80, returning false in that case.
