/**
 * Enumerations used throughout the application. Defining them in one file to reduce the likelihood
 * of circular dependencies.
 */

//
// Shared
//

/**
 * Route names used by the router for page selection.
 */
export enum RouteNameEnum {
  MENU_LAYOUT = 'MenuLayout',
  HOME = 'Home',
  EVENTS = 'Events',
  PARKS = 'Parks',
  PARK_INFORMATION = 'ParkInformation',
  PARK_AMENITIES = 'ParkAmenities',
  PARK_TRAILS = 'ParkTrails',
  ABOUT = 'About',
  NOT_FOUND = 'NotFound',
}
