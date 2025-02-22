
const newsArticle = [
    {
        title: "Proud Parents",
        date: "Feb 1st, 2024",
        author: "Dan Smith",
        content: "It's hard being a parent and knowing about my own genetic predisposition to addiction."
    },
    {
        title: "To Live Sober",
        date: "Jan 1st, 1990",
        author: "Dan Gonzales",
        content: "This site was born out of passion. I am a person in recovery and this passion stems from the good times and the not so good."
    },
    {
        title: "Freedom in College",
        date: "Mar 15th, 2023",
        author: "Susan B. Chalet",
        content: "The year was 1982. I was just a freshman in college and all of my friends were doing the marijuana. Did I want to do it? No. Did I? Yes. Little did I know how much it would change my life."
    }
]
console.log(newsArticle[0]);

const popup = document.getElementById("popup-card-article");

let title = document.getElementById("article-title");
let date = document.getElementById("date");
let author = document.getElementById("author");
let content = document.getElementById("content");

const openArticleOne = () =>{
    title.innerText += newsArticle[0].title;
    date.innerText += newsArticle[0].date;
    author.innerText += newsArticle[0].author;
    content.innerText += newsArticle[0].content;

    popup.style.display = "block"; 
    document.body.style.position = "fixed";
}
const openArticleTwo = () =>{
    title.innerText += newsArticle[1].title;
    date.innerText += newsArticle[1].date;
    author.innerText += newsArticle[1].author;
    content.innerText += newsArticle[1].content;
    
    popup.style.display = "block";
    document.body.style.position = "fixed"; 
}
const openArticleThree = () =>{
    
    title.innerText += newsArticle[2].title;
    date.innerText += newsArticle[2].date;
    author.innerText += newsArticle[2].author;
    content.innerText += newsArticle[2].content;

    popup.style.display = "block"; 
    document.body.style.position = "fixed";
}
const closeArticle = () =>{
    title.innerText = ""; 
    date.innerText="";
    author.innerText = "";
    content.innerText = "";
    
    popup.style.display = "none";
    document.body.style.position = "static";
}
