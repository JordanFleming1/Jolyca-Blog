// Welcome Message
function welcome() {
    console.log("Welcome to Jolyca Co. Blog's!");    
}
welcome();

//  Form Validation

function validateEmail(email) {
  return email.includes("@") && email.includes(".");
}
console.log(validateEmail("Email Valid")); // true

// All Blog Sections

function allBlogs() {
    let blogs = ["political", "tech", "beauty"];
    console.log(blogs);
}
allBlogs();

function recentBlogs() {
    let recentBlogs = ["How to Start a Blog", "Beauty Tips"];
    console.log(recentBlogs);
}
recentBlogs();



