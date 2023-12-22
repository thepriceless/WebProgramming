(function() {
    document.addEventListener('DOMContentLoaded', function(event) {
        const loadTime = performance.mark("pageEnd").startTime
        const element = document.getElementById('load-time')
        if (element !== null) element.textContent = `Page load time: ${loadTime.toString()} ms.`

        const currentPage = document.location.pathname
        const menuItems = document.getElementsByClassName('nav-bar__box')

        for (const currentElement of menuItems) {
            if (currentPage.endsWith(currentElement.getAttribute('href')?.slice(1))) {
                currentElement.classList.add('active')
                break
            }
        }
    })
})()


