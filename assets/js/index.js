document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".animate-item");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const index = [...items].indexOf(entry.target);
        entry.target.style.transitionDelay = `${0.15}s`;
        entry.target.classList.add("visible");

        observer.unobserve(entry.target);
      }),
    { threshold: 0.1 }
  );

  items.forEach((item) => observer.observe(item));
});






document.addEventListener("DOMContentLoaded", () => {
  const projectLinks = document.querySelectorAll(".project-item-link");

  projectLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const parentItem = link.closest(".chat-project-item");
      parentItem.classList.toggle("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const chatLinks = document.querySelectorAll(".chat-item-link");

  chatLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const chatLink = link.closest(".chat-list-item");
      chatLink.classList.toggle("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const NSidebar = document.querySelector(".chat-sidebar");
  const NBtnSmall = document.querySelector(".chat-sidebar-line");
  const NBtnBig = document.querySelector(".chat-sidebar-maximize");

  if (!NSidebar || !NBtnSmall || !NBtnBig) return;

  const NIsDesktop = window.matchMedia("(min-width: 768px)");

  const NInitSidebarLogic = () => {
    if (!NIsDesktop.matches) return;

    NBtnSmall.addEventListener("click", () => {
      NSidebar.classList.add("activeSmall");
      NSidebar.classList.remove("activeBig");
    });

    NBtnBig.addEventListener("click", () => {
      NSidebar.classList.remove("activeSmall");
      NSidebar.classList.add("activeBig");
    });
  };

  NInitSidebarLogic();
});

const NIsDesktop = window.matchMedia("(min-width: 768px)");

const NUpdateSidebarByScreen = () => {
  if (!NIsDesktop.matches) {
    NSidebar.classList.remove("activeSmall", "activeBig");
  }
};

NIsDesktop.addEventListener("change", NUpdateSidebarByScreen);




document.addEventListener("DOMContentLoaded", () => {
  const NChatSearchWrapper = document.querySelector(".chat-search-wrapper");
  if (!NChatSearchWrapper) return;

  const NChatInput = NChatSearchWrapper.querySelector('input[type="text"]');
  if (!NChatInput) return;

  NChatInput.addEventListener("focus", () => {
    NChatSearchWrapper.classList.add("active");
  });

  NChatInput.addEventListener("blur", () => {
    NChatSearchWrapper.classList.remove("active");
  });
});








document.addEventListener("DOMContentLoaded", () => {
  const NChatSearchWrapperMobile = document.querySelector(
    ".chat-search-wrapper-mobile"
  );
  if (!NChatSearchWrapperMobile) return;

  const NChatInputMobile = NChatSearchWrapperMobile.querySelector(
    '.chat-file-search input[type="text"]'
  );
  if (!NChatInputMobile) return;

  NChatInputMobile.addEventListener("focus", () => {
    NChatSearchWrapperMobile.classList.add("active");
  });

  NChatInputMobile.addEventListener("blur", () => {
    NChatSearchWrapperMobile.classList.remove("active");
  });
});





function NInitCategoryInputBridge({
  categoriesSelector,
  itemSelector,
  wrapperSelector,
  inputSelector,
  activeClass = "active",
  mediaQuery = null, 
}) {
  if (mediaQuery) {
    const NMedia = window.matchMedia(mediaQuery);
    if (!NMedia.matches) return;
  }

  const NCategories = document.querySelector(categoriesSelector);
  const NWrapper = document.querySelector(wrapperSelector);

  if (!NCategories || !NWrapper) return;

  const NInput = NWrapper.querySelector(inputSelector);
  if (!NInput) return;

  const NItems = NCategories.querySelectorAll(itemSelector);
  if (!NItems.length) return;

  NItems.forEach((NItem) => {
    NItem.addEventListener("click", () => {
      const NText =
        NItem.dataset.text?.trim() ||
        NItem.innerText.trim();

      if (!NText) return;

      NInput.value = NText;
      NInput.focus();
      NWrapper.classList.add(activeClass);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  NInitCategoryInputBridge({
    categoriesSelector: ".p-chat-categories",
    itemSelector: ".p-chat-category-item",
    wrapperSelector: ".p-chat-search",
    inputSelector: '.chat-file-search input[type="text"]',
    mediaQuery: "(min-width: 768px)",
  });
});


document.addEventListener("DOMContentLoaded", () => {
  NInitCategoryInputBridge({
    categoriesSelector: ".p-chat-categories-mobile",
    itemSelector: ".p-chat-category-item",
    wrapperSelector: ".chat-search-wrapper-mobile",
    inputSelector: '.chat-file-search input[type="text"]',
    mediaQuery: "(max-width: 767px)",
  });
});







document.addEventListener("DOMContentLoaded", () => {
  const NMediaMobile = window.matchMedia("(max-width: 767px)");
  if (!NMediaMobile.matches) return;

  const NmenuBg = document.querySelector(".mobile-menu-bg");
  const NSidebar = document.querySelector(".chat-sidebar");

  const NBurger = document.querySelector(".icon-chatBurger");
  const NCloseBtn = document.querySelector(".chat-sidebar-line");

  if (!NSidebar || !NBurger) return;

  NBurger.addEventListener("click", (e) => {
    e.stopPropagation();
    NSidebar.classList.add("active");
    NmenuBg.classList.add("active");
  });

  if (NCloseBtn) {
    NCloseBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      NSidebar.classList.remove("active");
      NmenuBg.classList.remove("active");
    });
  }

  document.addEventListener("click", (e) => {
    if (!NSidebar.classList.contains("active")) return;

    if (!NSidebar.contains(e.target)) {
      NSidebar.classList.remove("active");
      NmenuBg.classList.remove("active");
    }
  });

 const NSidebarLinks = NSidebar.querySelectorAll("a");

NSidebarLinks.forEach((NLink) => {
  NLink.addEventListener("click", (e) => {
    if (
      e.target.closest(".project-item-link") ||
      e.target.closest(".chat-item-link")
    ) {
      return;
    }

    NSidebar.classList.remove("active");
    NmenuBg.classList.remove("active");
  });
});
});
