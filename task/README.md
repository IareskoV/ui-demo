# Simple Device List Editor

## Objective

Develop a demo project using Angular and TypeScript for a simple device list editor.

## Requirements

- Utilize Angular with TypeScript.
- Utilize a modular structure for components, services, and styling.
- Use components or styling libraries if desired.

### Application Pages

- [Home Page](home-page.png) - a placeholder for future implementation.
- [Support Page](support-page.png) - a placeholder for future implementation.
- [Device List Page](devices-list-page.png) - displays a list of devices with pagination support.
- [Device Edit Page](devices-details-page.png) - displays the details of a selected device and allow editing.

#### Device List Page

- Use [devices.json](devices.json) to populate initial application state.
- Display the device name, tags, and a description indicator for each device.
- Device tags should render up to 8 characters. If longer, truncate the tag and append an ellipsis. 
- Description indicator:
  - Green: description length is >= 100 characters.
  - Yellow: description length is between 50 and 100 characters.
  - Red: description length is < 50 characters.
- Implement pagination with configurable page size:
  - Default: 10 devices per page.
  - Selection options: 10, 20, or 40 devices per page.

#### Device Details Page

- Display device details, including name, tags, and description.
- Allow editing and saving changes for device details.
- "Name" field is required - prevent saving if it's empty.

### Navigation

- Provide a navigation menu for accessing the home page, support page, and device list page.

### Responsiveness

- Ensure the application is responsive and suitable for various screen sizes.

### Documentation

- Include comments throughout the code to explain the purpose and functionality of different components and services.
- Provide a README file with instructions for setting up, running, and testing the application.

## Deliverables

A zip archive containing git repository with source code for the Angular application (including all components,
services, and styling), as well as the documentation.
