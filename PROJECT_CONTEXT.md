# NH AI READY COORDINATION HUB

## PROJECT_CONTEXT.md

**Project Version:** 1.0
**Last Updated:** 2026-06-27
**Status:** Active Development

---

# PROJECT OVERVIEW

The NH AI Ready Coordination Hub is a statewide web portal supporting the National Science Foundation (NSF) AI Ready America initiative.

The portal will become a central location for discovering Artificial Intelligence education, workforce training, technical assistance, community events, partner organizations, and AI resources throughout New Hampshire.

The application will initially be hosted on GitHub Pages using Google Workspace as the backend.

Backend components include:

* Google Sheets
* Google Forms
* Google Apps Script
* Google Looker Studio

The website will be developed using HTML, CSS, and JavaScript.

---

# PROJECT GOALS

The application should eventually provide:

* Statewide AI Provider Directory
* AI Learning Opportunities
* Events Calendar
* Resource Library
* Technical Assistance Portal
* AI Readiness Assessment
* Partner Directory
* Dashboard & Metrics
* Search
* County Maps
* NSF Reporting

---

# TECHNOLOGY STACK

## Frontend

HTML5

CSS3

JavaScript (ES6)

## Hosting

GitHub Pages

## Backend

Google Sheets

## API

Google Apps Script

## Forms

Google Forms

## Dashboards

Google Looker Studio

## Development

Visual Studio Code

GitHub

---

# DATABASE DESIGN

Google Sheets will function as a lightweight relational database.

The data model is normalized.

Providers are stored once.

Courses belong to providers.

Course Offerings belong to courses.

Events belong to providers.

Resources belong to providers.

Contacts belong to providers.

---

# DATABASE RELATIONSHIPS

Providers

├── Learning Opportunities

│        └── Course Offerings

├── Events

├── Resources

└── Contacts

---

# PRIMARY KEYS

Every table MUST contain a permanent unique primary key.

Primary keys never change.

Examples

ProviderID

PROV-0001

CourseID

COURSE-0001

OfferingID

OFFER-0001

EventID

EVENT-0001

ResourceID

RES-0001

ContactID

CONTACT-0001

---

# FOREIGN KEYS

Learning Opportunities

ProviderID

↓

Providers.ProviderID

Course Offerings

CourseID

↓

LearningOpportunities.CourseID

Events

ProviderID

↓

Providers.ProviderID

Resources

ProviderID

↓

Providers.ProviderID

Contacts

ProviderID

↓

Providers.ProviderID

---

# TABLE: PROVIDERS

One record per organization.

## Required Fields

ProviderID

OrganizationName

OrganizationType

Website

TrainingPortal

Phone

StreetAddress

City

State

ZIP

County

Description

AIProgramSummary

Status

CreatedDate

ModifiedDate

LastVerified

## Optional Fields

ShortName

Email

ContactName

ContactTitle

Latitude

Longitude

CountiesServed

DeliveryArea

Facebook

LinkedIn

Instagram

YouTube

LogoURL

Nonprofit

Notes

---

# TABLE: LEARNING OPPORTUNITIES

One record per unique learning opportunity.

Examples

Course

Certificate

Degree

Workshop

Bootcamp

Meetup

Professional Development

Training Program

## Required Fields

CourseID

ProviderID

CourseTitle

Category

Topic

Audience

SkillLevel

DeliveryMethod

Duration

Cost

Certificate

RegistrationURL

Summary

Status

SourceURL

CreatedDate

ModifiedDate

LastVerified

## Optional Fields

Description

Hours

Credits

Instructor

CourseURL

Prerequisites

LearningOutcomes

SoftwareUsed

IndustryFocus

FinancialAid

ScholarshipsAvailable

Recurring

Notes

---

# TABLE: COURSE OFFERINGS

One row per scheduled offering.

Example

AI Essentials

July Cohort

August Cohort

September Cohort

## Required Fields

OfferingID

CourseID

StartDate

EndDate

RegistrationStatus

Location

City

County

CreatedDate

ModifiedDate

LastVerified

## Optional Fields

RegistrationDeadline

Capacity

SeatsAvailable

Instructor

CostOverride

Notes

---

# TABLE: EVENTS

One record per event.

## Required Fields

EventID

ProviderID

Title

Date

Location

City

County

Audience

RegistrationURL

Status

SourceURL

CreatedDate

ModifiedDate

LastVerified

## Optional Fields

Time

Cost

Speaker

Summary

Description

Notes

---

# TABLE: RESOURCES

One record per resource.

## Required Fields

ResourceID

ProviderID

Title

Category

Audience

Website

Summary

Status

SourceURL

CreatedDate

ModifiedDate

LastVerified

## Optional Fields

Description

DownloadURL

Cost

Tags

Notes

---

# TABLE: CONTACTS

One record per contact.

## Required Fields

ContactID

ProviderID

Name

Title

Email

Phone

CreatedDate

ModifiedDate

LastVerified

## Optional Fields

Department

LinkedIn

Notes

---

# CONTROLLED VOCABULARY

## Organization Types

University

Community College

Public Library

Academic Library

Government

State Agency

School District

Business

Nonprofit

Technology Company

Consulting Company

Professional Association

Workforce Board

Economic Development Organization

Healthcare Organization

Manufacturing Organization

Innovation Hub

Maker Space

Adult Education

Community Education

Other

---

## Delivery Methods

Online

Hybrid

In Person

Virtual Live

Self-paced

Asynchronous

---

## Skill Levels

Beginner

Intermediate

Advanced

All Levels

---

## Cost Types

Free

Paid

Tuition

Grant Funded

Scholarship Available

Employer Reimbursement

Membership Required

Subscription

Unknown

---

## Categories

Degree Program

Certificate

Professional Development

Training

Workshop

Webinar

Conference

Meetup

Hackathon

Community Event

Office Hours

Speaker Series

Technical Assistance

Bootcamp

---

# AI TOPIC VOCABULARY

Artificial Intelligence

Generative AI

Machine Learning

Deep Learning

Prompt Engineering

ChatGPT

Claude

Google Gemini

Microsoft Copilot

NotebookLM

Automation

AI Agents

Responsible AI

AI Ethics

Natural Language Processing

Computer Vision

Cybersecurity

Robotics

Python

Data Science

Analytics

Business Intelligence

Accessibility

Digital Literacy

---

# RESEARCH METHODOLOGY

The project is built by identifying organizations first.

Workflow

1. Identify a New Hampshire organization.
2. Create one Provider record.
3. Review the organization's website.
4. Identify every AI-related learning opportunity.
5. Create one Learning Opportunity record for each unique course.
6. Create Course Offering records for scheduled sessions.
7. Record the official source URL.
8. Record the Last Verified date.

---

# SEARCH CATEGORIES

Universities

Community Colleges

Public Libraries

State Library

Teacher Professional Development

Government Agencies

Technology Nonprofits

Economic Development Organizations

Business Consultants

Workforce Development

Manufacturing Extension

Healthcare Organizations

Innovation Centers

Maker Spaces

Adult Education

Professional Associations

Meetups

Conferences

Hackathons

Community Organizations

---

# MINIMUM DATA REQUIREMENTS

Every Provider must include

* Organization Name
* Website
* Training Portal
* Phone
* Street Address
* City
* State
* ZIP
* County
* Organization Type
* Description
* AI Program Summary
* Status
* Last Verified

Every Learning Opportunity must include

* Course Title
* Provider
* Category
* Topic
* Audience
* Skill Level
* Delivery Method
* Duration
* Cost
* Certificate
* Registration URL
* Summary
* Source URL
* Last Verified

---

# DATA QUALITY RULES

* One Provider record per organization.
* Never duplicate ProviderIDs.
* Never renumber IDs.
* Preserve official organization names.
* Preserve official course titles.
* Use official websites whenever possible.
* Capture the original source URL.
* Use ISO date format (YYYY-MM-DD).
* Record LastVerified for every record.
* Update ModifiedDate whenever a record changes.

---

# REPOSITORY STRUCTURE

README.md

PROJECT_CONTEXT.md

DATABASE.md

SEARCH_PLAN.md

CHANGELOG.md

LICENSE

/data

providers.csv

learning_opportunities.csv

course_offerings.csv

events.csv

resources.csv

contacts.csv

/research

STATUS.md

universities.md

community_colleges.md

libraries.md

government.md

nonprofits.md

business.md

teacher_training.md

---

# RESEARCH WORKFLOW

For each research batch:

1. Search one category.
2. Update providers.csv.
3. Update learning_opportunities.csv.
4. Update course_offerings.csv (if applicable).
5. Update the corresponding research markdown file.
6. Update STATUS.md.
7. Update CHANGELOG.md.
8. Commit all changes to GitHub.

---

# CURRENT RESEARCH PHASE

Phase 1

Universities

Phase 2

Community Colleges

Phase 3

Libraries

Phase 4

Government

Phase 5

Nonprofits

Phase 6

Business & Industry

Phase 7

Workforce Development

---

# END GOAL

Develop and maintain the most comprehensive public database of AI education, workforce training, technical assistance, events, and resources available in the State of New Hampshire.

The database will support:

* Public website search
* Interactive dashboards
* AI readiness referrals
* County-based resource discovery
* NSF proposal activities
* Long-term statewide coordination

This document is the authoritative specification for the project. Future development, data collection, and website implementation should follow the architecture, schema, and workflow defined here.
