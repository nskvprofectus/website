const MobileNav = function MobileNav()
{
    let navToggle = document.getElementById('mobile-nav-toggle') ;
    let navWindow = document.getElementById('mobile-nav-window')

    navToggle.addEventListener('click', function() {
        // add the expanded class to adjust css
        this.classList.toggle('expanded')
        // make the navWindow visible
        navWindow.classList.toggle('hidden')
        navWindow.classList.toggle('flex')

        // set aria-expanded attribute on menu toggle button
        if ( this.getAttribute('aria-expanded') === 'false' )
        {
            this.setAttribute('aria-expanded', 'true')

        } else {
            this.setAttribute('aria-expanded', 'false')
        }
    })
}()

export default MobileNav
