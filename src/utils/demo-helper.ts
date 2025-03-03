/**
 * Utility functions for demo mode
 */

/**
 * Gets the destination URL for the iframe based on the target path
 * and the optional origin
 * 
 * @param targetPath The path to navigate to
 * @param origin Optional origin. If empty, uses relative URL
 * @returns The complete URL to load in the iframe
 */
export function getDestinationUrl(targetPath: string, origin: string = ''): string {
  // Clean the target path to make sure it starts with a slash
  const cleanPath = targetPath.startsWith('/') ? targetPath : `/${targetPath}`;
  
  // Construct the URL - relative if no origin provided
  return `${origin}${cleanPath}`;
}

/**
 * Detects if the current page is loaded within an iframe
 * This helps the app adjust its UI when in demo mode
 * 
 * @returns boolean True if in an iframe
 */
export function isInDemoFrame(): boolean {
  return typeof window !== 'undefined' && window.self !== window.top;
}

/**
 * Add this to any client-side script to adjust UI when in demo mode
 * For example, hiding certain elements or adjusting padding
 */
export function applyDemoModeAdjustments(): void {
  if (isInDemoFrame()) {
    document.documentElement.classList.add('in-demo-frame');
    
    // You can add any demo-specific adjustments here
    // For example:
    // - Hide elements that don't make sense in a demo
    // - Adjust sizing for the smaller viewport
    // - Pre-fill forms with demo data
  }
}
