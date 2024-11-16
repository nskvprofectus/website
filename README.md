# The official site of profectus
:)
# I don't care about the technical details, I just want to change something
You can generally change everything on github itself without needing to download any programs. For simple changes you can just simple go to the correct file and click edit. 

## Adjust text on a page
1. To adjust the homepage: open and change the text on `site/index.md`
2. To adjust the contact/strength sports page: open and change the text in `[relevant folder]/index.md`
3. To adjust the subpages of association: open and change the text in `association/[relevant filename].md`

Formatting is done using Markdown (similar to formatting on e.g. Whatsapp but with a few more features). Check out a [[https://www.markdownguide.org/basic-syntax/]](guide) for all the options.

## Add a new page
### A new main page

### A new sub page

## Remove/add/change a document
The documents in the folder `/media/documents` are automatically included in the site. Simply upload your documents there.

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
