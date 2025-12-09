    // mobile nav toggle
    const navToggle = document.getElementById('navToggle');
    const mobileNav = document.getElementById('mobileNav');
    navToggle.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open);
    });

    // ensure hero and content spacing if header sizes change
    function setHeroPadding() {
      // optionally adjust hero min-height or other CSS vars if needed
      // currently not used, but kept for easy extension
    }
    window.addEventListener('resize', setHeroPadding);


//================================================================    
// For Changes in the sub Field
    const pageTitle = document.getElementById("pageTitle");
  const pageContent = document.getElementById("pageContent");
  const breadcrumb = document.querySelector(".breadcrumb");
  const subLinks = document.querySelectorAll(".subfield");

  subLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      ; // stop page reload

      const newTitle = this.textContent;
      const newContent = this.dataset.content;

      // ✅ Change only the page content
      pageTitle.textContent = newTitle;
      pageContent.textContent = newContent;

      // ✅ Update breadcrumb automatically
      breadcrumb.innerHTML = `Home &nbsp; - &nbsp; ${newTitle}`;
    });
  });