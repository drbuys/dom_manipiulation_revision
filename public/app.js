// window.onload = function(){
//     createQuote();
//     main();
//     getQuoteOfDay();
//     getButton();
//     getLastQuote();
//     hideQuote();
// };
//
// var main = function() {
//     var articles = document.getElementsByTagName('article');
//
//     for (var i = 0; i < articles.length; i++) {
//         articles[i].style.backgroundColor = 'pink';
//     }
// };
//
// // adding quote to webpage (attaching to DOM)
// var createQuote = function() {
//     var quoteArticle = document.createElement('article');
//     quoteArticle.classList.add('quote');
//
//     var blockQuote = document.createElement('blocquote');
//     blockQuote.innerText = "Open the pod bay doors Hal ";
//
//     var cite = document.createElement('cite');
//     cite.innerText = "Dave";
//
//     blockQuote.appendChild(cite);
//
//     quoteArticle.appendChild(blockQuote);
//
//     var quotes = document.querySelector('#quotes');
//
//     quotes.appendChild(quoteArticle);
// };
//
// var getQuoteOfDay = function() {
//     console.log(document.getElementById('quote-of-the-day'));
// };
//
// var getButton = function() {
//     console.log(document.getElementsByTagName('button'));
// };
//
// var getLastQuote = function() {
//     var quotes = document.getElementsByClassName('quote');
//     console.log(quotes[quotes.length -1].innerText);
// };
//
// var hideQuote = function() {
//     var qod = document.getElementById('quote-of-the-day');
//     qod.hidden = true;
//     // qod.style.display = none;
// };
//
// // var hideQuote = function() {
// //     var hideQOD = getElementById('hideme');
// //     hideQOD.display = none;
// // }

//new app stuff - dyna

var newQuotes = [
    {quoteText: "Visual Basic is the way forward, I don't know why we are doing JavaScript. ", author: "Jay Chetty"},
    {quoteText: "The only CSS you need to know is background-color: tomato ", author: "Rick"},
    {quoteText: "I used the jQuery diet plugin and lost 10kg in a week. ", author: "Keith"},
    {quoteText: "Scaffolding is nothing but a fiery hell. ", author: "Valerie"},
];

var main = function() {
    console.log( 'app started' );
    hideQuote();

    createQuotes();

    var addbutton = document.getElementById('add-button');
    // addbutton.onclick = handleClick;
    addbutton.onclick = handleSubmit;

    var deleteButton = document.getElementById('delete-button');
    deleteButton.onclick = handleClickDelete;

    var form = document.getElementById( 'quote-form' );
    form.onsubmit = handleSubmit;


};

// oninput

var handleSubmit = function( event ) {
    event.preventDefault();
    console.log("Hello");
    handleClick();
};

var handleClick = function() {
    var textInput = document.getElementById('quote-text-input');
    var authorInput = document.getElementById('quote-author-input');
    newQuotes.push( {quoteText: textInput.value, author: authorInput.value } );
    addQuote(textInput.value, authorInput.value);
};

var handleClickDelete = function(event) {
    // console.log(event.target);
    childNode = event.target;
    childNode.parentNode.removeChild(childNode);
};

var addQuote = function(text, author) {
    var quoteArticle = document.createElement('article');
    quoteArticle.classList.add('quote');

    var blockQuote = document.createElement('blockquote');
    blockQuote.innerText = text + " ";

    var cite = document.createElement('cite');
    cite.innerText = author;

    blockQuote.appendChild(cite);

    quoteArticle.appendChild(blockQuote);

    var quotes = document.querySelector('#quotes');

    quotes.appendChild(quoteArticle);

    var deleteButton = document.createElement('form');
    deleteButton.setAttribute( 'id', 'quote-delete');

    var deleteInput = document.createElement('input');
    deleteInput.setAttribute( 'type', 'button' );
    deleteInput.setAttribute( 'id', 'delete-button' );
    deleteInput.setAttribute( 'value', 'Delete Quote' );

    deleteButton.appendChild(deleteInput);

    quotes.appendChild(deleteButton);
};

// adding quote to webpage (attaching to DOM)
var createQuotes = function() {
    for (var quote in newQuotes) {
        var textStuff = newQuotes[quote].quoteText;
        var textAuthor = newQuotes[quote].author;

        addQuote(textStuff, textAuthor);

        // var quoteArticle = document.createElement('article');
        // quoteArticle.classList.add('quote');
        //
        // var blockQuote = document.createElement('blockquote');
        // blockQuote.innerText = textStuff;
        //
        // var cite = document.createElement('cite');
        // cite.innerText = textAuthor;
        //
        // blockQuote.appendChild(cite);
        //
        // quoteArticle.appendChild(blockQuote);
        //
        // var quotes = document.querySelector('#quotes');
        //
        // quotes.appendChild(quoteArticle);

    }
};

var hideQuote = function() {
    var qod = document.getElementById('quote-of-the-day');
    qod.hidden = true;
};



window.onload = main;