import { useEffect, useState } from 'react';

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const toggleVisible = () => {
            setVisible(window.scrollY > 300)
        }

        window.addEventListener('scroll', toggleVisible)
        return () => {
            window.removeEventListener('scroll', toggleVisible)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return visible ? (
        <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 bg-purple-500 text-white p-3 rounded-full shadow-lg hover:bg-purple-600 transition duration-300"
        >
            ↑ 
        </button>
    ) : null
}
