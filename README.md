
# 🎓 Educational Organisation Management System (ServiceNow)

A cloud-based Educational Organisation Management System built on the **ServiceNow Platform (PaaS)** to centralize student lifecycle management including registration, admissions, and academic progress tracking.

This project demonstrates how a low-code platform can be used to build a scalable, secure, and automated school administration system using table extensions, business rules, and client scripts.

---

## 📌 Project Overview

The Educational Organisation Management System eliminates manual spreadsheet-based student tracking by creating a **Single Source of Truth** using a parent-child table architecture.

Core Features:

- ✅ Automated SAL-ID generation using Number Maintenance
- ✅ Parent-Child table architecture (Table Extension)
- ✅ Admission workflow with visual process flow (Chevron)
- ✅ Automated Total & Percentage calculation
- ✅ Client-side UI validation using JavaScript
- ✅ Secure cloud-based access with Role-Based Access Control

---

## 🏗️ System Architecture

The application follows a **3-Tier Cloud Architecture**:

### 1️⃣ Presentation Layer
- ServiceNow Forms & List Views
- Process Flow (Admission Status)
- Client Scripts for UI validation

### 2️⃣ Application Logic Layer
- Server-side Business Rules
- Auto-calculation of: Percentage = (Total Marks / Maximum Marks) × 100
- - Number Maintenance Engine for SAL-ID generation

### 3️⃣ Data Layer
- MariaDB (Managed by ServiceNow)
- Relational schema with Table Extension:
- `u_salesforce` (Parent Table)
- `u_admission` (Child Table)
- `u_student_progress` (Child Table)

---

## 🗂️ Database Structure

### 🔹 Parent Table
`u_salesforce`
- Stores core student bio-data
- Generates unique SAL-ID

### 🔹 Child Tables

#### `u_admission`
- Admission status tracking
- Admin details
- Process Flow management

#### `u_student_progress`
- Subject marks entry
- Auto-calculated Total
- Auto-calculated Percentage
- Result (Pass / Fail)

---

## ⚙️ Implemented Automation

### 🔢 Number Maintenance
- Automatically generates unique IDs:SAL0001, SAL0002, SAL0003...

  
### 🧮 Server-Side Business Rules
- Automatically calculates:
- Total Marks
- Percentage
- Result

### 💻 Client Scripts (JavaScript)
- Auto-populate fields
- Pincode-based updates
- Disable calculated fields on load
- Real-time percentage update
- Subject total update scripts

---

## 📊 Functional Highlights

| Module | Functionality |
|--------|--------------|
| Salesforce | Master student record |
| Admission | Workflow-based admission tracking |
| Student Progress | Automated academic performance tracking |
| Dashboard | Real-time administrative insights |

---

## 🧪 Testing & Performance

| Test Case | Status |
|-----------|--------|
| SAL-ID auto generation | ✅ Pass |
| Table inheritance | ✅ Pass |
| Marks auto calculation | ✅ Pass |
| Workflow stage update | ✅ Pass |

Performance Metrics:
- ⏱ Record Save Time: < 2 seconds
- 🎯 Calculation Accuracy: 100%

---

## 📸 Project Screenshots

The project includes:
- Salesforce Table View
- Admission Table with Process Flow
- Student Progress (Pass Case)
- Student Progress (Fail Case)
- Client Script configurations

Refer to the project documentation for detailed visuals.

---

## 🚀 Technology Stack

- **Platform:** ServiceNow (Vancouver / Washington Release)
- **Database:** MariaDB (Managed)
- **Programming Language:** JavaScript
- **Architecture:** Table Extension Model
- **UI Framework:** ServiceNow Form Designer
- **Automation Engine:** Business Rules + Client Scripts

---

## 📈 Advantages

- Eliminates duplicate student IDs
- Removes manual calculation errors
- Centralized student data management
- Secure cloud-based system
- Scalable modular design

---

## ⚠️ Limitations

- Requires active ServiceNow instance
- Internet connectivity required
- Dependent on platform subscription

---

## 🔮 Future Enhancements

- 📱 Parent mobile access
- 📊 Predictive analytics for performance tracking
- 📚 Library module integration
- 💰 Fee management system
- 📝 Attendance tracking

---


---

## 🎥 Project Demonstration

Project Video:
https://drive.google.com/file/d/1dyI3F1UE9TU9hk1E8saIqP44fNinFm3s/view?usp=sharing

---

## 👨‍💻 Authors

**Dharma Teja** 
**Varchaswi Datta**
**Srinivas**

ServiceNow Internship Project  

GitHub: https://github.com/Dharmateja15/Educational-Organisation-Using-ServiceNow/

---

## 📌 Conclusion

This project demonstrates how ServiceNow’s low-code capabilities can be leveraged to build a scalable and automated Educational Organisation Management System with high accuracy, reduced manual effort, and centralized data governance.
