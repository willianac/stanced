/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/modules/auth/components/login-form/login-form.component.html",
    "./src/app/modules/auth/components/register/register.component.html",
    "./src/app/modules/auth/auth.component.html",
    "./src/app/shared/components/error-message/error-message.component.html",
    "./src/app/core/header/header.component.html",
    "./src/app/shared/card-photo/card-photo.component.html",
    "./src/app/modules/dashboard/components/photo-grid/photo-grid.component.html",
    "./src/app/shared/components/card-photo/card-photo.component.html",
    "./src/app/core/sidebar/sidebar.component.html",
    "./src/app/modules/dashboard/components/newcar/newcar.component.html",
    "./src/app/modules/dashboard/components/carpage/carpage.component.html",
    "./src/app/core/header/components/popover-menu/popover-menu.component.html",
    "./src/app/modules/profile/profile.component.html",
    "./src/app/modules/profile/components/mypictures/mypictures.component.html"
  ],
  theme: {
    extend: {
      colors : {
        textyellow : "#CCF381",
        bgblue : "#4831D4"
      }
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      "display": ["Oswald"]
    }
  },
  plugins: [],
}
