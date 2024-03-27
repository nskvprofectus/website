# The (soon) official site of profectus
:)

# The source code
## The tools
* **11ty**: The overall framework used to generate static html/css out of the various template files, see [](https://www.11ty.dev/). The configuration can be found in the file eleventy.config.js.
* two template languages are used:
  - **nunjucks**: A templating language, basically html but you can do nice things such as loops to generate content. [The documentation](https://mozilla.github.io/nunjucks/)
  - **markdown**: Used to fill in the actual content, markdown is basically a very simple markup langauge. You have most likely already used it in e.g. discord or whatsapp.
    Look [here](https://www.markdownguide.org/basic-syntax/) for the basic syntax. 
* **tailwind**: A css wrapper, you can add css classes to your html to style it. If you understand CSS, tailwind is very easy to understand and use. 

## The folder structure
* `site`: contains all source code for the site
  * `_css, _js`: contains the written css and javascript
  * `_includes`: all the template files (so all nunjucks files)
    * `components`: site structure components, such as the navigation bar and footer
    * `elements`: smaller custom elements which can be embedded in pages, e.g. the documents 
    * `layouts`: The final page layouts ment to be used to generate the actual pages 
  * `_data`: contains site.json: a file where you can adjust various global values
  * other folders: represent the site structure, contains all the pages
* `media`: contains all images and other content files
* `.github/workflows`: contains the build script used to actually build and deploy the site to github pages 

# I want to adjust something 
## General
You need to use git.
## Adjust text on a page
1. To adjust the homepage: open and change `site/index.md`
2. To adjust the contact/strength sports page: open and change `[relevant folder]/index.md`
3. To adjust the subpages of association: open and change `association/[relevant filename].md`

## Add a new page
### A new main page

### A new sub page

## Remove/add/change a document
The documents in the folder `/media/documents` are automatically updated in the site. Simply change the documents there.

## Remove/add/change a board
1. Change the board metadata:
   - Go to `/site/_data/board.json`
   - **Copy** this file to previous_boards.json, rename the copied file to something like `board-[years].json`
   - change the original file to the current board:
     - Don't remove any of the `"`, `{}` etc. These tokens are necessary for the file to be understood.
     - Fill in the correct values, everything should be relatively straightforward but here is some extra explanation:
       - `folder`: the folder for all the board pictures, a good place to put it is `/media/boards/board-[year]`, but can be anything
       - `image`: the name of the group image, **don't** include the whole path, the site will look inside of the `folder` you specified above for the filename.
       - 
2. Upload the files: