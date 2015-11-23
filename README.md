Movie App
=============

## Explanation of Files/Folders ##

+ **www** - This is where the frontend code lives.
  + css - All of the frontend css files
  + img - All of the images used in the app excluding the splash screen
  + js - All of the frontend js files (controllers, directies, services, and filters)
  + lib - files are install here by bower
  + views - All of the frontend HTML files
  + index.html - The main HTML file of the app. 

+ *.bowerrc* - This is where you tell `bower` to install dependencies in a specific place (`wwww/lib`)
+ *.gitignore* - Make sure that you have all packages handled by `npm` and `bower` included in here so you don't source control them. 
+ *bower.json* - Used to keep track of which dependencies you've installed. This allows you to share this project with someone else so they can just clone and type `bower install`. If more dependences are added include command `--save` so they are added to this file. 
+ *package.json* - Similar to `bower.json`, except backend node modules are kept track here.


## Setting up your environment ##

bower install angular --save
bower install bootstrap --save
bower install jquery --save

You will need Node and Ionic installed.
  - install node.js with your choosen method (nvm, homebrew, etc).
  - install ionic with `npm install -g ionic`.

1. Clone repo

    ```bash
    git clone https://github.com/cdavis27/movieapp
    cd gapmap
    ```

2. Instalize dependencies by running `bower install`. The terminal with prompt you to select a version of angular, because this app uses angular-route enter, `2`.

3. Run `npm install`.

4. Run the project with `ionic serve [http-port] [livereload-port]`. default port is 8100.
  `ionic serve --lab`
  $ ionic platform ios 
  $ ionic platform android
  before testing the apps you need to build them:
  $ ionic build ios 
  $ ionic build android

  $ ionic emulate ios
  $ ionic run android

  test on device:
  $ ionic run ios
  $ ionic run android

  // test on ios simulator with:
  ionic run ios --livereload
  Uncheck "Connect Hardware Keyboard"

