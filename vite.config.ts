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
                    let startStr = vEvent.start.toISOString();
                    let endStr = vEvent.end.toISOString();
                    
                    if (vEvent.datetype === 'date') {
                      const s = vEvent.start;
                      startStr = `${s.getFullYear()}-${String(s.getMonth() + 1).padStart(2, '0')}-${String(s.getDate()).padStart(2, '0')}`;
                      
                      const e = new Date(vEvent.end.getTime() - 24 * 60 * 60 * 1000);
                      endStr = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, '0')}-${String(e.getDate()).padStart(2, '0')}`;
                    }

                    busyDates.push({
                      start: startStr,
                      end: endStr,
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
