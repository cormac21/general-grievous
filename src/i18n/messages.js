import { LOCALES } from "./locales";

export const messages = {
    [LOCALES.ENGLISH]: {
        learn_to: "Hello, let's learn how to use React-Intl",
        price_display:
            "How {n, number, ::currency/USD} is displayed in your selected language",
        number_display:
            "This is how {n, number} is formatted in the selected locale",
        start_today: "Start Today: {d, date}",
        // menu
        about_project: "About the project",
        contact_us: "Contact us",
        click_count: "You clicked {count, plural, one {# time} other {# times}}",
    },
    [LOCALES.PORTUGUESE]: {
        learn_to: "Olá, vamos aprender como usar React-Intl",
        price_display: "Como {n, number, ::currency/BRL} é mostrado na sua linguagem selecionada",
        number_display: "Aqui é como {n, number} é formatado no seu locale selecionado",
        start_today: "Começo Hoje: {d, date}",
        about_project: "Sobre o projeto",
        contact_us: "Contate-nos",
        click_count: "Você clicou {count, plural, one {# vez} other {# vezes}}"
    },
    [LOCALES.SPANISH]: {
        learn_to: "Hola, aprendamos a usar React-Intl",
        price_display: "Cómo se muestra {n, number, ::currency/EUR} en el idioma seleccionado",
        number_display: "Así es como se formatea {n, number} en la configuración regional seleccionada",
        start_today: "Comienza hoy: {d, date}",
        about_project: "Sobre el proyecto",
        contact_us: "Contacta con nosotros",
        click_count: "Hiciste clic en {count, plural, one {# vez} other {# veces}}",
    },

}