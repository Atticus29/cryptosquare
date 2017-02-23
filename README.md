
# Website for encrypting top secret messages

#### 23 Feb., 2017, v.1.0.1

#### By Mark Fisher and Liam Stabeno

## Description

Website for encrypting top secret messages using a cryptosquare.

### Specifications

|Behavior|Input|Output|
|:---:|:---:|:---:|
|Get input text from the user and save as a string variable in front end|"evil User123!!!?"|`var usrInput = "evil Usersz123!!!?"`|
|Remove all white space and non-character symbols from input variable|`var usrInput = "evil Usersz123!!!?"`|"evilUsersz"|
|make the string lower case|"evilUsersz"|"evilusersz"|
|Determine the number of characters of the cleaned-up input|"evilUser"|10|
|Find out whether that number is a perfect square|10|false|
|If it's not a perfect square, find the closest square number that is greater than it|10|16|
|Treat the square root of that number as the number of rows. The number of columns is the smallest integer that, when multiplied by our row number yields a number greater than the string length |10|4 rows x 3 columns|
|Make a function that returns an array that puts column[#] characters into it, starting at index a of the cleaned up input string, one character per element in the array. If it runs out of characters to use, it adds elements that contain ""|`makeArray(colNum=3, start=0, str="evilusersz")`|["e", "v", "i"]|
|Initialize an empty master array||`var master = []`|
|Loop through row[#] times, each time calling the makeArray function written above using col[#] x number of times we've run the loop as our start point. Each loop run will push the resulting array of that function call into the master array|[]|[["e", "v", "i"],["l", "u", "s"],["e", "r", "s"],["z", "", ""]]|
|Looping through row[#] times, grab the current loop number's index for each sub array, and concatenate that character to a(n ever-growing) string|""|"elezvuriss"|
|Add a space every five characters|"elezvuriss"|"elezv uriss"|

## Setup/Installation Requirements

* This repository is meant to be viewed. It can be viewed [here](https://Atticus29.github.io/cryptosquare).

### Or if you're feeling bold, you can clone OR download a local instance of the site:

* Clone
  * Open your terminal program
    * On a Mac, this would be in the Applications/Utilities directory, and is called, "Terminal"
    * Windows uses a Terminal program as well, but a Terminal with all the capabilities we'll require is not installed by default. Thankfully, we can easily download and install a Terminal program that does fit our needs.
There are many options available, but we recommend using a terminal program called git bash. You can download this free program at [msysgit.github.io](https://git-for-windows.github.io/).
  * Clone this track survey repository by typing, `git clone https://github.com/Atticus29/TrackSuggester.git`
* Download
  * Click [here](https://github.com/Atticus29/cryptosquare/archive/master.zip) to download the repo
  * Unzip the zipped repository
* Open the TrackSuggester folder and double-click on index.html.
* Make your selections and click submit as instructed on the site.


## Known Bugs

There are no known bugs. I'd be interested to know if you find any.

## Support and contact details

Please feel free to contact mark.aaron.fisher@gmail.com for questions

## Technologies Used

* bash
* git v. 2.11.1

### Template
* git v. 2.11.1
* html5
* bootstrap v. 3.3.7
* CSS
* javaScript
* jQuery v. 3.1.1

### License

This software is licensed under the MIT license.

Copyright (c) 2017 Mark Fisher and Liam Stabeno

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
