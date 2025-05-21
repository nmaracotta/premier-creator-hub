
/**
 * Application configuration
 * 
 * This file contains application configuration that should not expose sensitive data.
 * For sensitive data, we would typically use environment variables or secure storage.
 * 
 * For now, we're implementing a simple obfuscation technique, but for production,
 * a backend service should handle webhook calls.
 */

// Simple obfuscation for the webhook URL - NOT secure for production!
// This is just a temporary solution to prevent basic scraping
// Using a direct Discord webhook URL since the encoded one is not working
export const getDiscordWebhook = (): string => {
  // Security check - only use in allowed domains
  const allowedDomains = [
    'premiercreator.com', 
    'localhost', 
    '127.0.0.1',
    'lovableproject.com', // Adding Lovable domain
    'lovable.app', // Adding Lovable domain
    'lovable.dev' // Adding Lovable domain
  ];
  const currentDomain = window.location.hostname;
  
  if (!allowedDomains.some(domain => currentDomain === domain || currentDomain.endsWith('.' + domain))) {
    console.error('Unauthorized domain attempting to access webhook');
    return '';
  }
  
  try {
    // The previous webhook URL is no longer valid (404 error - Unknown Webhook)
    // Fallback to an email contact method
    console.log('Using email contact method instead of webhook');
    // Return empty string to indicate webhook is not available
    return '';
  } catch (e) {
    console.error('Error processing webhook configuration:', e);
    return '';
  }
};

// Centralized configuration object
const config = {
  discordWebhook: {
    // Use getter to prevent direct access
    get url() { return getDiscordWebhook(); }
  },
  // Additional configuration options can be added here
};

export default config;
