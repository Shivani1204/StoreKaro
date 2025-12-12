// scripts.js
 
document.addEventListener("DOMContentLoaded", () => {
  /* =======================
     TAB HANDLING (product pages)
     ======================= */
  document.querySelectorAll("[data-tabs]").forEach((tabBlock) => {
    const buttons = tabBlock.querySelectorAll("[data-tab-button]");
    const panels = tabBlock.querySelectorAll("[data-tab-panel]");
 
    if (!buttons.length || !panels.length) return;
 
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
 
        buttons.forEach((btn) => btn.classList.remove("active"));
        panels.forEach((p) => p.classList.remove("active"));
 
        button.classList.add("active");
 
        const targetPanel = tabBlock.querySelector(
          `[data-tab-panel="${targetId}"]`
        );
        if (targetPanel) targetPanel.classList.add("active");
      });
    });
 
    // Activate first tab
    buttons[0].classList.add("active");
    panels[0].classList.add("active");
  });
 
  /* =======================
     DEMO LOGIN HANDLERS
     ======================= */
 
  // --- USER LOGIN ---
  const userLoginForm = document.querySelector("#user-login-form");
  if (userLoginForm) {
    userLoginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = userLoginForm.querySelector("#email")?.value.trim();
      const password = userLoginForm.querySelector("#password")?.value.trim();
 
      const DEMO_USER_EMAIL = "user@storekaro.com";
      const DEMO_USER_PASS = "user123";
 
      if (email === DEMO_USER_EMAIL && password === DEMO_USER_PASS) {
        window.location.href = "user-dashboard.html";
      } else {
        alert(
          "Demo login only.\n\nUse:\nEmail: user@storekaro.com\nPassword: user123"
        );
      }
    });
  }
 
  // --- ADMIN LOGIN ---
  const adminLoginForm = document.querySelector("#admin-login-form");
  if (adminLoginForm) {
    adminLoginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = adminLoginForm.querySelector("#admin-email")?.value.trim();
      const password = adminLoginForm
        .querySelector("#admin-password")
        ?.value.trim();
 
      const DEMO_ADMIN_EMAIL = "admin@storekaro.com";
      const DEMO_ADMIN_PASS = "admin123";
 
      if (email === DEMO_ADMIN_EMAIL && password === DEMO_ADMIN_PASS) {
        window.location.href = "admin-dashboard.html";
      } else {
        alert(
          "Admin demo login only.\n\nUse:\nEmail: admin@storekaro.com\nPassword: admin123"
        );
      }
    });
  }
 
  // --- SIGNUP (DEMO ONLY) ---
  const signupForm = document.querySelector("#signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = signupForm.querySelector("#signup-email")?.value.trim();
 
      alert(
        `Thanks for signing up, ${email || "user"}!\n\nThis is a demo UI, so no real account is created.\nYou can log in with:\n\nEmail: user@storekaro.com\nPassword: user123`
      );
 
      window.location.href = "login.html";
    });
  }
 
  /* =======================
     ADMIN DASHBOARD NAV
     ======================= */
  const adminNavLinks = document.querySelectorAll("[data-admin-nav]");
  const adminViews = document.querySelectorAll("[data-admin-view]");
 
  if (adminNavLinks.length && adminViews.length) {
    const activateAdminView = (target) => {
      adminNavLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("data-target") === target);
      });
 
      adminViews.forEach((view) => {
        if (view.getAttribute("data-admin-view") === target) {
          view.style.display = "";
        } else {
          view.style.display = "none";
        }
      });
    };
 
    adminNavLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = link.getAttribute("data-target");
        activateAdminView(target);
      });
    });
 
    // Default to overview
    activateAdminView("overview");
  }
 
  /* =======================
     USER DASHBOARD NAV
     ======================= */
  const userNavLinks = document.querySelectorAll("[data-user-nav]");
  const userViews = document.querySelectorAll("[data-user-view]");
 
  if (userNavLinks.length && userViews.length) {
    const activateUserView = (target) => {
      userNavLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("data-target") === target);
      });
 
      userViews.forEach((view) => {
        if (view.getAttribute("data-user-view") === target) {
          view.style.display = "";
        } else {
          view.style.display = "none";
        }
      });
    };
 
    userNavLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = link.getAttribute("data-target");
        activateUserView(target);
      });
    });
 
    // Default to overview
    activateUserView("overview");
  }
 
  /* =======================
     HIDDEN ROLE SWITCHER (for demo)
     ======================= */
  document.addEventListener("keydown", (e) => {
    const tag = (e.target && e.target.tagName) || "";
    const isTyping =
      tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || e.isComposing;
 
    if (isTyping) return;
 
    // Ctrl + Alt + U  => user login
    if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "u") {
      e.preventDefault();
      window.location.href = "login.html";
    }
 
    // Ctrl + Alt + A  => admin login
    if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "a") {
      e.preventDefault();
      window.location.href = "admin-login.html";
    }
  });
});
 