import './globals.css'
import './nord.css'
import 'bootstrap/dist/css/bootstrap.css'

export const metadata = {
    title: 'Recipe app',
    description: 'Random stuff I\'m building to learn NextJS.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
