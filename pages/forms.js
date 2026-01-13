// This page exists solely for Netlify form detection
// Netlify parses the HTML output at build time to discover forms
// The hidden attribute prevents this page from being visible
export default function FormsPage() {
    return (
        <form
            name="Usa1"
            method="POST"
            action="/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            hidden
        >
            <input type="hidden" name="form-name" value="Usa1" />
            <input name="bot-field" type="text" />
            <input name="name" type="text" />
            <input name="phone" type="tel" />
            <input name="email" type="email" />
            <textarea name="details"></textarea>
            <input name="terms" type="checkbox" />
        </form>
    )
}
