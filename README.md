# [Quiz Club Website](http://sreetamdas.github.io/QC)

Theme used : [Creative](http://startbootstrap.com/template-overviews/creative/), a one page creative theme for [Bootstrap](http://getbootstrap.com/) created by [Start Bootstrap](http://startbootstrap.com/).

## Getting Started

​	Look over the file directory to get yourself familiarised with the structure followed. All `assets` are organised as per the usage.



## Adding a new Quiz

### Adding the Quiz Thumbnail

> When replacing the variables such as `<- QuizName ->`, **remove the `<- ` *and* ` ->`**

`Ctrl + F` : `QuizModal + Thumbnail`

1. Create thumbnail using **Paint**/ **Paint.net**/ **Photoshop**.

2. Make sure the dimensions of the thumbnail are exactly `650 x 350` or in the same ratio.

3. Save the thumbnail as `QuizName_Year` for legibility. Use suitable extension.

4. Use the template given below:

   ```html
   <div class="col-lg-4 col-sm-6">
     <a href="#<- QuizName ->Modal" data-toggle="modal" class="portfolio-box">
       <img src="img/Quizzes/<- Quiz-Thumbnail-File-Name.extension ->" class="img-responsive" alt="">
       <div class="portfolio-box-caption">
         <div class="portfolio-box-caption-content">
           <div class="project-name">
             <span class="trajanPro"><- QuizName -></span>
           </div>
         </div>
       </div>
     </a>
   </div>
   ```

   Things to note:

    `<- QuizName ->` needs to be the same in the above and below code blocks.

   Replace `Quiz-Thumbnail-File-Name.extension` with the filename saved in **step 3**

   ```html
   <div id="<- QuizName ->Modal" class="modal fade" role="dialog" tabindex="-1">
     <div class="modal-dialog">
       <div class="modal-content bg-dark">
         <div class="modal-header">
           <button type="button" class="close" data-dismiss="modal">&times;</button>                   <h4 class="modal-title trajanPro text-center" style="font-size: 58px"><<QuizName>></h4>
            </div>
            <div class="modal-body container text-center trajanPro noUnderline">
              <!-- If multiple PPTs for multiple rounds (Prelims, Pounce, etc.), reiterate the below code block (the `a` and `p` tags) -->
              <a href="#<- QuizName -><- Round ->Modal" data-toggle="modal" class="text-center quiz_link" style="font-size: 44px">Prelims</a> <!-- if single PPT, replace <- Round -> with any keyword, eg: All; which makes the href="#TharakQuizAllModal" -->
              <p class="monospace"></p> <!-- if any "subtitles" -->
         </div>
       </div>
     </div>
   </div>
   ```

   Things to note:

   ​	`<- QuizName ->` **needs** to be the same in the above two code blocks.

   ​	`#<- QuizName -><- Round ->Modal`  -> please note down for use in  **`quizzes.js`**

5. Create PPT in [Google Slides](https://docs.google.com/presentation/u/0/), then save the PPT in [this Drive folder](https://drive.google.com/drive/folders/0B69Abr4I8A8keXVCdm1kSGVJMEU?usp=sharing). (Request access)

6. Publish the PPT by opening it up, `File` > `Publish to the Web` > `Publish` *(link mode)*

7. Copy the link. It's gonna look something like this: `https://docs.google.com/presentation/d/1-4wVOslPm-mhHm3lpxPXeQijszeqm7K3TYfBmYGSJ_E/pub?start=false&loop=false&delayms=3000`
   Remember this link for **step 11**

8. Head over to `js/quizzes.js`

9. Find the following line

   ```javascript
   /*
   Append Quiz embed links above here
   */
   ```

10. Remember the `#<- QuizName -><- Round ->Modal` used in **step 4.2**?

11. Add a new `key`:`value` pair as follows:

    ```javascript
    <- QuizName -><- Round ->Modal : '<- link from **step 7** ->',
    ```




And that's it! You *should* be good to go.