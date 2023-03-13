/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/modules/home/components/login-form/login-form.component.html",
    "./src/app/modules/home/home.component.html",
    "./src/app/shared/error-message/error-message.component.html",
    "./src/app/core/header/header.component.html",
    "./src/app/shared/card-photo/card-photo.component.html",
    "./src/app/modules/dashboard/components/photo-grid/photo-grid.component.html",
    "./src/app/shared/components/card-photo/card-photo.component.html",
    "./src/app/core/sidebar/sidebar.component.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
