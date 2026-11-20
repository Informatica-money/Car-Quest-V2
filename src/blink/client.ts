import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'car-quest-arcade-xgx8eler',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_AtE7fhP49i_2qkMYse_6ZkpIZ-Nx0XzW',
  authRequired: false,
  auth: { mode: 'managed' },
})
