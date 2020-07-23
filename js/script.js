class article {
    constructor(title="", content="")
    {
        this.title      =title; 
        this.content    =content;
    }
     blogTitle ()
    {
        const titleElement=document.createElement("p");
        titleElement.textContent= `${this.title}`;
        document.body.appendChild(titleElement);
    }
     blogContent()
     {
         const contentElement=document.createElement("p");
         contentElement.textContent=`${this.content}`;
         document.body.appendChild(contentElement);
     }
    //method to add a new post to our "this.content" array property.
    addContent (myContent="") //parameter with default value.
    {
        //check if the content is filled in.
        if ( myContent.length > 0 )
        {
            this.content.push( myContent );
        }
        else
        { //If it is not filled in, say so in the console.
            console.log( "Content is empty. Please try again" );
        }
    }
    //Output the list of article objects (title and content) in the browser
    objectOfArray ()
    {
        //Create an array which stores the “Article” objects
        let objectOfArray = ["this.title", "this.content"];
        //loop through the length of the array
        for (let index = 0; index < this.objectOfArray.length; index++) {
            console.log(i, objectOfArray[1]);
            //***************************************REVIEW HOW TO APPLY TEMPLATE LITERAL IN FOR..OF LOOP?????? **************************/
           
        }
       
    }   
}
        //let's make blog articles!!
        const Top40 = new article ("Top40", "The freshest hits on the top 40 list!")
        console.log( Top40 );
        Top40.blogTitle(); //call upon a method to execute
        //running blogContent method.
        Top40.blogContent();

        const Hiphop = new article ("Hiphop", "playing the latest and greatest hiphop music today at 91.7 The Bounce");
        console.log(Hiphop);
        //running the blogTitle method.
        Hiphop.blogTitle();
        //running the blogContent method.
        Hiphop.blogContent();

        const pop = new article ("Pop", "playing the latest and greatest pop music today at 91.7 The Bounce");
        console.log(pop);
        //running the blogTitle method.
        pop.blogTitle();
        //running the blogContent method.
        pop.blogContent();

        const rock = new article ("Rock", "playing the latest and greatest rock music today at 91.7 The Bounce");
        console.log(rock);
        //running the blogTitle method.
        rock.blogTitle();
        //running the blogContent method.
        rock.blogContent();
        





     








