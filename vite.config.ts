import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import ical from 'node-ical'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      vue(),
      {
        name: 'api-calendar-proxy',
        configureServer(server) {
          server.middlewares.use('/api/calendar', async (req, res) => {
            try {
              const CALENDAR_URL = env.ICAL_URL || '';
              let busyDates: any[] = [];
              if (CALENDAR_URL) {
                const events = await ical.async.fromURL(CALENDAR_URL);
                for (const event of Object.values(events)) {
                  if (event && event.type === 'VEVENT') {
                    const vEvent = event as any;
                    // Include all events (free/busy mode Google Calendar exports busy events as VEVENT)
                    busyDates.push({
                      start: vEvent.start.toISOString(),
                      end: vEvent.end.toISOString(),
                    });
                  }
                }
              }
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ busyDates }));
            } catch (error) {
              console.error('Local API Error:', error);
              res.statusCode = 500;
              res.end(JSON.stringify({ error: 'Failed to fetch calendar' }));
            }
          });
        }
      }
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
