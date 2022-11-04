const sectionBtns = Array.from(document.getElementsByClassName('btns')[0].children)
const articles = Array.from(document.getElementsByClassName('article-section')[0].children)
sectionBtns.forEach((button) => {
    button.addEventListener('click', (even)=> {
        resetTheArticle();
        const articleId = even.currentTarget.dataset.val;
        const element = document.getElementById(articleId);
        even.currentTarget.style.backgroundColor = "white"
        even.currentTarget.style.color = 'black'
        element.classList.toggle('active');
    })
})
// reset the section
const resetTheArticle = () => {
    sectionBtns.forEach((del) => {
        del.style.backgroundColor = null
    })
    articles.forEach((divClassName) => {
        divClassName.classList.remove('active')
    })
}
