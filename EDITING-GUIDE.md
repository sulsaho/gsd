# How to Edit the Government Services Directory

This guide is for **non-technical staff** who need to update services, contact information, or add new content to the website.

## 📋 Table of Contents
- [Quick Start: Editing on GitHub](#quick-start-editing-on-github)
- [What You Can Edit](#what-you-can-edit)
- [How to Edit Services](#how-to-edit-services)
- [How to Add a New Service](#how-to-add-a-new-service)
- [How to Add a New Department](#how-to-add-a-new-department)
- [How to Add a New Ministry](#how-to-add-a-new-ministry)
- [Tips and Common Mistakes](#tips-and-common-mistakes)

---

## Quick Start: Editing on GitHub

**You don't need to install anything! You can edit directly on GitHub.**

### Step-by-Step:

1. **Go to your GitHub repository**
   - Navigate to: `https://github.com/YOUR-USERNAME/government-services-directory`

2. **Find the services file**
   - Click on the `src` folder
   - Click on the `data` folder
   - Click on `services.json`

3. **Click the pencil icon** (✏️) in the top right corner
   - This says "Edit this file"

4. **Make your changes**
   - Edit the text directly in the browser
   - Follow the examples in this guide below

5. **Preview your changes** (optional)
   - Click the "Preview" tab to see what changed

6. **Save your changes**
   - Scroll to the bottom
   - Write a brief description of what you changed (e.g., "Updated passport office phone number")
   - Click **"Commit changes"** (green button)

7. **Wait a few minutes**
   - GitHub will automatically rebuild and deploy your website
   - Your changes will appear on the live site in 2-5 minutes

### Video Tutorial
GitHub has a guide here: https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files

---

## What You Can Edit

**Everything on the website comes from ONE file:**

```
src/data/services.json
```

This file contains:
- All ministries
- All departments
- All services
- All contact information
- All costs and processing times

**You do NOT need to touch any other files!**

---

## How to Edit Services

### Step 1: Open the file
1. Navigate to: `src/data/services.json`
2. Open it in any text editor (Notepad, TextEdit, VS Code, etc.)

### Step 2: Find what you want to edit
Press `Ctrl+F` (or `Cmd+F` on Mac) and search for:
- The service name (e.g., "Medical Professional License")
- The ministry name (e.g., "Ministry of Health")
- The department name (e.g., "Licensing & Registration")

### Step 3: Make your changes
You can change:
- `"name"` - The service name
- `"description"` - What the service does
- `"cost"` - How much it costs (e.g., "D2,500")
- `"processingTime"` - How long it takes (e.g., "4-6 weeks")
- `"contactPhone"` - Phone number
- `"contactEmail"` - Email address
- `"officeAddress"` - Physical address
- `"officeHours"` - When the office is open
- `"requirements"` - List of what documents are needed
- `"link"` - External website URL (optional)
- `"notes"` - Important extra information (optional)

### Example:
**Before:**
```json
{
  "id": "medical-license",
  "name": "Medical Professional License",
  "description": "License for doctors, nurses, etc",
  "cost": "D2,500",
  "processingTime": "4-6 weeks",
  "contactPhone": "+220-XXX-XXXX"
}
```

**After (changed cost and phone):**
```json
{
  "id": "medical-license",
  "name": "Medical Professional License",
  "description": "License for doctors, nurses, etc",
  "cost": "D3,000",
  "processingTime": "4-6 weeks",
  "contactPhone": "+220-439-2072"
}
```

### Step 4: Save the file

**If editing on GitHub:**
- Scroll to the bottom and click "Commit changes"

**If editing locally:**
- Press `Ctrl+S` (or `Cmd+S` on Mac)
- Push to GitHub

### Step 5: See your changes
The website will automatically update in 2-5 minutes after you commit to GitHub

---

## How to Add a New Service

### Step 1: Find the right ministry and department
Open `src/data/services.json` and search for the ministry and department where this service belongs.

### Step 2: Copy an existing service
Find a similar service and **copy the entire block** from `{` to `}` including the commas.

### Example - Adding "Dental License":
```json
{
  "id": "health-licensing",
  "name": "Licensing & Registration",
  "icon": "certificate",
  "services": [
    {
      "id": "medical-license",
      "name": "Medical Professional License",
      "description": "License for doctors, nurses, etc",
      "requirements": [
        "Bachelor's degree in medical field",
        "Pass licensing exam"
      ],
      "processingTime": "4-6 weeks",
      "cost": "D2,500",
      "contactName": "Licensing Department",
      "contactPhone": "+220-439-2072",
      "contactEmail": "licensing@health.gm",
      "officeAddress": "123 Health Building, Kairaba Avenue, Banjul",
      "officeHours": "Monday-Friday, 8 AM - 4 PM"
    },
    {
      "id": "dental-license",
      "name": "Dental Professional License",
      "description": "License for dentists and dental hygienists",
      "requirements": [
        "Dental degree from accredited institution",
        "Pass dental board exam",
        "Police clearance certificate"
      ],
      "processingTime": "4-6 weeks",
      "cost": "D2,500",
      "contactName": "Licensing Department",
      "contactPhone": "+220-439-2072",
      "contactEmail": "licensing@health.gm",
      "officeAddress": "123 Health Building, Kairaba Avenue, Banjul",
      "officeHours": "Monday-Friday, 8 AM - 4 PM"
    }
  ]
}
```

### Step 3: Important things to remember
- **Add a comma** after the previous service's closing `}`
- The `"id"` must be **unique** (use lowercase with hyphens, e.g., "dental-license")
- Keep the same structure (don't remove any `"` or `:` or `{` or `}`)
- The last service in a list should NOT have a comma after its closing `}`

---

## How to Add a New Department

### Step 1: Find the ministry
Open `src/data/services.json` and find the ministry where you want to add a department.

### Step 2: Copy an existing department
Copy an entire department block including all its services.

### Example:
```json
{
  "id": "health",
  "name": "Ministry of Health",
  "departments": [
    {
      "id": "health-licensing",
      "name": "Licensing & Registration",
      "icon": "certificate",
      "services": [ ... ]
    },
    {
      "id": "health-pharmacy",
      "name": "Pharmacy Regulation",
      "icon": "store",
      "services": [
        {
          "id": "pharmacy-inspection",
          "name": "Pharmacy Inspection Service",
          "description": "Annual pharmacy inspection and compliance check",
          "requirements": [
            "Valid pharmacy license",
            "Updated inventory records"
          ],
          "processingTime": "1-2 weeks",
          "cost": "D500",
          "contactName": "Pharmacy Inspections",
          "contactPhone": "+220-439-2076",
          "contactEmail": "inspections@health.gm",
          "officeAddress": "123 Health Building, Kairaba Avenue, Banjul",
          "officeHours": "Monday-Friday, 8 AM - 4 PM"
        }
      ]
    }
  ]
}
```

### Available icons:
- `"certificate"` - License/certification
- `"document"` - Documents/records
- `"passport"` - Travel/passport
- `"shield"` - Security/police
- `"plane"` - Immigration/travel
- `"car"` - Vehicles/transport
- `"truck"` - Commercial transport
- `"briefcase"` - Business
- `"store"` - Retail/shops

---

## How to Add a New Ministry

### Step 1: Copy an entire ministry
Find an existing ministry and copy everything from its opening `{` to its closing `}`.

### Step 2: Paste it at the end of the ministries list
Make sure to add a comma after the previous ministry.

### Example:
```json
{
  "ministries": [
    {
      "id": "health",
      "name": "Ministry of Health",
      "description": "Health services and licensing",
      "phone": "+220-439-2072",
      "email": "info@health.gm",
      "website": "https://www.moh.gov.gm",
      "departments": [ ... ]
    },
    {
      "id": "education",
      "name": "Ministry of Education",
      "description": "Education services and school registration",
      "phone": "+220-422-4455",
      "email": "info@education.gm",
      "website": "https://www.moe.gov.gm",
      "departments": [
        {
          "id": "education-registration",
          "name": "School Registration",
          "icon": "document",
          "services": [
            {
              "id": "school-license",
              "name": "Private School License",
              "description": "License to operate a private school",
              "requirements": [
                "Qualified teachers on staff",
                "Approved curriculum",
                "Safe school facilities"
              ],
              "processingTime": "8-12 weeks",
              "cost": "D10,000",
              "contactName": "School Licensing Office",
              "contactPhone": "+220-422-4456",
              "contactEmail": "licensing@education.gm",
              "officeAddress": "Ministry of Education, Banjul",
              "officeHours": "Monday-Friday, 8 AM - 4 PM"
            }
          ]
        }
      ]
    }
  ]
}
```

---

## Tips and Common Mistakes

### ✅ DO:
- Always keep the double quotes `"` around text
- Add commas between items in a list
- Use a JSON validator to check your file: https://jsonlint.com
- Make a backup before making big changes
- Test locally with `npm run dev` before pushing

### ❌ DON'T:
- Remove or add extra `{` or `}` or `[` or `]`
- Forget commas between items
- Add a comma after the last item in a list
- Use special characters without escaping them
- Change the `"id"` of existing services (this will break links)

### Common Errors:

**Missing comma:**
```json
{
  "name": "Service 1"
  "cost": "D100"  ← WRONG! Missing comma after "Service 1"
}
```

**Correct:**
```json
{
  "name": "Service 1",
  "cost": "D100"
}
```

**Extra comma at the end:**
```json
{
  "services": [
    { "id": "service-1" },
    { "id": "service-2" },  ← WRONG! Last item shouldn't have comma
  ]
}
```

**Correct:**
```json
{
  "services": [
    { "id": "service-1" },
    { "id": "service-2" }
  ]
}
```

---

## Need Help?

1. **Validate your JSON:** Copy and paste your entire `services.json` file into https://jsonlint.com to check for errors
2. **GitHub will warn you:** If there's an error, GitHub will show a warning before you commit
3. **Check the browser console:** Press `F12` in your browser and look for error messages
4. **Compare with the original:** Look at the examples in this guide or the existing services
5. **Undo changes on GitHub:** Go to the file history (click "History" button) and restore a previous version

---

## Quick Reference: Service Template

Copy this template when adding a new service:

```json
{
  "id": "unique-service-id",
  "name": "Service Name Here",
  "description": "Brief description of what this service does",
  "requirements": [
    "First requirement",
    "Second requirement",
    "Third requirement"
  ],
  "processingTime": "X-Y weeks",
  "cost": "DX,XXX",
  "contactName": "Department Name",
  "contactPhone": "+220-XXX-XXXX",
  "contactEmail": "email@ministry.gm",
  "officeAddress": "Full address here",
  "officeHours": "Monday-Friday, 8 AM - 4 PM",
  "link": "https://optional-website-link.com",
  "notes": "Optional important notes"
}
```

Replace the placeholder text with your actual information!
