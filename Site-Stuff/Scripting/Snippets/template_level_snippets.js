function addHTMLSnippet(id, html) {
    document.getElementById(id).innerHTML += html;
}
// variables pulled from other locations to add into the html
let currentUrl = window.location.href;
console.log(currentUrl);
if(currentUrl.split("").pop() == "/"){
    homeUrl = currentUrl.slice(0,-1);
    homeUrl += "_Home_Page";
};
if(typeof homeUrl === "string"){ var currentFilename = homeUrl.split("/").pop().split('.')[0].replaceAll("_", " ");
} else { var currentFilename = currentUrl.split("/").pop().split('.')[0].replaceAll("_", " ");};
// html snippets
let htmlHeadCharset = '<!--Keep updated, modern standard--><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0">';
let htmlHeadCSS = '<!-- Cascading Style Sheets--><link rel="stylesheet" type="text/css" href="/Site-Stuff/Styles/phone.css" media="screen"/><!-- ADD NORMALIZE CSS HERE, then others starting with base and then working outward to the largest view -->';
let htmlHeaderSiteWideNav = `<h1>Welcome to My ${currentFilename} !</h1><img href="Assets/Images/P_20180627_180703.jpg"><ul><a href="#"><li>Library</li></a><a href="/Family/"><li>Family</li></a><a href="/"><li>Home</li></a><a href="#"><li>Kids</li></a><a href="#"><li>About</li></a></ul>`;
let htmlMainFooter = '<p>&copy; Gunnar Schmidt 2023</p>';

//   <!--Page Data-->
//   <title>Schmidts.Page</title>
//   <meta name="description" content="Schmidts.Page is an Alpha rendition of what will be later released as a set of tools for RPGs on the fly.">
//   <link rel="shortcut icon" href="/Site-Stuff/Assets/Images/golden_bed.ico">


// Build Template Site-Wide
function buildTemplate() {
    addHTMLSnippet("head", htmlHeadCharset);
    addHTMLSnippet("head", htmlHeadCSS);
    addHTMLSnippet("site-wide-nav-header", htmlHeaderSiteWideNav);
    addHTMLSnippet("main-footer", htmlMainFooter);
    // add the currentfilename snippet here
}
buildTemplate();
