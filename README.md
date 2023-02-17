# Practicing with FlexBox

You learned a lot about flexbox in this section. Practice it with this 3-in-1 project. You will create 3 different pages demonstrating different aspects of flexbox, then combine the work into a single page. This will help you work with the flow of the objects on a page, either horizontally or vertically, and how to use View containers to break the page up into separate sections.

Create a new React Native project. In the tutorial, rectangles (boxes) of color were used to demonstrate how different flexbox properties worked. In this project, you will create 2 boxes, 50 by 50 units, of different colors (your choice of color). In the first part of the project, you will display 4 of those boxes in a single row with space around each box. In the second part, you will display rows of of the boxes, with 1 box in the first row, 2 in the second row, 3 in the third row, 4 in the fourth row. In the third part, you will display boxes in columns, 1 in the first column, 2 in the second column, 3 in the third column, and 4 in the fourth column. In the final part, you will combine these three pages into a single page. Here are examples:

![flexSingleRow.PNG}(https://github.com/bell-kevin/PracticingWithFlexBox/blob/main/readMePictures/flexSingleRow.PNG)     ![flexRows.PNG}(https://github.com/bell-kevin/PracticingWithFlexBox/blob/main/readMePictures/flexRows.PNG)

![flexColumns.PNG](https://github.com/bell-kevin/PracticingWithFlexBox/blob/main/readMePictures/flexColumns.PNG)     ![flexAllInOne.PNG](https://github.com/bell-kevin/PracticingWithFlexBox/blob/main/readMePictures/flexAllInOne.PNG)

In the project, create a folder for "screens". In that folder, create files for the pages for the single row, rows of boxes, columns of boxes, and the all-in-one page. In the App.js file, remove the text in the App() function, Replace it with a call to the page for the first screen, the one for the row of boxes with space all around. You will call each screen as you work on it, until it is finished, then take a screenshot like above. Then comment out that call to that screen, and add a call to the second screen, and so on. You will end up with 4 imports of those screens and 4 calls to the screens, with 3 of them commented out. 

In the style sheet for the App page, add a top margin of 50 units to push the content below the status bar.

Keep it simple. As you work on these pages, remember that it is much easier if you only code the flexbox properties that are necessary. For example, in the first page with the single row of boxes, you will set the flex direction; notice that everything on the page is along the main axis of that direction. You only need to code "justifyContent", which determines the placement of elements on the main axis. If you also code "alignItems", which is for the secondary axis, you may find yourself battling with the code. Also remember that Views can be the visible object (the boxes, defined spaces of background color), and can be containers for other objects, like a text component plus view components.. You will use both concepts of views here. Start simply, adding style to views that are containers only if needed to add style to that block. If you add styles on every view, you will find that you are fighting with the code, trying to get it to move one way but not getting that result because of all the styles that may be in conflict or in the wrong place. Keep it simple.

Here's a hint that may save you a lot of time and frustration. The container in the App.js file has flex of 1, with alignItems and justifyContent set to "center". If you want to add different values of justifyContent, like "space-between", for containers that are within the main container, you may run into conflicts. If you don't have any inner containers that need different values for justifyContent, then set those values on the outer container, as you see in the initial project when it is first created. Either set alignItems and justifyContent in the main container, or remove those from the main container and set those values in each child container.

To get the text to appear in the center, use textAlign on the Text component.

When styling the boxes, make them 50 by 50 units, and include a margin of 2 units, so it is easy to see the individual boxes, not a connected group of boxes that make a solid line of color.

The first page with the single row has 4 boxes, alternating colors, with a line of text above that says "Single row with space-around". Be sure to get space around each box. 

The second page with the rows of boxes has what looks like a pyramid on it. There are 4 rows of boxes, alternating colors in each row, with a line of text above that says "Rows of boxes". 

The third page with the columns of boxes has what looks like a pyramid rotated to the left. There are several columns, and if the layout is columns, they will flow down the page, not side by side. If you think about the placement of the objects, there are 4 objects (the columns) that need to be side by side, which is how rows behave. So you need a row container which has 4 columns inside it. 

The all-in-one page combines those 3 pages. This page has one column containing 3 sections. To make the spacing pleasing, use a flex value of 1 for the first section (the single row of blocks with space), and a flex value of 2 for each of the other sections (the section for horizontal rows, and the section for a row of columns of blocks). Thus there will be 5 flex units on the page to spread out, with the single row section taking one unit so 1/5 of the page, and the other two sections taking 2 units or 2/5 of the page. You will need to add a view around each of the blocks to apply that flex size. 

Take 4 screenshots as shown above.

 

Submission: Zip together the 4 screenshots and the root folder of the project, and submit a single zipped file.


== We're Using GitHub Under Protest ==

This project is currently hosted on GitHub.  This is not ideal; GitHub is a
proprietary, trade-secret system that is not Free and Open Souce Software
(FOSS).  We are deeply concerned about using a proprietary system like GitHub
to develop our FOSS project. I have a [website](https://bellKevin.me) where the
project contributors are actively discussing how we can move away from GitHub
in the long term.  We urge you to read about the [Give up GitHub](https://GiveUpGitHub.org) campaign 
from [the Software Freedom Conservancy](https://sfconservancy.org) to understand some of the reasons why GitHub is not 
a good place to host FOSS projects.

If you are a contributor who personally has already quit using GitHub, please
email me at **bellKevin@pm.me** for how to send us contributions without
using GitHub directly.

Any use of this project's code by GitHub Copilot, past or present, is done
without our permission.  We do not consent to GitHub's use of this project's
code in Copilot.

![Logo of the GiveUpGitHub campaign](https://sfconservancy.org/img/GiveUpGitHub.png)
