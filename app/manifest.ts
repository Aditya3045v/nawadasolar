import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Solar & Electrical Solutions in Nawada',
        short_name: 'Solar & Electrical',
        description: 'Solar Panels | Wiring | Inverters | Lights in Nawada',
        start_url: '/',
        display: 'standalone',
        background_color: '#0B1120',
        theme_color: '#0056D2',
        icons: [
            {
                src: '/assets/logo.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    }
}
