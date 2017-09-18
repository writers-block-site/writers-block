Writer's Block ReadMe
=============================

> Like Github For Writers

## Install after first pull

* $ `cd [your project clone folder]`
* $ `bash FirstPull.sh `
	

## Contents
* [Tech Used](#tech)
* [Views](#views)
* [Features](#features)
* [Contribute](#contribute)

## <a name='tech'></a> Tech Used
1. Backend
    * Laravel 5.5
    * MySQL
    * composer
2. Frontend
    * React
        * `react-router-dom`
	* `react-diff
    * Sass
    * Filestack


## <a name='views'></a> Separation of Views

### PHP (Laravel)
```
[Navbar is on every page]
------------
| From '/' |
------------

Home Page
|_ Register
|_ Login
    |_Profile
       |_ Edit Profile
       |_ Messages
       |_ Comments
       |      
       |_ Documents
       |   |_ [Opens Doc in React App]
       |_ Chat?

```
### React.js
```
[Navbar is on every page]
----------------------------
| From Documents or Search |
----------------------------
App
|_ Advanced 
|_ Main
|   |_Search Results
|   |_ Selected Document
|
|_ Comments Container
    |_  (On Search Results) Preview Doc
    |_ (On Document View) Comments
    
```




<br>
<br>   

## <a name='features'></a> Feature Set

### Features Implemented

1. Create User and Login
    * Password reset
2. Upload Docs
3. View Specific Doc
3. Comment on Specific Doc
4. Delete Document *Record*
5. Search
    * By title
1. Reupload/History (Version Control)
    * Store multiple versions of doc
        * View Past versions (Read Only!)

----

### Future Features

1. Groups
    * Ideal for 
        * Prof/Teacher -> Class
        * Writer -> Patreon/Support
1. Highlight text
    * Highlighted text inputs into comment
2. Markdown in comments
    * If markdown, then hihglighted text formats as 'blockquote'
3. Personal Messaging (similar to Reddit messaging)
6. Notifications by email
    * Comments
    * Watch document for changes?

# <a name='contribute'></a> How to contribute
#### 1. Make sure you have a local install of `composer` >= 1.4.2 and `npm` >= 5.3.0.

#### To check which versions you have (if any) run:

`composer -v`

and 

`npm -v`

#### You can find more information on `composer` [here](https://getcomposer.org/), and `npm` [here](https://docs.npmjs.com/)

#### 2. Clone the project

#### Run cloning command
For ssh:
`git clone git@github.com:writers-block-site/writers-block.git [YOUR PROJECT DIRECTORY]`

For HTTPS: `git clone https://github.com/writers-block-site/writers-block.git`

#### 3. Run the install script

`cd [PROJECT DIRECTORY] ` then `bash FirstPull.sh`

This will run `composer install` and `npm install` as well as generating your project key with `php artisan key:generate`
#### 4. Run build tool to compile Sass and React code
`npm run dev`
#### 5. (Optional) If you don't have a dedicated server
Run `php artisan serve` and go to [http://localhost/8000](http://localhost/8000). You should see the website on your screen!

#### 6. Make pull requests! :)