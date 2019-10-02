# js-foundation

# JS Engine
* JS is single threaded language which uses callback queue.
*  Computer can only understand ones and zeros. Computer does not know what is JS file so V8 engine understands JS, it reads our code and then it runs this code.
*  Thanks to the JS Engine which was found by Brendan Eich(SpiderMonkey for Firefox), we are able to run the code on a browser, previously could only read HTML and CSS.

* JS File        ->         JS Engine        ->          Computer

*  JS Engine understand the JS file and tell the computer what to do(translator)

![JS ENGINE](images/js-engine-1.png)


# Inside the JS Engine:

* JS engine can be built by anybody but it is a lot of work. V8 engine which was built by Google is the fastest and is written in C++ which is low level programming language.
* If everybody creates its own JS, it would be a total chaos which is why ECMAScript was created. It defines the standard of JS engines and how it should work. ECMAScript is a governing body of a JS that essentially decides how the language should be standardized.
* Once we understand JS engine principles and why it’s built the way, we will able to write OPTIMIZED CODE.