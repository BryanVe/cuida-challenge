import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsConfigPaths()],
	server: {
		port: 3000
	},
	resolve: {
		alias: {
			'~': '/src'
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern',
				additionalData: `
					@import '~/theme/utils.scss';
				`
			}
		}
	}
})
