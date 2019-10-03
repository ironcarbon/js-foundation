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

# Interpreters and Compilers

* There are 2 ways to run JS using an interpreter or a compiler.

* In programming, there are generally 2 ways of translating to machine language or something that our computers can understand. It applies to most programming languages like JS, Python, Java, C++. They all use some of these concepts.

Interpreter: Translation happens LINE BY LINE on the fly.

Compiler: DOES NOT TRANSLATE ON THE FLY.  Compilers work a head of time to create a translation of what code we have written and compiles down to usually a language that can be understood by machines.
* It basically takes the WHOLE CODE and try to understand what code does. Then, it takes the program in JS or ay type of language and WRITE A NEW PROGRAM IN A NEW LANGUAGE that computer can understand.

![JS Engine 2](images/interpreter-compiler-1.png)

![JS Engine 3](images/interpreter-compiler-2.png)

![JS Engine 4](images/interpreter-compiler-3.png)
* Interpreters start translating their first line and runs the code for us. An interpreter is a natural fit for something like JS. JS originally was created for the browser.
* Compiler takes little bit longer to start up because it has to go to compilation step at the beginning. Go through our code, understand it and spit it out into another language. Compiler does not need to repeat the translation for each pass through so the edits that compilers do are called OPTIMIZATION


* BABEL is a JS compiler that makes your modern JS code and returns browser compatible JS(older JS)
* TYPESCRIPT is a superset of a JS that compiles down to JS.
* Both of these do what compilers do: TAKE ONE LANGUAGE AND CONVERT INTO A DIFFERENT ONE!


WRITING OPTIMIZED CODE/ EFFICIENT CODE:
* We want to write code in a way that helps compiler make the optimization.
* Paramater restructuring is best way to not use arguments in the function which might deoptimized code!
* For in loop could be problematic for iterating objects so USE Object.keys()
* delete keyword in JS could be problematic.
* eval()
* With 

Hidden classes
Inline caching  is done by compiler



# Optimization takeaways
1. Always instantiate your object properties in the same order so that hidden classes, and subsequently optimized code, can be shared.
2. Adding properties to an object after instantiation will force a hidden class change and slow down any methods that were optimized for the previous hidden class. Instead, assign all of an object’s properties in its constructor.
3. Code that executes the same method repeatedly will run faster than code that executes many different methods only once (due to inline caching).


# WebAssembly
WebAssembly have the standard binary executable format.
WebAssembly is a way to take code in any programming language and run it within a web browser.
- It runs really really fast on the browser instead of going through the entire JS engine process. Might be game changer in the future.