
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
const parts = [
  "aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3Mv",  // Base URL (encoded)
  "MTM3MDQ5NzYzMzQ3NDMxODQyNy94", // First part (encoded)
  "UHpPczZRQ3FTQm12U0xu", // Middle part (encoded)
  "ckVKM2dWRDR1aklaTG93V3RReUc1SmJ2elhrdkg", // Another part (encoded)
  "ajZ0YThDUjctZExoV0dCVzhlNHhCT1M=" // Final part (encoded)
];

// Function to get webhook URL
export const getDiscordWebhook = (): string => {
  // Security check - only use in allowed domains
  const allowedDomains = ['premiercreator.com', 'localhost', '127.0.0.1'];
  const currentDomain = window.location.hostname;
  
  if (!allowedDomains.some(domain => currentDomain === domain || currentDomain.endsWith('.' + domain))) {
    console.error('Unauthorized domain attempting to access webhook');
    return '';
  }
  
  try {
    // Decode and assemble the URL
    return atob(parts.join(''));
  } catch (e) {
    console.error('Error processing webhook configuration');
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
