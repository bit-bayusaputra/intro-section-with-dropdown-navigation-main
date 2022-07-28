const panel = document.querySelectorAll(".panel");

      panel.forEach((item) => {
        const btnDropdown = item.querySelector("#btn-dropdown");
        btnDropdown.addEventListener("click", (e) => {
          let open = e.target;

          const dropdownContent = item.querySelector(".dropdown");
          const iconDown = item.querySelector(".icon-down");
          const iconUp = item.querySelector(".icon-up");

          iconUp.classList.toggle("active");
          iconDown.classList.toggle("hidden");
          dropdownContent.classList.toggle("active");
        });
      });

      const openMenu = document.querySelector(".openMenu");
      openMenu.addEventListener("click", () => {
        const nav = document.getElementById("nav");
        nav.classList.add("active");
      });

      const closeMenu = document.querySelector(".closeMenu");
      closeMenu.addEventListener("click", () => {
        const nav = document.getElementById("nav");
        nav.classList.remove("active");
      });