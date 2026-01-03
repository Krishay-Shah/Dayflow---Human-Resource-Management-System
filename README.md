# Dayflow---Human-Resource-Management-System
HR Management System

dayflow_hrms/
│
├── __init__.py                  # 1. Module Initializer
├── __manifest__.py              # 2. Module Metadata & File List
│
├── models/                      # 3. Database Logic (PostgreSQL)
│   ├── __init__.py              #    - Imports hrms.py
│   └── hrms.py                  #    - Contains Employee, Attendance, Leave Classes
│
├── views/                       # 4. UI Definitions
│   └── views.xml                #    - Contains Menus, Forms, Trees, Dashboards
│
└── security/                    # 5. Permissions
    └── ir.model.access.csv      #    - Grants read/write access to users
