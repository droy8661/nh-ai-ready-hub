# NH AI Ready Coordination Hub
## Database Design

## Overview

The NH AI Ready Coordination Hub uses **Google Sheets** as the primary database.

The website is hosted on GitHub Pages and communicates with Google Sheets through Google Apps Script (future implementation).

The spreadsheet acts as a lightweight relational database.

Note: `PROJECT_CONTEXT.md` is the authoritative project specification and data model. Keep `DATABASE.md` in sync with `PROJECT_CONTEXT.md`.

## Documentation maintenance
Any update to the Google Sheets schema or worksheet columns must also be reflected in this `DATABASE.md` file. This document is the source of truth for sheet structure.

---

# Spreadsheet Structure

The workbook contains the following worksheets.

---

## Organizations

Stores participating organizations.

| Column | Description |
|----------|----------------|
| Organization ID | Unique identifier |
| Name | Organization name |
| Type | Business, Nonprofit, Government, Education, Library, Workforce, etc. |
| County | NH County |
| Contact | Primary contact |
| Email | Contact email |
| Website | Organization website |

---

## Contacts

Primary contacts for organizations.

| Column | Description |
|----------|----------------|
| Contact ID | Unique ID |
| Name | Contact name |
| Organization | Organization ID |
| Title | Job title |
| Email | Email |
| Phone | Phone number |

---

## Partners

Statewide partner organizations.

| Column | Description |
|----------|----------------|
| Partner ID | Unique identifier |
| Organization | Organization name |
| Contact | Primary contact |
| Role | Partner role |
| Active | Yes / No |

---

## Events

Upcoming workshops and conferences.

| Column | Description |
|----------|----------------|
| Event ID | Unique ID |
| Title | Event title |
| Date | Event date |
| Location | Physical or virtual |
| Capacity | Maximum attendees |
| Registration Link | Google Form or Eventbrite |

---

## Resources

Searchable AI resource library.

| Column | Description |
|----------|----------------|
| Resource ID | Unique identifier |
| Title | Resource title |
| Category | AI, Cybersecurity, Workforce, Education |
| Audience | Business, Education, Government, Nonprofit |
| URL | External resource |
| Description | Summary |

---

## Technical Assistance

Organizations requesting assistance.

| Column | Description |
|----------|----------------|
| Request ID | Unique identifier |
| Organization | Organization name |
| Status | New, Assigned, Closed |
| Assigned To | Staff member |
| Notes | Internal notes |
| Date | Submission date |

---

## AI Assessments

Stores AI readiness assessment results.

| Column | Description |
|----------|----------------|
| Assessment ID | Unique ID |
| Organization | Organization |
| Score | 0–100 |
| Recommendation | Generated recommendation |
| Date | Assessment date |

---

## Metrics

Used for NSF reporting.

| Column | Description |
|----------|----------------|
| Month | Reporting month |
| Organizations Served | Integer |
| Workshops | Integer |
| Participants | Integer |
| Assessments | Integer |

---

# Relationships

Organizations

↓

Contacts

↓

Technical Assistance

↓

AI Assessments

↓

Metrics

Events and Resources are standalone tables.

---

# Future Integrations

Google Forms

- Event Registration
- Technical Assistance Request
- AI Readiness Assessment
- Contact Form

Google Calendar

- Event Schedule

Looker Studio

- Executive Dashboard

Google Apps Script

- REST API
- CRUD Operations
- Authentication

---

# Website Features

The website will display information directly from Google Sheets.

Examples:

## Home Page

- Featured events
- Statistics
- Latest resources

## Resource Library

Displays rows from the Resources worksheet.

Supports:

- Search
- Filtering
- Categories

## Partner Directory

Displays Organizations and Partners.

Supports:

- County filter
- Organization type
- Search

## Events

Displays upcoming events from the Events worksheet.

## Dashboard

Reads Metrics worksheet.

Displays:

- Organizations Served
- Participants
- Workshops
- Counties Served
- Assessments Completed

---

# Future Database

If the project scales beyond Google Sheets, the database can migrate to:

- PostgreSQL
- Firebase
- Supabase
- Microsoft SQL Server

without changing the website architecture.

---

# Current Version

Database Version 0.1